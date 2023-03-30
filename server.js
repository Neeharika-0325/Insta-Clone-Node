const mongoose = require('mongoose')
const port = 8080
const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();


const API = process.env.DATABASE_URL || "mongodb://localhost/instaclone"
async function main(){
await mongoose.connect(API,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!'))


app.listen(port , ()=>console.log(`Server is Running on ${port}...`))
}
main()


