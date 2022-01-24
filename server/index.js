// Server
const express = require('express')
const app = express()
const port = 5000

// Database
const config = require('./config/dev')
const mongoose = require('mongoose')
mongoose
	.connect(config.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!눈누난나'))

// Signup
const { User } = require('./models/User')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/register', (req, res) => {
	const user = new User(req.body)
	user.save((err, userInfo) => {
		if (err) return res.json({ success: false, err })
		return res.status(200).json({ success: true })
	})
})

// Login
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.post('/login', (req, res) => {
	// 요청된 이메일을 데이터베이스에서 찾고
	User.findOne({ email: req.body.email }, (err, user) => {
		if (!user) {
			return res.json({
				loginSuccess: false,
				message: '요청된 이메일에 해당하는 유저가 없습니다.'
			})
		}
		// 비밀번호가 맞는지 확인 후
		user.comparePassword(req.body.password, (err, isMatch) => {
			if (!isMatch)
				return res.json({
					loginSuccess: false,
					message: '비밀번호가 틀렸습니다'
				})
			// 생성된 토큰을 쿠키에 저장
			user.generateToken((err, user) => {
				if (err) return res.status(400).send(err)
				res.cookie('x_auth', user.token)
					.status(200)
					.json({ loginSuccess: true, useId: user._id })
			})
		})
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
