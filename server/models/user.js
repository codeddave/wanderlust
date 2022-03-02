const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: [true, "please provide an email"] },
  password: {
    type: String,
    required: [true, "please provide a password"],
    select: false,
  },
});

/* UserSchema.pre("save", async function(next){
if(!this.isModified("password")) {
  next()
}
  
}) */

module.exports = mongoose.model("User", UserSchema);
