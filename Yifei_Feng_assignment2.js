/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
console.log("===========Q1===========");
const doubleEle = (objArray) => {
  let clone = objArray.map((obj) => ({ ...obj }));
  clone.forEach((ele) => {
    ele.quantity *= 2;
    ele.price *= 2;
    return ele;
  });
  return clone;
};
console.log(doubleEle(itemsObject));
console.log("========================");
const filterEle = (objArray) => {
  let clone = objArray.map((obj) => ({ ...obj }));
  return clone.filter((ele) => {
    return ele.quantity > 2 && ele.price > 300;
  });
};
console.log(filterEle(itemsObject));
console.log("========================");
const total = (objArray) => {
  let clone = objArray.map((obj) => ({ ...obj }));
  return clone.reduce((acc, cur) => acc + cur.price, 0);
};
console.log(total(itemsObject));

/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

console.log("===========Q2===========");
const conv = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^0-9a-z]/gi, " ");
};
console.log(conv(string));

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const merge = (array1, array2) => {
  let array3 = array1.map((obj) => ({ ...obj, role: null }));
  let array4 = array2.map((obj) => ({ ...obj, name: null }));
  for (let i = 0; i < array1.length; i++) {
    if (array4.some((item) => item.uuid === array3[i].uuid)) {
      array3[i].role = array4.find((obj) => obj.uuid === array3[i].uuid).role;
    }
  }
  let merged = [
    ...array3,
    ...array4.filter((item) => array3.every((obj) => obj.uuid !== item.uuid)),
  ];
  merged.sort((a, b) => (a.uuid > b.uuid ? 1 : -1));
  return merged;
};
console.log("===========Q3===========");
console.log(merge(first, second));
