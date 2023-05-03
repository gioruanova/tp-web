import $ from "jquery";


console.log("default Widget");

// Theme Selector
$(document).ready(function () {
    let currentTheme = localStorage.getItem('themeSelected')

    if (currentTheme == null) {
        localStorage.setItem('themeSelected', 'darkMode');
        $('body').removeClass('lightMode')
        $('#theme-selector').removeClass('update')
        $('#theme-selector2').removeClass('update')

    } else if (currentTheme == 'darkMode') {
        $('body').removeClass('lightMode')
        $('#theme-selector').removeClass('update')
        $('#theme-selector2').removeClass('update')
    } else {
        $('body').addClass('lightMode')
        $('#theme-selector').addClass('update')
        $('#theme-selector2').addClass('update')
    }

    $('.selector-container').on('click', function () {
        if ($('body').hasClass('')) {
            $('body').addClass('lightMode')
            $('#theme-selector').addClass('update')
            $('#theme-selector2').addClass('update')
            localStorage.setItem('themeSelected', 'lightMode');
        } else {
            $('body').removeClass('lightMode')
            $('#theme-selector').removeClass('update')
            $('#theme-selector2').removeClass('update')
            localStorage.setItem('themeSelected', 'darkMode');
            
        }
    })
});


// Burger Button
$(document).ready(function () {

    $('#burger-button').on('click', function () {
        $('.menu-mobile').toggleClass('menu-open')
        $('.burger-container').toggleClass('menu-open')
    })

    $('.activeClass').removeAttr('href')

})

// Scroll Class

window.addEventListener("scroll", function () {
    let windowPosition = (window.pageYOffset * 100) / (document.body.scrollHeight - window.innerHeight)
    if (windowPosition > 1) {
        // document.body.classList.add('scrollClass');
        $('body').attr('id', 'scrollClass')
    } else {
        document.body.classList.remove('scrollClass');
        $('body').removeAttr('id')
    }
});


