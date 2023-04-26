// variables
const API_KEY = '93b48d84c3a1a5f16fc9a1e0a72c9875'

const forecastURL = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

let searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', citySearch)

function citySearch() {
  const userSearch = document.getElementById('searchbar')
  const cityName = document.getElementById('city-name')
  cityName.innerHTML = userSearch.value
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