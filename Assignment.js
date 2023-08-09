function cubeNumber(number) {
    if (typeof number != 'number') {
        return "Please! Provide a number."
    }
    else {
        let result = number * number * number;
        return result;
    }
}

function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string'){
        return "Please! Provide two string."
    }
    else{
        let result = string1.includes(string2)
        return result;
    }
}

function sortMaker(arr) {
    if(arr[0] >= 0 && arr[1] >= 0){
        if(arr[0] === arr[1]){
            return "equal"
        }
        else{
            let arr2 =[];
            let mx = Math.max(arr[0],arr[1])
            let mn = Math.min(arr[0],arr[1])
            arr2.push(mx);
            arr2.push(mn);
            return arr2;
        }
    }
    else{
        return "Invalid Input";
    }
}

function findAddress(obj) {
    let street = obj.street || "__"
    let house = obj.house || "__"
    let society = obj.society || "__"

    return street+","+house+","+society;
}

function canPay(changeArray, totalDue){
    if(changeArray.length == 0){
         return "Please! provide a non-empty array."
    }
    else{
        let sum=0;
        for(let element of changeArray){
           sum +=element;
        }
        if(sum >= totalDue){
           return true;
        }
        else 
           return false;
    }
}





let result1 = cubeNumber(4);
console.log(result1);

let string1 = "peter Parker";
let string2 =  "o";
let result2 =matchFinder(string1,string2);
console.log(result2);

let arr = [1,1];
let result3 = sortMaker(arr);
console.log(result3);

const obj = {
    street : "10",
    house : "15A",
    society: "Earth Perfect"
}
let result4 = findAddress(obj);
console.log(result4);

let changeArray = [1,0,9];
let totalDue = 10;
let result5 = canPay(changeArray,totalDue);
console.log(result5);