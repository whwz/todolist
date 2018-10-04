let input = document.querySelector("input");
let ul = document.querySelector("ul");
input.value = "";
//add new todo
input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    let todoText = "<li><span>&times;</span> " + this.value + "</li>";
    ul.innerHTML += todoText;
    this.value = "";
  }
});
//uncheck/chech clicked todo
//adding event listener to parent, so class toggle can work on dynamically added children (new lis)
ul.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "li") {
    event.target.classList.toggle("done");
  }
});
//remove todo by clicking x
//adding event listener to parent, so fade out and remove can work on dynamically added children (new spans)
ul.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "span") {
    event.target.parentNode.classList.add("hidden");
    setTimeout(function() {
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }, 600);
    event.stopPropagation();
  }
});
