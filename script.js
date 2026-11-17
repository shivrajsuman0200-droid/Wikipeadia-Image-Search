const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

// understanding concepts before applying 
// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // prevents the default page reload
//     const query = input.value;  // stores the value in query variable
//     // console.log(query) // logs the input after submit button is clicked
//     search(query);
// })

// async function search(query) {
//     const url =
//         "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
//         "&gsrsearch=" + encodeURIComponent(query) +
//         "&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*";
//     // still no idea where we get this api from and what's that encodedURIComponent is .

//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(response.status);
//         // console.log(response);
//         const data = await response.json();
//         console.log(data)

//     }
//     catch {
//         console.log("error")
//     }
// }

function render(items) {
    const results = document.getElementById("results");
    results.innerHTML = ""; //clearing old results

    items.forEach(item => {

        const card = document.createElement("article");
        card.className = "card";

        const img = document.createElement("img");
        img.src = item.imageinfo[0].thumburl; // The picture , we use thumburl instead of real one as it loads faster
        img.alt = item.title;

        const caption = document.createElement("p");
        caption.textContent = item.title.replace(/^File:/, "").replace(/\.(jpg|png)$/i, "");  // The title
        // console.log(item.title);
        console.log(item)

        const url = document.createElement("p");
        const a = document.createElement("a");
        a.href = item.imageinfo[0].url;
        a.textContent = "Open image";
        a.target = "_blank";
        url.appendChild(a);



        card.appendChild(img);
        card.appendChild(caption)
        card.appendChild(url)
        results.appendChild(card); //add cards to grid


    });

}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    const url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
        "&gsrsearch=" + encodeURIComponent(query) +
        "&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json();
        const items = Object.values(data.query.pages);
        render(items);
    }
    catch (error) {
        console.log("new error" + error);
    }
})
