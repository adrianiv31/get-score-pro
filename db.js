// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URL);
 //   'mongodb+srv://get-score:wppz9IIE9pJX1WDe@cluster0.w6iqhei.mongodb.net/get-score-pro?retryWrites=true&w=majority');
  console.log('MongoDB connected');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}