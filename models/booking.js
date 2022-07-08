import mongoose from 'mongoose'

// Create Schema for Booking room

const BookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  customerId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    unique: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: [{
    type: Date,
    required: true
  }],
  roomId: {
    type: String,
    required: true
  }
})

const Booking = mongoose.model('booking', BookingSchema)

export default Booking
