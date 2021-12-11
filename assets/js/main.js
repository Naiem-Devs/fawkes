(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  // glitch Title 

  function glitchTitle () {

    $(".glitch-title").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl2").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl3").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl4").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl5").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl6").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl7").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl8").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
    $(".gl9").glitch({
      layers: ["#F11421", "#59FBFC"],
      offset: [10, 0],
  });
  
  }
  glitchTitle ()
        
  // owlCarousel
  $(".team_wrp").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    navText: [
      '<img src="assets/img/left-arrow.png" alt="">',
      '<img src="assets/img/right-arrow.png" alt=""></img>'
    ],
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 3,
        margin: 0
      },
      1300: {
        items: 4
      }
    }
  });

// Animation

  AOS.init({
    disable: 'mobile', 
    debounceDelay: 50, 
    throttleDelay: 99, 
    offset: 120,
    delay: 0, 
    duration: 800, 
    easing: 'ease', 
});


    // Parallex Effect
    function ParallexEffect() { 
      let clubArea = document.querySelector('.club-area');
      let ImgsBlk  = document.querySelectorAll('.club-wrp .clubImgBlk');
      window.addEventListener('scroll', () => { 
          let windowScrolled  = window.scrollY;
          console.log(window.innerWidth)
          if (window.innerWidth > 992) { 
              let BlkFromTop      = clubArea.offsetTop;  
              let BlkHeight       = clubArea.clientHeight;
              ImgsBlk[0].style.top  = "-"+((windowScrolled) / 3)+"px";
              ImgsBlk[1].style.top  = "-"+((windowScrolled) / 5)+"px"; 
          }else{
              ImgsBlk[0].style.top  = "0px";
              ImgsBlk[1].style.top  = "0px"; 
          }
      
      })
  
    }
    ParallexEffect()


    // nav bar Active Function

  const navBtn = document.querySelectorAll('.menu-area ul a')

  navBtn.forEach(navBtns => {
      navBtns.addEventListener('click', () => {
          removeActive()
          navBtns.classList.add('active')
      })
  })
  
  function removeActive() {
      navBtn.forEach(navBtns => {
          navBtns.classList.remove('active')
      })
  }
  
  const mbBtn = document.querySelectorAll('.md_nav a')

  mbBtn.forEach(mbBtns => {
      mbBtns.addEventListener('click', () => {
          const menuClass = document.querySelector('.mobile-menu')
          menuClass.classList.remove('siteBar')
      })
  })
  
 
})(jQuery);
