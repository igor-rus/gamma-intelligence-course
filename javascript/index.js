
const fruits = 'Apple, Banana, Pear';
console.log(fruits[fruits.length - 1]);
console.log(fruits.slice(0, fruits.length));
//strings are immutable

const car = {
     make: 'Honda',
     model: 'Accord',
     engine: 'atmospheric',
     fuel: 'petrol',
     info: {
          year: 2007,
          color: 'gray'
     }
}

console.log(car);
// delete car.make;
console.log(car['info']['year']);
// let myCarCopy = Object.assign({}, car);
// const myCarCopy = {...car}
const myCarCopy = JSON.parse(JSON.stringify(car));
myCarCopy.info.year = 2015; //nested objects are not copied

console.log(car);
console.log(myCarCopy);

const userName = 'Jesus';
const friendsQty = 800000000;
const userProfile = {
     // name: userName,
     // friends: friendsQty,
     userName,
     friendsQty,
     isResurrected: false
}
console.log(userProfile);

const button = {
     width: 200,
     text: 'Submit'
}

const redButton = {...button, color: 'Red'} //can also spread more than one
console.log(redButton);
const numArr = [1,2,3]
numArr[10] = 123;
numArr['001'] = 20;
console.log(numArr);


const nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach((num)=> {
     console.log(num ** 2);
})

let removed = nums.pop();
console.log(nums);
console.log(removed);

nums.unshift(0);
console.log(nums);
const number = nums.shift();
console.log(number);
console.log(nums);

console.log(Object.values(car));
console.log(Object.keys(car));
console.log(Object.entries(car));


