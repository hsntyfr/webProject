const url = 'http://ergast.com/api/f1/'
const  back = "/results.json"


const setQuery = (event) => {
    if(event.keyCode == '13')
    {
        getResult(searchBar.value)
    }
}
async function getResult(year)
{
    let api = `${url}${year}${back}`
    const result = await fetch(api);
    const data = await result.json();
    let info = data
    console.log(info);
    document.getElementById("name-1.1").innerHTML = info.MRData.RaceTable.Races[0].Results[0].Driver.familyName;
    document.getElementById("car-1.1").innerHTML = info.MRData.RaceTable.Races[0].Results[0].Constructor.name;
    document.getElementById("time-1.1").innerHTML = info.MRData.RaceTable.Races[0].Results[0].Time.time;
    document.getElementById("name-1.2").innerHTML = info.MRData.RaceTable.Races[0].Results[1].Driver.familyName;
    document.getElementById("car-1.2").innerHTML = info.MRData.RaceTable.Races[0].Results[1].Constructor.name;
    document.getElementById("time-1.2").innerHTML = info.MRData.RaceTable.Races[0].Results[1].Time.time;
    document.getElementById("name-1.3").innerHTML = info.MRData.RaceTable.Races[0].Results[2].Driver.familyName;
    document.getElementById("car-1.3").innerHTML = info.MRData.RaceTable.Races[0].Results[2].Constructor.name;
    document.getElementById("time-1.3").innerHTML = info.MRData.RaceTable.Races[0].Results[2].Time.time;
    document.getElementById("name-1.4").innerHTML = info.MRData.RaceTable.Races[0].Results[3].Driver.familyName;
    document.getElementById("car-1.4").innerHTML = info.MRData.RaceTable.Races[0].Results[3].Constructor.name;
    document.getElementById("time-1.4").innerHTML = "---";
    document.getElementById("name-1.5").innerHTML = info.MRData.RaceTable.Races[0].Results[4].Driver.familyName;
    document.getElementById("car-1.5").innerHTML = info.MRData.RaceTable.Races[0].Results[4].Constructor.name;
    document.getElementById("time-1.5").innerHTML = "---";
    document.getElementById("name-2.1").innerHTML = info.MRData.RaceTable.Races[1].Results[0].Driver.familyName;
    document.getElementById("car-2.1").innerHTML = info.MRData.RaceTable.Races[1].Results[0].Constructor.name;
    document.getElementById("time-2.1").innerHTML = info.MRData.RaceTable.Races[1].Results[0].Time.time;
    document.getElementById("name-2.2").innerHTML = info.MRData.RaceTable.Races[1].Results[1].Driver.familyName;
    document.getElementById("car-2.2").innerHTML = info.MRData.RaceTable.Races[1].Results[1].Constructor.name;
    document.getElementById("time-2.2").innerHTML = info.MRData.RaceTable.Races[1].Results[1].Time.time;
    document.getElementById("name-2.3").innerHTML = info.MRData.RaceTable.Races[1].Results[2].Driver.familyName;
    document.getElementById("car-2.3").innerHTML = info.MRData.RaceTable.Races[1].Results[2].Constructor.name;
    document.getElementById("time-2.3").innerHTML = info.MRData.RaceTable.Races[1].Results[2].Time.time;
    document.getElementById("name-2.4").innerHTML = info.MRData.RaceTable.Races[1].Results[3].Driver.familyName;
    document.getElementById("car-2.4").innerHTML = info.MRData.RaceTable.Races[1].Results[3].Constructor.name;
    document.getElementById("time-2.4").innerHTML = "---";
    document.getElementById("name-2.5").innerHTML = info.MRData.RaceTable.Races[1].Results[4].Driver.familyName;
    document.getElementById("car-2.5").innerHTML = info.MRData.RaceTable.Races[1].Results[4].Constructor.name;
    document.getElementById("time-2.5").innerHTML = "---";


}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)