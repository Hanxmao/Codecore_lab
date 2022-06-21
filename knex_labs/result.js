const data = require('./target.js')

const tableData = []
data.map((item, i) => {
    const lastEntry = tableData[tableData.length - 1];
    if (
        lastEntry &&
        lastEntry.code === item.countryCode &&
        lastEntry.name === item.countryName
    ) {
        
    } else {
        tableData.push({
            name: item.countryName,
            code: item.countryCode,
        });
    }
}, []);

module.exports=tableData


console.log(tableData)