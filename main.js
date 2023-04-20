import '/sass/main.scss'

import $ from "jquery";
// import './styles.css'

import widget_a from './js/widgets/widget_a.js'
import widget_b from './js/widgets/widget_b.js'
import widget_c from './js/widgets/widget_c.js'
import widget_d from './js/widgets/widget_d.js'
import widget_e from './js/widgets/widget_e.js'

import './js/default.js';


// document.querySelector('#app').innerHTML = ``


if (window.location.pathname === '/') {
    $(document).ready(function () {
        widget_a();
        widget_b();
        widget_c();
        widget_d();
        widget_e();
        $('.testing-class').addClass('background-change')
        
    })
}

