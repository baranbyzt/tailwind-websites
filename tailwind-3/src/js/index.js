
    let item1 = document.getElementById('item_1').style;
    let item2 = document.getElementById('item_2').style;

    item2.display="none"

function burger_button_clicked() {


 
let go = document.getElementById('responsive_child_menu').style;

if(go.display == "none"){
    go.display = "flex";

    item1.display="none"
    item2.display="flex"
}else{
    go.display = "none";

    item1.display="flex"
    item2.display="none"
}


}  
var swiper = new Swiper('.swiper-container', {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
  400: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 30,
  },
  1200: {
   slidesPerView: 3,
   slidesPerGroup: 3,
   spaceBetween: 30,
  },
  },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
     },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*


item1.display="none"
    item2.display="flex"


*/