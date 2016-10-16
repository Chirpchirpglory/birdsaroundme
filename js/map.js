
// try to fetch data from google public api –––––not working yet
// var googleGeolocateKey = 'AIzaSyDZ17A6N6WsVFk2mG4KrwnXFtTeTwMvSX8'

// function getPosition() {
//     return fetch('https//www.googleapis.com/geolocation/v1/geolocate?key=' + googleGeolocateKey)
//         .then(function (response) {
//                 return response.json()
//             }
//         )
// }

// try to fetch data from twitter public api ––––––not working yet
function getTwitterPlaces(){
    return fetch ('http://twitter.com/search?q=place%3A247f43d441defc03')
    .then(function (response){
        return response.json()
    }
    )

}



