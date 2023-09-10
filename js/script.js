$(document).ready(function () {
  $(".buttons").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var filter = $(this).attr("data-filter");
    console.log(filter);
    if (filter == "all") {
      $(".image").show(400);
    } else {
      $(".image")
        .not("." + filter)
        .hide(200);
      $(".image")
        .filter("." + filter)
        .show(400);
    }
  });

  $(".gallery").magnificPopup({
    type: "image",
    delegate: "a",
    gallery: {
      enabled: true,
    },
  });

  $(".slides").slick({
    arrows: false,
    autoplay: true,
  });
});



// Form data save

// Replace 'YOUR_GOOGLE_SCRIPT_URL' with your Google Apps Script Web App URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTJ9-bvU4zrQCkbPuFunt_PbesnqDuDKZEzb4SNiwMnSwc1BEX9QxXSfowmPXthnbc/exec';

const form = document.forms['data-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Form submitted successfully:', response);
            alert("Form submitted successfully!!!")
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert("Something went wrong. Try again!!!")
        });
});


