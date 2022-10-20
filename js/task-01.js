const items = document.querySelectorAll("#categories > .item");
console.log("Number of categories: ", items.length);
console.log("");

// const list = document.querySelector("#categories");
// console.log("Number of categories: ", list.children.length);
// console.log("");

// console.log(
//   "Number of categories: ",
//   document.querySelector("#categories").children.length
// );
// console.log("");

items.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("ul > li").length);
  console.log("");
});

// items.forEach((item) => {
//   console.log("Category: ", item.firstElementChild.textContent);
//   console.log("Elements: ", item.lastElementChild.children.length);
//   console.log("");
// });

// [...items].map((item) => {
//   console.log("Category: ", item.querySelector("h2").textContent);
//   console.log("Elements: ", item.querySelectorAll("ul > li").length);
//   console.log("");
// });
