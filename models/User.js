var mongoose = require 'mongoose'
var Schema = mongoose.Schema
var bcrypt = require 'bcrypt'
var SALT_WORK_FACTOR = 10

var UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    "default": 'User'
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profiles: [{type:Schema.Types.ObjectId, ref: 'Profile'}],
  height:{
    type:Schema.Types.ObjectId,
    ref:'Height'
  },
  weight: {
    type: Schema.Types.ObjectId,
    ref: 'Weight'
  }
}, {
  timestamps: true
});

UserSchema.pre('save', function(next) {
  var user = this;
  return hashPass(user, next);
});

UserSchema.pre('findOneAndUpdate', function(next){
  var user = this.model()
  hashPass(user, next)
})


hashPass = function(user, next) {
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
};


UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};




User = mongoose.model('User', UserSchema)

module.exports = User
