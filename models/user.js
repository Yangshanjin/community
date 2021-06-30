var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Community', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
var Schema = mongoose.Schema
var userSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	secretQuestion: {
		type: String,
		required: true
	},
	secret: {
		type: String,
		required: true
	},
	created_time: {
		type: Date,
		default: Date.now
	},
	avatar: {
		type: String,
		default: '/public/img/avatar-max-img.png'
	},
	bio: {
		type: String,
		default: ''
	},
	gender: {
		type: Number,
		enum: [-1, 0, 1],
		default: -1
	},
	fan: {
		type: Number,
		default: 0
	},
	birthday: {
		type: Date
	},
	status: {
		type: Number,
		// 0 没有权限限制
		// 1 不可以评论
		// 2 不可以登录
		enum: [0, 1, 2],
		default: 0
	}
})
module.exports = mongoose.model('User', userSchema)
