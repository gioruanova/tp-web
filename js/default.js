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
