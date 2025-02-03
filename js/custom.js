// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(36.89454636529404, 10.18614677329075),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

const buttons = document.querySelectorAll('.slider_section .btn-box .btn1');

        buttons.forEach(button => {
          button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
                 });
              }
          });
        });

        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if(targetElement) {
                   window.scrollTo({
                     top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
                }
            });
        });