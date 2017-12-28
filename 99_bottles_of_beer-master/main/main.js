/**
 * Created by asus on 2017/12/27.
 */
module.exports = function Songs(number){
    if(number<100 && number>1)
    {
        let temp = number.toString();
        let temp1 = (number-1).toString();
        return temp+" bottles of beer on the wall, "+temp+" bottles of beer.\n"+
            "Take one down and pass it around, "+temp1+" bottles of beer on the wall.";
    }
    else
    {
        return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
};