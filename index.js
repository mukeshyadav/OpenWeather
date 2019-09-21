let key = 'b18c6d3e77a2502950a28c793a23a5b0'
let url = '//api.openweathermap.org/data/2.5/weather?q='
let httpRequest = new XMLHttpRequest()

// Http Wrapper
function API (method, url, success) {
  httpRequest.open(method, url)
  httpRequest.onload = () => {
    success(httpRequest.responseText)
  }
  httpRequest.send()
}

// When DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  API('GET', `${url}london&APPID=${key}`, (res) => {
    console.log(res)
  })
})

// Success

function successHandler (weatherData) {
}

// Fail
