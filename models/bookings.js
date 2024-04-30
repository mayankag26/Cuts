import mongoose, { Schema, models } from "mongoose"

const bookingsSchema = new Schema(
  {
    userid: {
        type: String
    },
    salonid: {
        type: String
    },
    useremail:{
        type:String
    },
    status: {
        type: Boolean // true means currently in queue ans false means service has been provided to customer
    },
    queueNo: { 
        type: Number //time of booking, not which slot but time at which queue number booked by user
    },
    rating: {
        type: Number //rating given by user
    },
    review: {
        type: String //comment/review given by user
    },
    reviewImages: {
        type: [] //array containing links of images
    }
  },
);

const Bookings = models?.Bookings || mongoose.model("Bookings", bookingsSchema);

export default Bookings;