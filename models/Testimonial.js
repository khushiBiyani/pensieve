var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Testimonial = new Schema({
  Sender: String,
  Receiver: String,
  Date: String,
  Content: String,
});

module.exports = Testimonial = mongoose.model("testimonials", Testimonial);
