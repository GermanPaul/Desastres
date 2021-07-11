$('#find_btn').click(function () {
  //user clicks button
  if ('geolocation' in navigator) {
    //check geolocation available
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude)
      $('#result').html(
        'Su ubicación es: ' +
          position.coords.latitude +
          ' Lang:' +
          position.coords.longitude
      )
    })
  } else {
    alert("Browser doesn't support geolocation!")
  }
})

// var map;
// function initMap() {
//     map = new google.maps.Map($("#map")[0], {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 8
//       });
// }

$('#my_location').click(function () {
  //user click on button
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(show_location, show_error, {
      timeout: 1000,
      enableHighAccuracy: true,
    }) //position request
  } else {
    console.log("Browser doesn't support geolocation!")
  }
})

//Success Callback
function show_location(position) {
  infoWindow = new google.maps.InfoWindow({ map: map })
  var pos = { lat: position.coords.latitude, lng: position.coords.longitude }
  infoWindow.setPosition(pos)
  infoWindow.setContent('User Location found.')
  map.setCenter(pos)
}

//Error Callback
function show_error(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('Permission denied by user.')
      break
    case error.POSITION_UNAVAILABLE:
      alert('Location position unavailable.')
      break
    case error.TIMEOUT:
      alert('Request timeout.')
      break
    case error.UNKNOWN_ERROR:
      alert('Unknown error.')
      break
  }
}
