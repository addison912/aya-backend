const mongoose = require("mongoose");
Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, select: false }
});

UserSchema.set("toJSON", {
  transform: function(doc, ret, opt) {
    delete ret["password"];
    return ret;
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
