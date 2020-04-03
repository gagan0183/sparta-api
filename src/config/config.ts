import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';


export class Config {
    constructor() {
        dotenv.config();
        this.connectDB();
    }

    async connectDB() {
        console.log(process.env.MONGODB_URI);
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