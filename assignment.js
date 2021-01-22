// https://github.com/Razibul-Alam/javascript_assignment3

// kilometer to meter calculator
// we know 1 kelometer = 1000 meter
function kilometerToMeter(kilometer) {
    if(kilometer<1){
        console.log('kilometer value can not be nagetive and 0 ')
    }else{
    var meter = kilometer * 1000;
    return meter;}
}
var result = kilometerToMeter(5)
console.log(result)


// budget calculator watch; mobile; laptop
var watchPrice = 500;
var mobilePrice = 10000;
var laptopPrice = 50000;

function budgetCalculator(numofWatch,numofMobile,numofLaptop) {

    if(numofWatch<0||numofMobile<0||numofLaptop<0){
        console.log('nagetive value is not valid')
    }else{
    var watchCost = watchPrice * numofWatch;
    var mobileCost = mobilePrice * numofMobile;
    var laptopCost = laptopPrice * numofLaptop;
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;}
}
var price = budgetCalculator(2,4,1)
console.log(price);

// hotel cost calculator
// first 10 days cost = 300/day
// second 10 days cost = 200/day
// after 20 days cost= 100/day
var tenDaysRent = 300;
var after10DaysRent = 200;
var after20DaysRent = 100;

function hotelCost(days) {
    if (days < 1) {
        console.log('days value can not be nagetive and 0')
    } else {
        if (days <= 10) {
            var totalCost = days * tenDaysRent;
        } else if (days <= 20) {
            var firstTenDaysCost = 10 *tenDaysRent;
            var totalCost = (days - 10) *after10DaysRent  + firstTenDaysCost;
        } else {
            var firstTenDaysCost = 10 * tenDaysRent;
            var secondTenDaysCost = 10 * after10DaysRent;
            var totalCost = (days - 20) * after20DaysRent+ firstTenDaysCost + secondTenDaysCost;
        }
        return totalCost;
    }
}
var counter = hotelCost(45);
console.log(counter)

// findout megafriend name
// enter an array in the magaFriend function

function megaFriend(names) {
    var max = ''
    if(names==''||names==0){
        console.log('it is unvalid')
    }else{
    for (var i = 0; i < names.length; i++) {
        
        var element = names[i];
        if (element.length > max.length) {
            max = element;
        }

    }
    return max;}
}
var friend = megaFriend(['shakib','tamim','mahmudullah','habibulllla'])
console.log(friend)