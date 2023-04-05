const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();

const API = process.env.DATABASE_URL || "mongodb://localhost/instaclone"
async function main(){
await mongoose.connect(API,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!'))


app.listen(process.env.PORT , ()=>console.log(`local Server is Running on ${process.env.PORT}...`))
}
main()


