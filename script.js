let section = document.querySelectorAll(".section");
console.log(section);
let sectionArr = [...section];
let sectionInfo = section.querySelector("ul");
let hide = () => {
  console.log(this);
  sectionInfo.classList.toggle("hidden");
};

sectionArr.forEach(item => item.addEventListener("click", hide));
