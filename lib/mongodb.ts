import mongoose from  'mongoose';

const MONGO_URL=process.env.MONGO;

if(!MONGO_URL){
    throw new Error ('MongoDB connection string is not defined');

}
async  function connectToDatabase(){
    if(mongoose.connection.readyState===1)
    {
        return mongoose;
    }

const opts={
    bufferCommands:false,
}
await mongoose.connect(MONGO_URL!,opts);
return mongoose;


}

export default connectToDatabase;
