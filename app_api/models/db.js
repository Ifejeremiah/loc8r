const mongoose = require('mongoose');

// Database connection string to open a mongoose connection
let dbURI = process.env.MONGODB_URI;

// Connection to database
mongoose.connect(dbURI, { useNewUrlParser: true });

// Listens for mongoose connection events and outputs statuses to console
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  })
  .on('error', err => {
    console.log(`Mongoose connection error:\n${err}`);
  })
  .on('disconnected', () => {
    console.log('Mongoose disconnected!');
  });

// Emit SIGINT signal for termination on windows platforms
const readLine = require('readline');
if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit("SIGINT");
  });
}

// Reuseable function to close the mongoose connection
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// Listens for node processes for termination or restarts signals

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restarting', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For application termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

// For deployed app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Deployed app shutdown', () => {
    process.exit(0);
  });
});

// Bringing in Schemas and Models
require('./locations');
require('./users');