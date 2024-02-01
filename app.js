var prevScrollPos = window.scrollY;
const shadowClass = "show-shadow";

window.onscroll = function() {
const currentScrollPos = window.scrollY;
const navElement = document.getElementById("nav");
const isScrollingDown = prevScrollPos < currentScrollPos 

navElement.style.top = isScrollingDown ? "-100px" : "0px"

prevScrollPos = currentScrollPos;
    const navClass = navElement.classList
    currentScrollPos < 40 ? navClass.remove(shadowClass) : navClass.add(shadowClass)
}



