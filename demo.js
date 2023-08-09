function sortMaker(arr) {
    if (arr[0] >= 0 && arr[1] >= 0) {
        if (arr[0] === arr[1]) {
            return "equal"
        }
        else {
            let arr2 = [];
            let mx = Math.max(arr[0], arr[1])
            let mn = Math.min(arr[0], arr[1])
            arr2.push(mx);
            arr2.push(mn);
            return arr2;
        }
    }
    else {
        return "Invalid Input";
    }
}

let result1 = cubeNumber(4);
console.log(result1);

let string1 = "Peter Parker";
let string2 = "Peter Parker";
let result2 = matchFinder(string1, string2);
console.log(result2);

let arr = [-1, 2];
let result3 = sortMaker(arr);
console.log(result3);

const obj = {
    // street : "10",
    house: "15A",
    society: "Earth Perfect"
}
let result4 = findAddress(obj);
console.log(result4);

let changeArray = [1, 2, 7];
let totalDue = 10;
let result5 = canPay(changeArray, totalDue);
console.log(result5);