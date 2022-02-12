const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    minlength: 5,
    maxlength: 30
  },
  description: {
    type: String,
    // required: true,
    minlength: 5,
    maxlength: 1024
  },
  category: {
    type: String,
    // required: true
  },
  createDate: {
    type: String
  },
  dueDate: {
    type: String
  },
  isAdmin: Boolean
})
const Event = mongoose.model('Event', EventSchema);

exports.EventSchema = EventSchema;
exports.Event = Event; 