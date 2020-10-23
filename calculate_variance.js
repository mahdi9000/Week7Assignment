const fs = require('fs');

let data = require('./output.json') 

data.forEach(el => {
    el.variance_new_cases = +(el.new_cases - 1256.259259).toFixed(2) // using to fixed to make the data consistent in 2 decimal places
    el.variance_daily_range = +(el.daily_range - 1249.075758).toFixed(2)
    el.variance_score = +(el.score - 1.932659933).toFixed(2)
})

fs.writeFileSync('variance.json', JSON.stringify(data), 'utf-8')