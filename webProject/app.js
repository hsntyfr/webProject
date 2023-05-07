const url = 'http://ergast.com/api/f1/'
const urlBack = '.json?callback=myParser'


const setQuery = (event) => {
    if(event.keyCode == '13')
    {
        getResult(searchBar.value)
    }

}
const getResult = (year) => {
    let query = `${url}${year}${urlBack}`
    console.log(query);
    fetch(query)
        .then(result => {
        return result;
    })
        .then(displayResult)
}

const displayResult = (result) => {
    let city = result;
    console.log(city);
};



const searchBar = document.getElementById('serachBar')
searchBar.addEventListener('keypress', setQuery)

