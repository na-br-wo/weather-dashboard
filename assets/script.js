// variables
const API_KEY = '93b48d84c3a1a5f16fc9a1e0a72c9875'

const forecastURL = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

let citySearchHistory = document.getElementById('list-items')
let searchBtn = document.getElementById('searchBtn')
let cityList = []


searchBtn.addEventListener('click', citySearch)

function citySearch() {
  // array of city search list that will be added to localstorage

  const userSearch = document.getElementById('searchbar')

  // displaying cityname in the body of the webpage
  const cityName = document.getElementById('city-name')
  cityName.innerHTML = userSearch.value

  cityList.push(userSearch.value)

  // setting the cityList array to localStorage
  localStorage.setItem("cityList", JSON.stringify(cityList));

  displayCityList(cityList)
}

function displayCityList(cityList) {
  // initial clearing of HTML
  for (let i = 0; i < cityList.length; i++) {
    // creating a list-item <strong> element for each item in the cityList array
    let city = document.createElement('strong')

    // setting the text of the dynamic elements
    city.textContent = cityList[i]

    // appending to the HTML
    citySearchHistory.append(city)
  }
}

// script handling the opening/closing of the side bar
jQuery(function ($) {
  var $bodyEl = $('body'),
    $sidedrawerEl = $('#sidedrawer');


  function showSidedrawer() {
    // show overlay
    var options = {
      onclose: function () {
        $sidedrawerEl
          .removeClass('active')
          .appendTo(document.body);
      }
    };

    var $overlayEl = $(mui.overlay('on', options));

    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function () {
      $sidedrawerEl.addClass('active');
    }, 20);
  }


  function hideSidedrawer() {
    $bodyEl.toggleClass('hide-sidedrawer');
  }


  $('.js-show-sidedrawer').on('click', showSidedrawer);
  $('.js-hide-sidedrawer').on('click', hideSidedrawer);
});