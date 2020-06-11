var i = 100;
function beer(){
    while (i >= 0){
        c = (i - 1)
        if (c < 1){
            c = 'no more'
        }
        if (i < 1){
            i = 'no more'
        }
        console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + c + ' bottles of beer on the wall.')
        i--;
        }
    }


beer()