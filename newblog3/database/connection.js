const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const MONGO_URI = 'mongodb+srv://userone:useroneuserone@cluster0.b41nv.mongodb.net/?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 5000,
    // autoIndex: false, // Don't build indexes
    // maxPoolSize: 10, // Maintain up to 10 socket connections
    // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

// const MONGO_URI = 'mongodb://localhost:27017/blog';
const connection = async () => {
    try {
        const con = await mongoose.connect(MONGO_URI, options)
        console.log('Connection successfuly!!!', con.connection.host)
    } catch (err) {
        console.log(err.message)
    }
}

// const connection = async () => {
    //     try {
//         const con = await mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })

//         console.log('Connection successfuly!!!', con.connection.host)
//     } catch (err) {
    //         console.log(err.message)
//     }
// }

module.exports = connection