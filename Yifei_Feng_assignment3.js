/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const divs = document.getElementsByClassName("questionDiv");
let q1Table = document.createElement("table");
q1Table.id = "q1Table";

let q1Thead = document.createElement("thead");
let thTr = document.createElement("tr");
tableInfo.tableHeader.forEach((ele) => {
  let th = document.createElement("th");
  th.textContent = ele;
  thTr.appendChild(th);
});
q1Thead.appendChild(thTr);
q1Table.appendChild(q1Thead);

let q1Tbody = document.createElement("tbody");
tableInfo.tableContent.forEach((ele) => {
  let tr = document.createElement("tr");
  let tdN = document.createElement("td");
  tdN.textContent = ele["Student Name"];
  tr.appendChild(tdN);
  let tdA = document.createElement("td");
  tdA.textContent = ele["Age"];
  tr.appendChild(tdA);
  let tdP = document.createElement("td");
  tdP.textContent = ele["Phone"];
  tr.appendChild(tdP);
  let tdAd = document.createElement("td");
  tdAd.textContent = ele["Address"];
  tr.appendChild(tdAd);
  q1Tbody.appendChild(tr);
});
q1Table.appendChild(q1Tbody);
divs[0].appendChild(q1Table);

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let q2Ol = document.createElement("ol");
q2Ol.id = "oList";
list.forEach((ele) => {
  let q2Li = document.createElement("li");
  q2Li.textContent = ele;
  q2Ol.appendChild(q2Li);
});
divs[1].appendChild(q2Ol);

let q2Ul = document.createElement("ul");
q2Ul.id = "uList";
list.forEach((ele) => {
  let q2Li = document.createElement("li");
  q2Li.textContent = ele;
  q2Ul.appendChild(q2Li);
});
divs[1].appendChild(q2Ul);
/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let q3Select = document.createElement("select");
dropDownList.forEach((ele) => {
  let op = document.createElement("option");
  op.textContent = ele.content;
  op.value = ele.value;
  q3Select.appendChild(op);
});
divs[2].appendChild(q3Select);
