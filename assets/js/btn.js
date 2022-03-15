var select = document.getElementById('mySelect');
select.onchange = function () {
    select.className = this.options[this.selectedIndex].className;
}