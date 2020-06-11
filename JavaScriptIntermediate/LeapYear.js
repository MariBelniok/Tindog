function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                var resp = 'Leap year.'
            } else {
                var resp = 'Not leap year.'
            }
        } else {
            var resp = 'Leap year.'
        }
    } else {
        var resp = 'Not leap year.'
    }
    return resp
}

console.log(isLeap(1948))