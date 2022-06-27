const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema(
  {
    first: { type: String, index: true },
    last: { type: String, index: true },
  },
  { _id: false }
);

const phoneSchema = new mongoose.Schema(
  {
    phone: String,
    primary: Boolean,
  },
  { _id: false }
);

const emailSchema = new mongoose.Schema(
  {
    email: String,
    primary: Boolean,
  },
  { _id: false }
);

const socialSchema = new mongoose.Schema(
  {
    facebook: String,
    linkedin: String,
    github: String,
    skype: String,
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: nameSchema,
    phones: [phoneSchema],
    emails: [emailSchema],
    password: String,
    sex: String,
    roles: [String],
    social: socialSchema,
    notes: { type: String, text: true },
    hash: String,
    disabled: Boolean,
    created: Date,
    modified: Date,
  },
  { versionKey: false }
);

const user = mongoose.model("users", userSchema);
module.exports = { user };
