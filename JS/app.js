/* 
    Do not show API keys on your JS file
*/
const API_KEY = `d505be09b7be5dd40aec16ab27ced536`

const loadTempareture = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayTempareture(data))
        .catch(error => console.log(error))
}

const displayTempareture = data => {
    // const tempareture = document.getElementById('tempareture')
    // tempareture.innerText = data.main.temp
    setInnerTextById('tempareture', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    setInnerTextById('city_name', data.name)
    console.log(data)
}

const setInnerTextById = (id, text) => {
    const tempareture = document.getElementById(id)
    tempareture.innerText = text
}

/* Search field */
document.getElementById('search_btn').addEventListener('click', function () {
    const searchField = document.getElementById('search_field')
    const city = searchField.value
    // document.getElementById('city_name').innerText = city
    loadTempareture(city)

})

loadTempareture('dhaka')