import mongoose from 'mongoose'

// Create Schema for room

const RoomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  numberOfSeats: {
    type: Number,
    required: true
  },
  amenities: [{
    type: String,
    required: true
  }],
  pricePerHour: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
})

const Room = mongoose.model('room', RoomSchema)

export default Room
