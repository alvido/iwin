// Slider
$(document).ready(function () {
  $('#slider__list').slick({
    // appendArrows: $('#predmets__arrows'),
    prevArrow: `<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
      <path d="M4 8.25H16.17L10.58 4.0575L12 3L20 9L12 15L10.59 13.9425L16.17 9.75H4V8.25Z" fill="#FF803D"/>
      </svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
      <path d="M4 8.25H16.17L10.58 4.0575L12 3L20 9L12 15L10.59 13.9425L16.17 9.75H4V8.25Z" fill="#FF803D"/>
      </svg></button>`,
    // appendDots: $('#predmets__dots'),

    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,

    infinite: true,

    responsive: [
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          variableWidth: false,
          centerMode: false,

        }
      },
    ]
  });
});
// slider

// phone country
$(document).ready(function () {
  var input = document.querySelector("#card_phone");
  window.intlTelInput(input, {
    initialCountry: "auto",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    //utilsScript: "/intl-tel-input/js/utils.js?1695806485509",
    geoIpLookup: callback => {
      fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(data => callback(data.country_code))
        .catch(() => callback("us"));
    },

    // geoIpLookup: function (callback) {
    //   fetch('https://ipinfo.io/json?token=YOUR_TOKEN')
    //     .then(function (response) {
    //       if (!response.ok) throw new Error('Failed to fetch');
    //       return response.json();
    //     })
    //     .then(function (ipdata) {
    //       callback(ipdata.country);
    //     })
    //     .catch(function () {
    //       callback(''); // Если не удалось получить данные о местоположении, то можно передать пустое значение
    //     });
    // },
    initialCountryGuess: function (callback) {
      fetch('https://ipinfo.io/json?token=YOUR_TOKEN')
        .then(function (response) {
          if (!response.ok) throw new Error('Failed to fetch');
          return response.json();
        })
        .then(function (ipdata) {
          callback(ipdata.country);
        })
        .catch(function () {
          callback(''); // Если не удалось получить данные о местоположении, то можно передать пустое значение
        });
    }
  });
});


// input.addEventListener("countrychange", function () {
//   var iti = window.intlTelInputGlobals.getInstance(input);
//   var selectedCountryData = iti.getSelectedCountryData();
//   input.value = "+" + selectedCountryData.dialCode;
// });
//

// card number
$(document).ready(function () {

  const cardNumberInput = document.getElementById("card_number");
  const cardNumberError = document.getElementById("card_number_error");

  cardNumberInput.addEventListener("input", function () {
    const cardNumberValue = cardNumberInput.value;

    // Простая проверка на допустимую длину номера карты (16 символов)
    if (cardNumberValue.replace(/\s/g, '').length !== 16) {
      cardNumberError.style.display = "block";
    } else {
      cardNumberError.style.display = "none";
    }
  });
});
//


// 
function copyValue(amount) {
  event.preventDefault();
  document.getElementById('form__give').value = amount;
}
//


//
$(document).ready(function () {
  $('.language-select').select2({
    templateResult: formatState,
    templateSelection: formatState
  });
});

function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $(
    '<span><img class="flag" src="' + state.element.dataset.image + '"/>' + state.text + '</span>'
  );
  return $state;
}