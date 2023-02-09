
// CANNOT DO THIS!
// await axios.get <-- await can only be used in a function marked with async

// we cannot define an annoymous function for this
// because an annoymous function must be assigned to a variable
// or as a parameter to a function call

// Valid use of annoymous functions are like:
/*
  document.querySelector("#btn").addEventListener("click", async function(){

  })

  OR

  let f = async function() {

  }

*/

async function main(){
    let response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt")
 
    // the response object contains a lot of information
    // we only care about response.data that holds the content of the file or 
    // the results of the API endpoint
    let divElement = document.querySelector("#content");
    divElement.innerHTML = response.data;

}

// remember to call our function
main();