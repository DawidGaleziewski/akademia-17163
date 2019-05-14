'use strict'

$(document).ready(function(){
    // api url
    const apiUrl = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php';

    // get the btn as jquery object
    const btn = $('#btn-fetch-data')

    // set creation of DOM objects and their values in a seperate function for clarity
    function modelData(object){
        // create a div
        const createdDiv = $('<div></div>');
        createdDiv.attr("id","dane-programisty")

        // create a paragraph for each key in the object
        for(let key in object){
            createdDiv.append($('<p></p>').text(key + ' programisty --- ' + object[key]).attr('class', 'par-info'))
        }

        // add the final div to the page after button
        btn.after(createdDiv);
    }

    // add event to the button
    btn.click(function(){
        $.getJSON(apiUrl, function(data){
            modelData(data)
        })    
    })
})



