// get the data from json file
// data is retrieved from https://github.com/owid/covid-19-data 
// because from https://www.worldometers.info/coronavirus/country/indonesia/ didn't provide an option to download the data 
// data is then to include covid cases in Indonesian with format belementow
/* each index of an array represent the date and new cases on that date
[
    {
        "date": "2019-12-31",
        "new_cases": 0
    },
    {
        "date": "2020-01-01",
        "new_cases": 0
    },
]
*/

// required a package to read and write into file
const fs = require('fs');

let data = require('./indonesian.json') 

// getting the daily range with this formula
// Today daily range = (today new cases + yesterday new cases) / 2 

for (let i = 0; i < data.length; i++) {
    if( i === 0) {
        data[i].daily_range = 0
    }

    if (i > 0 && i <= data.length - 1) {
        data[i].daily_range =( data[i].new_cases + data[i - 1].new_cases) / 2 // 1 hari
    }
}

// determining the score for each daily range
data.forEach(element => {
    if(element.daily_range >= 0 && element.daily_range <= 1000) {
        element.score = 1
    }

    if(element.daily_range > 1000 && element.daily_range <= 2000) {
        element.score = 2
    }

    if(element.daily_range > 2000 && element.daily_range <= 3000) {
        element.score = 3
    }

    if(element.daily_range > 3000 && element.daily_range <= 4000) {
        element.score = 4
    }

    if(element.daily_range > 4000 && element.daily_range <= 5000) {
        element.score = 5
    }
})

// saving the data to new JSON file
fs.writeFileSync('output.json', JSON.stringify(data), 'utf-8')
// console.log(data);