import '/sass/main.scss'

import $ from "jquery";
// import './styles.css'

import CarListingWidget from './js/widgets/CarListingWidget.js'
import carShowDetail from './js/widgets/carShowDetail.js'
// import widget_c from './js/widgets/widget_c.js'
// import widget_d from './js/widgets/widget_d.js'
// import widget_e from './js/widgets/widget_e.js'

import './js/default.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';



if (window.location.pathname === '/') {
  $(document).ready(function () {
    // widget_c();
    // widget_d();
    // widget_e();

    // SPLASH PAGE-----
    setTimeout(function () {
      $("#splash").fadeOut("slow")

      setTimeout(function () {
        sessionStorage.setItem('visitedBefore', 'visited')

      }, 500);
    }, 2000);

    let tokenSlash = sessionStorage.getItem('visitedBefore')

    if (tokenSlash == "visited") {
      $("#splash").remove()
      $('#topPage').removeClass('animate__delay-3s')
      $('body').css('overflow', 'visible')
    } else {
      $('body').css('overflow', 'hidden')
    }


  })
}

$(document).ready(function () {
  CarListingWidget();
  carShowDetail();
  AOS.init({
    anchorPlacement: 'bottom-bottom',
    animatedClassName: 'aos-animate',
    initClassName: 'aos-init',
  });

  setTimeout(function () {
    $('#preloader').fadeOut("fast")
  }, 1000);
})


