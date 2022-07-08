import express from 'express'

import { createRoom, createCustomer, createBooking, getRooms, getCustomers, getBookings } from '../controller/Controller.js'

const router = express.Router()

router.get('/rooms', getRooms)
router.get('/customers', getCustomers)
router.get('/bookings', getBookings)
router.post('/createroom', createRoom)
router.post('/createcustomer', createCustomer)
router.post('/createbooking', createBooking)

export const bookingRouter = router
