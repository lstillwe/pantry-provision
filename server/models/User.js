const { Schema,  model } = require('mongoose');
const bcrypt = require('bcrypt');

const itemSchema = new Schema({
  itemId: {
      type: String,
      required: true,
  },
  name: {
      type: String,
      required: true,
  },
  price: {
      type: Number,
      required: true,
  },
  quantity: {
      type: Number,
      required: true,
  },
  threshold: {
      type: Number,
      required: true,
  },
  storage: {
      type: String,
      required: true,
  },
  category: {
      type: String,
      required: true,
  },
});

const userSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
      },
      password: {
        type: String,
        required: true,
        minlength: 6
      },
      items: [ itemSchema ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );
  
  // set up pre-save middleware to create password
  userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;
  