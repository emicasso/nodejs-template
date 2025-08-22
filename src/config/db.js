import mongoose from 'mongoose';

// conexion a base de datos mongoDBAtlas
const connectDB = (url) =>
    mongoose.connect(url).then(() => console.log('DataBase connected'));

export default connectDB;
