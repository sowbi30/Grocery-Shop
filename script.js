document.addEventListener('DOMContentLoaded', () => {
    let searchForm = document.querySelector('.search-form');
    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        LoginForm.classList.remove('active');
        navbar.classList.remove('active');
    }

    let shoppingCart = document.querySelector('.shopping-cart');
    
    document.querySelector('#cart-btn').onclick = () => {
        shoppingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        LoginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
    let LoginForm = document.querySelector('.login-form');
    
    document.querySelector('#login-btn').onclick = () => {
        LoginForm.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        navbar.classList.remove('active');
    }
    let navbar = document.querySelector('.navbar');
    
    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        LoginForm.classList.remove('active');
    }
    window.onscroll = () => {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        LoginForm.classList.remove('active');
        navbar.classList.remove('active');
    }
    var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 10,
        breakpoints : {
          0: {
            slidesPerView: 1,
           
          },
          780: {
            slidesPerView: 2,
          
          },
          950: {
            slidesPerView: 3,
            
          },
          1000: {
            slidesPerView: 4,
            
          },
        },
    });
        var swiper = new Swiper(".review-slider", {
            loop:true,
            spaceBetween: 20,
            autoplay: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            
            },
          });
     
});

