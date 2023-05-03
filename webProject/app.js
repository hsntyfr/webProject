const url = 'http://ergast.com/api/f1/'


const setQuery = (event) => {
    if(event.keyCode == '13')
    {
        getResult(searchBar.value)
    }

}
const getResult = (year) => {
    let query = `${url}${year}`
    console.log(query);
    fetch(query)
        .then(result => {
        return result.json;
    })
        .then(displayResult)
}

const displayResult = (result) => {
    let city = `${result.MRData.DriverTable.Drivers.driverId}`
    console.log(city);
}



const searchBar = document.getElementById('serachBar')
searchBar.addEventListener('keypress', setQuery)