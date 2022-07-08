import RoomSchema from '../models/room.js'
import BookingSchema from '../models/booking.js'
import CustomerSchema from '../models/customer.js'

/*   Create Room    */

export const createRoom = async (req, res) => {
  try {
    const { id, roomName, numberOfSeats, amenities, pricePerHour } = req.body

    const room = new RoomSchema({
      id,
      roomName,
      numberOfSeats,
      amenities,
      pricePerHour
    })
    console.log(room)

    const savedRoom = await room.save()
    console.log(savedRoom)
    res.json(savedRoom)
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

/*   Create Booking   */

export const createBooking = async (req, res) => {
  try {
    const { id, customerName, customerId, date, startTime, endTime, roomId } = req.body

    let tempDate = new Date(date)
    tempDate += ''

    const existingBooking = await BookingSchema.find()

    existingBooking.forEach((eachBooking) => {
      if (eachBooking.id === id) { throw ('Booking with same id exists!') }

      if (eachBooking.roomId === roomId && eachBooking.date + '' === tempDate) {
        if (startTime === undefined || endTime === undefined) { throw 'Booking already exits for this room on the same date' } else if ((startTime >= eachBooking.startTime && startTime <= eachBooking.endTime) || (startTime <= eachBooking.startTime && endTime >= eachBooking.endTime)) { throw 'Booking already exits for this room on same date and time!' }
      }
    })

    const booking = new BookingSchema({
      id,
      customerId,
      customerName,
      date,
      startTime,
      endTime,
      roomId

    })
    console.log(booking)

    const savedBooking = booking.save()
    console.log(savedBooking)
    res.json(savedBooking)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

/*   Create Customer  */

export const createCustomer = async (req, res) => {
  try {
    const { customerName, id, idProof, mobileNumber, email } = req.body
    const customer = new CustomerSchema({
      id,
      customerName,
      idProof,
      mobileNumber,
      email
    })
    console.log(customer)

    const savedCustomer = await customer.save()
    console.log(savedCustomer)
    res.json(savedCustomer)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

/*    Get all Rooms   */

export const getRooms = async (req, res) => {
  try {
    const rooms = await RoomSchema.find()
    res.json(rooms)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

/*    Get all Customers  */

export const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerSchema.find()
    res.json(customers)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}
/*    Get all Bookings   */

export const getBookings = async (req, res) => {
  try {
    const bookings = await BookingSchema.find()
    res.json(bookings)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}
