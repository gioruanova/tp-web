import './public/sass/main.scss'

import $ from "jquery";
// import './styles.css'

import widget_a from './public/js/widgets/widget_a.js'
import widget_b from './public/js/widgets/widget_b.js'
import widget_c from './public/js/widgets/widget_c.js'
import widget_d from './public/js/widgets/widget_d.js'
import widget_e from './public/js/widgets/widget_e.js'

import './public/js/default.js';


document.querySelector('#app').innerHTML = ``


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

