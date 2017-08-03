require('.dbConnection')
const Jersey = require('./models/jerseys')


new Jersey({ color: "red"}).save();
new Jersey({ color: "black"}).save();
new Jersey({ color: "blue"}).save();
new Jersey({ color: "yellow"}).save();
new Jersey({ color: "white"}).save();
