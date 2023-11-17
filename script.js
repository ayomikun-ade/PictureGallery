let names = document.querySelectorAll(".name");

names.forEach((name) => {
  name.addEventListener("click", function () {
    name.style.color = "#FFE500";
    name.parentElement.style.backgroundColor = "grey";
    name.parentElement.style.borderRadius = "8px";
  });
});
