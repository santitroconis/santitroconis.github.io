function home(){
    window.scrollTo(0,0);
}

var prevScrollPos = window.scrollY;
const shadowClass = "show-shadow";

window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    const navElement = document.getElementById("nav");

    const isScrollingDown = ((window.scrollY >= 1) && prevScrollPos < currentScrollPos);  

    navElement.style.top = isScrollingDown ? "-110px" : "0px"
    prevScrollPos = currentScrollPos;
    
    const navClass = navElement.classList
    currentScrollPos < 40 ? navClass.remove(shadowClass) : navClass.add(shadowClass)
}



