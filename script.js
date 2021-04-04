const grid = document.querySelector(".photo-grid")
const loading = document.querySelector(".loading")
const slide1 = document.querySelector(".slide1")
const slide2 = document.querySelector(".slide2")
const slide3 = document.querySelector(".slide3")
const span = document.querySelector(".close")
const modal = document.querySelector("#myModal")
const modalImg = document.getElementById("img01")
const captionText = document.getElementById("caption")
const captionText2 = document.getElementById("caption2")
const form = document.getElementById("form")
const input = document.querySelector(".input")

const getData = query => {
    loading.style.display = "block";
    grid.style.display = "none"
    fetch(`https://api.unsplash.com/search/photos?client_id=LTNB5WMcNPir06RnJxoWG8GIAVN-TQhb6tfwzRNybjk&query=${query}&per_page=8`)
        .then(res => res.json())
        .then(data => {
            // for searches with no result
            if(data.results.length === 0) {
                let emptySearch = document.createElement("h1")
                emptySearch.innerHTML = `Search Results for "${query}"`
                let emptyExp = document.createElement("h3")
                emptyExp.innerHTML = `Sorry, no items were found matching your search keyword`
                emptySearch.style.width = "800px"
                emptySearch.style.marginBottom = "100px"
                emptyExp.style.margin = "auto"
                slide1.append(emptySearch);
                slide1.append(emptyExp)
            }
            data.results.forEach((item, index) => {
                let imgCard = document.createElement("div")
                let overlay = document.createElement("div")
                overlay.classList.add("content")
                console.log(data.results)
                let imgName = document.createElement("h2")
                let imgLocation = document.createElement("p")
       
                imgCard.innerHTML = `<img src=${item.urls.thumb} class='gridImages'/>`
                imgName.innerHTML = `${item.user.first_name} ${item.user.last_name}`
                if (item.user.first_name === null) {
                    imgName.innerHTML = `${item.user.last_name}`
                }
                else if (item.user.last_name === null) {
                    imgName.innerHTML = `${item.user.first_name}`
                }
                imgLocation.innerHTML = `${item.user.location}`
                if (item.user.location === null) {
                    imgLocation.innerHTML = "";
                }

                overlay.append(imgName)
                overlay.append(imgLocation)
                imgCard.append(overlay)
                // distributing imgs evenly among the three columns
                if (index % 3 === 1) {
                    slide1.append(imgCard)
                }
                else if (index % 2 === 0) {
                    slide2.append(imgCard)
                }
                else if (index === 0 || index % 2 === 1) {
                    slide3.append(imgCard)
                }

                imgCard.addEventListener("click", () => {
                    modal.style.display = "block";
                    modalImg.src = item.urls.regular
                    captionText.innerHTML = `${item.user.first_name} ${item.user.last_name}`
                    captionText2.innerHTML = item.user.location
                })

                span.onclick = function () {
                    modal.style.display = "none";
                }
            })
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            loading.style.display = "none";
            grid.style.display = "grid";
        })
}
// enable user to search for a category
form.addEventListener("submit", e => {
    e.preventDefault();
    slide1.innerHTML = "";
    slide2.innerHTML = "";
    slide3.innerHTML = "";
    getData(input.value);
});

window.onload = () => getData("african")
