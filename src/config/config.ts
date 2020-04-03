import * as dotenv from 'dotenv';
import mongoose from 'mongoose';


export class Config {
    constructor() {
        dotenv.config();
    }

    async connectDB() {
        if (process.env.ENVIRONMENT === 'dev') {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } else {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        }
    }

}