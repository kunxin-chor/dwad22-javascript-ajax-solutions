async function main() {
    let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json";
    let response = await axios.get(url);
    console.log(response.data);
    let record = response.data;
    let resultDiv = document.querySelector("#results");

    // get all the keys of an object using `Object.keys(obj)`
    // if `obj` is the object that we want to get all the keys
    // console.log(Object.keys(record));

    // // get all the keys from the record object
    // let keys = Object.keys(record);

    // // use a for loop to automate rendering out each key/value pair
    // for (let k of keys) {
    //     resultDiv.innerHTML += `<li>${k} : ${record[k]}</li>`
    // }
    
    resultDiv.innerHTML =` 
        <li>Name: ${record.Name}</li>
        <li>Mobile: ${record.Mobile}</li>
        <li>Boolean: ${record.Boolean}</li>
        <li>Pets: ${record.Pets} </li>
        <li>Address:
            <ul>
                <li>Permanent Address: ${record.Address["Permanent address"] }</li>
                <li>Current Address: ${record.Address["current Address"]}</li>
            </ul>
        </li> 
    `
}
main();