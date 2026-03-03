document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector(".brands_button");
  const list = document.querySelector(".brands_list");

  button.addEventListener("click", () => {
    const isExpanded = list.classList.toggle("expanded");

    button.textContent = isExpanded
      ? "Скрыть"
      : "Показать все";
  });

});