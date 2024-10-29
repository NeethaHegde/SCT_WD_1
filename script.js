function stickyNav(){
   var h=document.querySelector("#about").offsetHeight/2;
   var navbar=document.querySelector("nav"); 
   var scrollValue=window.scrollY;
   if (scrollValue > h){
      navbar.classList.add("header-sticky")
   }
   else{
      navbar.classList.remove("header-sticky")
   }
}
window.addEventListener("scroll",stickyNav)
