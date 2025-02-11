const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  dateAndTime:{
    type: String,
    required: true
  },
  eventImage:{
    type: String,
    required: true
  },
  eventType:{
      type: String,
    required: true
    },
  eventVenue:{
    type: String,
  required: true
  },
  paidFee:{
    type: Number,
  required: true
  },
  speakers: {
    type: [String],
    required: true
    },
  speakerDetails:{
      type: [String],
    required: true
  },
  hostedBy:{
      type: String,
    required: true
  },
  eventDetails:{
    type: String,
    required: true
  }
},
  {
  timestamps:  true
});

const Event = mongoose.model('Event', eventSchema)

module.exports = Event