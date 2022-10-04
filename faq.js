var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function (event) {
    this.classList.toggle("active");
    // debugger;
    let icon = this.querySelector('.accordion-icon');
    var panel = this.nextElementSibling; 
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // icon.innerHTML = '+';
      icon.classList.toggle('active')
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      // icon.innerHTML = '-';
      icon.classList.toggle('active')
    }
  });
}  