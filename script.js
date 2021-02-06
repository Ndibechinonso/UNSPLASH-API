const grid = document.querySelector(".photo-grid")
const slide1 = document.querySelector(".slide1")
const card1 = document.querySelector(".card1")
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
    fetch(`https://api.unsplash.com/search/photos?client_id=LTNB5WMcNPir06RnJxoWG8GIAVN-TQhb6tfwzRNybjk&query=${query}&per_page=8`)
        .then(res => res.json())
        .then(data => {
            data.results.forEach((item, index) => {
                let imgCard = document.createElement("div")
                let overlay = document.createElement("div")
                overlay.classList.add("content")
                console.log(data.results)
                let imgName = document.createElement("h2")
                let imgLocation = document.createElement("p")
                imgCard.classList.add("card");
                if (item.user.first_name === null || item.user.last_name === null || item.user.location === null) {
                    `${item.user.first_name} === ""`;
                    `${item.user.last_name} === ""`;
                    `${item.user.location} === ""`;
                }

                imgCard.innerHTML = `<img src=${item.urls.thumb} />`
                imgName.innerHTML = `${item.user.first_name} ${item.user.last_name}`
                if (item.user.first_name === null) {
                    imgName.innerHTML = `${item.user.last_name}` 
                }
                else if (item.user.last_name === null){
                    imgName.innerHTML = `${item.user.first_name}`  
                }
                imgLocation.innerHTML = `${item.user.location}`
                if (item.user.location === null) {
                    imgLocation.innerHTML = "";
                }
               
                overlay.append(imgName)
                overlay.append(imgLocation)
                imgCard.append(overlay)

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

        })
}

form.addEventListener("submit", e => {
    e.preventDefault();
    slide1.innerHTML = "";
    slide2.innerHTML = "";
    slide3.innerHTML = "";
    getData(input.value);
    input.value = "";

});

window.onload = () => getData("african")
