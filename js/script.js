let burger = document.querySelector('.burger');
let clouse = document.querySelector('.clouse');
let burger_menu = document.querySelector('.burger_menu');
let link1 = document.querySelector('.link1');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');
let header_content = document.querySelector('.header_content');
let our_packages_content = document.querySelector('.our_packages_content');
let members__content = document.querySelector('.members__content');


burger.onclick = () => {
    burger_menu.style.transform = "translateY(0)";
    burger.style.display = "none";
    clouse.style.display = "block";
};
clouse.onclick = () => {
    burger_menu.style.transform = "translateY(-100%)";
    clouse.style.display = "none";
    burger.style.display = "block";
};

function header_content_src(event){
    event.preventDefault()
    header_content.scrollIntoView({
        block : "center",
        behavior:"smooth",
        inline : "end"
    })
}
function our_packages_src(event){
    event.preventDefault()
    our_packages_content.scrollIntoView({
        block : "center",
        behavior:"smooth",
        inline : "end"
    })
}
function members_content_src(event){
    event.preventDefault()
    members__content.scrollIntoView({
        block : "center",
        behavior:"smooth",
        inline : "end"
    })
}


link1.addEventListener('click',header_content_src)
link2.addEventListener('click',our_packages_src)
link3.addEventListener('click',members_content_src)






var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: 'true',
    loop: true,
    spaceBetween: 70,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay:{
        delay: 3500,
    },    
    
});







    












