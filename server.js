
//Dropdown ButtonMEnu (BTN 1)
function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


//REMOVE Dropdown Menu when user clicks elsewhere on page
window.onclick= function(event){
    if (!event.target.matches('.dropBtn')){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}