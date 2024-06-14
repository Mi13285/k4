let element = document.body.firstElementChild;
console.log(element);
const myImage = document.querySelector("img");
console.log(myImage);
const srcValue = myImage.src;
console.log(srcValue);
let elements = document.querySelectorAll("li");
console.log(elements);

for (let elem of elements) {
  console.log(elem.innerHTML);
}
