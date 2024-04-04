const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // googleId 값이 null이 중복으로 들어가는 것을 막음
  },
  kakaoId: {
    type: String,
    unique: true,
    sparse: true,
  },
});

const saltRounds = 10;
userSchema.pre("save", function (next) {
  let user = this;
  // 비밀번호가 변경될 때만
  if (user.isModified("password")) {
    // salt를 생성
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // bcrypt compare
  // plain password => client, this.password => 데이터베이스에 저장되어 있는 비밀번호
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
