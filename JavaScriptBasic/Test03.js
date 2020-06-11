function lifeInWeeks(age) {
    var days = 90 * 365
    var weeks = 90 * 52
    var months = 90 * 12
    var ageDays = days - (age * 365)
    var ageWeeks = weeks - (age * 52)
    var ageMonths = months - (age * 12)
    console.log(`You have ${ageDays} days, ${ageWeeks} weeks, and ${ageMonths} months left.`)
 }
 
 lifeInWeeks(51)
 