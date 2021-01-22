// kilometer to meter calculator
// we know 1 kelometer = 1000 meter
function kilometerToMeter(kilometer) {
    if(kilometer<1){
        console.log('it is not valid')
    }else{
    var meter = kilometer * 1000;
    return meter;}
}
var result = kilometerToMeter(-2)
//console.log(result)

// budget calculator watch; mobile; laptop
var watchPrice = 500;
var mobilePrice = 10000;
var laptopPrice = 40000;

function budgetCalculator(numofWatch,numofMobile,numofLaptop) {

    if(numofLaptop<1||numofLaptop)
    var watchCost = watchPrice * numofWatch;
    var mobileCost = mobilePrice * numofMobile;
    var laptopCost = laptopPrice * numofLaptop;
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}
var price = budgetCalculator(2,3,4)
console.log(price);

// hotel cost calculator
// first 10 days cost = 500/day
// second 10 days cost = 400/day
// third 10 days cost= 300/day

function hotelCost(days) {
    if(days<1){console.log('not valid')}else{
    if (days <= 10) {
        var cost = days * 500;
    } else if (days <= 20) {
        var firstTenDays = 10 * 500;
        var cost = (days - 10) * 400 + firstTenDays;
    } else {
        var firstTenDays = 10 * 500;
        var secondTenDays = 10 * 400;
        var cost = (days - 20) * 300 + firstTenDays + secondTenDays;
    }
    return cost;}
}
var counter = hotelCost(0);
// console.log(counter)

// findout megafriend name

function megaFriend(names) {
    if(names==''||names==0){
        console.log('it is unvalid')
    }else{
    for (var i = 0; i < names.length; i++) {
        var max = names[0]
        var element = names[i];
        if (element.length > max.length) {
            max = element;
        }

    }
    return max;}
}
var friend = megaFriend(['fjj','fjk','fkj','fjkk'])
console.log(friend)