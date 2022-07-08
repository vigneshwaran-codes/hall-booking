import mongoose from 'mongoose'

// Create Schema for Customer Details

const CustomerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  idProof: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

const Customer = mongoose.model('customer', CustomerSchema)

export default Customer
