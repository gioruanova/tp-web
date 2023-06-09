
import carListing from "./carProducts.js"
import $ from "jquery";

export default function () {
    const carListingElement = $('#car-listing');

    // Iterate over each car listing
    $.each(carListing, function (index, car) {

        const card = $(`<div id="${index}">`).addClass('mainCard');
        const cardContent = $('<div>').addClass('card-content');
        const image = $(`<img class="img-card" alt="${car.carBrand} ${car.carModel}">`).attr('src', `/images/${car.carImage}`);
        const heading = $('<h3>').text(car.carBrand + ' ' + car.carModel);
        const year = $('<p>').text('Año: ' + car.carYear);
        const comment = $('<p>').text(car.carComment);

        cardContent.append(heading, year, comment);
        card.append(image, cardContent);

        const button = $(`<a class="button" href="/pages/CardTemplate.html" id=${car.carCode}>`).text('Mas detalle');

        card.append(button);
        carListingElement.append(card);

        function handleMoreButtonClick(carCode) {
            sessionStorage.setItem('carId', carCode)
            
        }
        function handleMoreButtonClickName(carBrand, carModel) {
            sessionStorage.setItem('carName', carBrand + " " + carModel)
        }

        button.on('click', function () {
            handleMoreButtonClick(car.carCode);
            handleMoreButtonClickName(car.carBrand, car.carModel)
        });


    });

    $(`#car-listing .mainCard`).each(function (n) {
        $(this).attr({
            "data-aos": 'fade-up',
            "data-aos-easing": "ease-in-out",
            "data-aos-duration": "500",
            "data-aos-delay": (n + 1) * 300,
            "data-aos-once": "true",
        })
    })
};
