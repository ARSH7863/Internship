var selects = document.querySelectorAll("#mySelect");

selects.forEach((select) => {
  select.onchange = function () {
    select.className = this.options[this.selectedIndex].className;
  };
});