const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://node-auth:xzv6d79aCDdMNDVV@cluster0.h26mv.mongodb.net/node-auth?retryWrites=true&w=majority'

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
};

module.exports = InitiateMongoServer;