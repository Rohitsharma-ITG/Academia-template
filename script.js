let search = document.querySelector(".serch-input");
let open = document.querySelector(".search-icon");
let close = document.querySelector(".close");

open.addEventListener("click", function(){
  console.log("serch open click");   
  search.classList.add("block");     // for input block
  open.classList.add("none");       // for search none
  close.classList.add("block")      // for close icon block
})

close.addEventListener("click", function(){
  search.classList.remove("block");   // for remove input block
  open.classList.remove("none");      // for remove search none
  close.classList.remove("block")    // for remove close icon block
})

//  for drawer menu //

let nav = document.querySelector(".nav-2");
let bar = document.querySelector(".drawer-bar");
let closs_menu = document.querySelector(".close-menu");

bar.addEventListener("click", function(){
    console.log("serch open click");   
    nav.classList.add("block");     // for input block
    bar.classList.add("none");       // for search none
    closs_menu.classList.add("block")      // for close icon block
  })
  
  closs_menu.addEventListener("click", function(){
    nav.classList.remove("block");   // for remove input block
    bar.classList.remove("none");      // for remove search none
    closs_menu.classList.remove("block")    // for remove close icon block
  })

//   for making tab

document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('input[name="section-tab"]');
  const sections = document.querySelectorAll('.content-tab');

  radios.forEach(radio => {
      radio.addEventListener('change', () => {
          sections.forEach(section => {
              section.style.display = 'none'; // Hide all sections
          });
          const selectedSection = document.getElementById(radio.value);
          selectedSection.style.display = 'block'; // Show the selected section
      });
  });
});


// for tab color

let tab_2 = document.querySelector(".tab-label-2");
let lab_1 = document.querySelector(".lab-1");
let lab_2 = document.querySelector(".lab-2");
let lab_3 = document.querySelector(".lab-3");
let lab_4 = document.querySelector(".lab-4");
let lab_5 = document.querySelector(".lab-5");

lab_1.addEventListener("click", function(){
  console.log("tab click");   
  lab_1.classList.add("tab-label-2");         //for adding class 
  lab_2.classList.remove("tab-label-2");         // for removing a class
  lab_3.classList.remove("tab-label-2");   
  lab_4.classList.remove("tab-label-2");    
  lab_5.classList.remove("tab-label-2");     
})
lab_2.addEventListener("click", function(){
  console.log("tab click");   
  lab_2.classList.add("tab-label-2");         //for adding class 
  lab_1.classList.remove("tab-label-2");         // for removing a class
  lab_3.classList.remove("tab-label-2");   
  lab_4.classList.remove("tab-label-2");    
  lab_5.classList.remove("tab-label-2");     
})
lab_3.addEventListener("click", function(){
  console.log("tab click");   
  lab_3.classList.add("tab-label-2");         //for adding class 
  lab_2.classList.remove("tab-label-2");         // for removing a class
  lab_1.classList.remove("tab-label-2");   
  lab_4.classList.remove("tab-label-2");    
  lab_5.classList.remove("tab-label-2");     
})
lab_4.addEventListener("click", function(){
  console.log("tab click");   
  lab_4.classList.add("tab-label-2");         //for adding class 
  lab_2.classList.remove("tab-label-2");         // for removing a class
  lab_3.classList.remove("tab-label-2");   
  lab_1.classList.remove("tab-label-2");    
  lab_5.classList.remove("tab-label-2");     
})
lab_5.addEventListener("click", function(){
  console.log("tab click");   
  lab_5.classList.add("tab-label-2");         //for adding class 
  lab_2.classList.remove("tab-label-2");         // for removing a class
  lab_3.classList.remove("tab-label-2");   
  lab_4.classList.remove("tab-label-2");    
  lab_1.classList.remove("tab-label-2");     
})

// for slider 

$('.section-4-slider').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});