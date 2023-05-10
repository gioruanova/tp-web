
import carListing from "./carProducts.js"
import $ from "jquery";

export default function () {
    const carListingElement = $('#car-detail');
    let carNameDetail = sessionStorage.getItem('carName')

    $('#title-to-fill').text(carNameDetail)
    const filteredCarListing = carListing.filter(function (car) {

        let carSelected = sessionStorage.getItem('carId')
        const carCodeFilter = parseInt(carSelected);
        return car.carCode === carCodeFilter;
    });


    $.each(filteredCarListing, function (index, car) {

        const card = $('<div>').addClass('car-description');

        const image = $(`<img class="img-card" alt="${car.carBrand} ${car.carModel}">`).attr('src', `/images/${car.carImage}`);

        const cardContent = $('<div>').addClass('card-content');
        const cardContentBottom = $('<div>').addClass('card-content-bottom');

        const heading = $('<h3>').text(car.carBrand + ' ' + car.carModel);
        const year = $('<p>').text('Año: ' + car.carYear);
        const comment = $('<p>').text(car.carComment);

        const button = $(`<a href="Contact.html" class="button">`).text('Enviar Consulta');
        button.on('click', function () {
            handleMoreButtonClick(car.carCode);
        });


        cardContent.append(image, heading, comment, year)
        cardContentBottom.append(cardContent, button);
        card.append(image, cardContentBottom);
        carListingElement.append(card);
    });



};
