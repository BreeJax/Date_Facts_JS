const chalk = require("chalk")
const moment = require("moment")

// console.log(chalk.hex("#0096d6")("it's a small world afterall "))

console.log("It is " + chalk.hex("#0096d6")(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")))

console.log("It is the " + chalk.hex("#a51d61")(moment().dayOfYear()) + " day of the year")

console.log("It is the " + chalk.hex("#1da599")(moment().diff(moment().startOf("Day"), "s")) + " seconds into the day")

let _DST = moment().isDST()

function DST() {
  if (_DST == true) {
    console.log("It " + chalk.hex("#4a8e33")("is") + " Daylight Savings Time")
  } else {
    console.log("It " + chalk.hex("#4a8e33")("is not") + " Daylight Savings Time")
  }
}

DST()

let _ly = moment().isLeapYear()

function ly() {
  if (_ly == true) {
    console.log("It " + chalk.hex("#840606")("is") + " a Leap Year")
  } else {
    console.log("It " + chalk.hex("#840606")("is not") + " a Leap Year")
  }
}
ly()
