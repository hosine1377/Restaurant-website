let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLink =document.querySelectorAll("header .navbar a");





menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})
window.onscroll=()=>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")

    sections.forEach(section=>{
        let top =window.scrollY;
        let hight = section.offsetHeight;
        let offset = section.offsetTop - 150;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + hight){
            navLink.forEach(link =>{
                link.classList.remove("active");
                document.querySelector('header .navbar a[href*='+id+']').classList.add("active")
            })
        }
    })
}
document.querySelector("#search-icon").addEventListener("click",()=>{
    document.querySelector("#search-form").classList.toggle("active");

})
document.querySelector("#close").addEventListener("click",()=>{
    document.querySelector("#search-form").classList.remove("active")
});

function loader (){
    document.querySelector(".loader-continer").classList.add("fade-out");

}
function fadeOut(){
    setInterval(loader,3000);
}
window.onload=fadeOut;

// var swiper = new Swiper(".home-slider", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop:true,
// });