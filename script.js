const form =  document.getElementById("search-form");
const input = document.getElementById("search-input")

form.addEventListener("submit", (e)=>{
    e.preventDefault(); // prevents the default page reload
    const query = input.value;  // stores the value in query variable
    // console.log(query) // logs the input after submit button is clicked
})

async function search(query){
    const url = 
        "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
        "&gsrsearch=" + encodeURIComponent(query) +
        "&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*";
        // still no idea where we get this api from and what's that encodedURIComponent is .

    const response = await fetch(url);
    try{if(!response.ok) throw new Error(response.status);
    const data = await response.json();
    console.log(data)

    }
    catch{
console.log("error")
    }
}

