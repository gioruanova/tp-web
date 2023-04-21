import $ from "jquery";


console.log("default Widget");

// Theme Selector
$(document).ready(function () {
    let currentTheme = localStorage.getItem('themeSelected')

    if (currentTheme == null) {
        localStorage.setItem('themeSelected', 'darkMode');
        $('body').removeClass('lightMode')
        $('#theme-selector').removeClass('update')

    } else if (currentTheme == 'darkMode') {
        $('body').removeClass('lightMode')
        $('#theme-selector').removeClass('update')
    } else {
        $('body').addClass('lightMode')
        $('#theme-selector').addClass('update')
    }

    $('.selector-container').on('click', function () {
        if ($('body').hasClass('')) {
            $('body').addClass('lightMode')
            $('#theme-selector').addClass('update')
            localStorage.setItem('themeSelected', 'lightMode');
        } else {
            $('body').removeClass('lightMode')
            $('#theme-selector').removeClass('update')
            localStorage.setItem('themeSelected', 'darkMode');
        }
    })
});


// Burger Button
$(document).ready(function () {

    $('#burger-button').on('click', function () {
        $(this).toggleClass('menu-open')
        let buttonBurger = $('#burger-button')
        $('.items').toggleClass('showItems')
        $('.container-nav').toggleClass('full-width')
    })

})

// Scroll Class

window.addEventListener("scroll", function () {
    let windowPosition = (window.pageYOffset * 100) / (document.body.scrollHeight - window.innerHeight)
    if (windowPosition > 5) {
        // document.body.classList.add('scrollClass');
        $('body').attr('id','scrollClass')
    } else {
        document.body.classList.remove('scrollClass');
        $('body').removeAttr('id')
    }
});


