const grid = document.querySelector(".photo-grid")
let slide1 = document.querySelector(".slide1")
 let card1 = document.querySelector(".card1")
let slide2 = document.querySelector(".slide2")
let slide3 = document.querySelector(".slide3")
let span = document.querySelector(".close")
let modal = document.querySelector("#myModal")
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let captionText2 = document.getElementById("caption2")
  const photos = [];
 const photoLinks = []

//  function updatePhotoGrid(photoLinks) {     
//      photoLinks.forEach(photo => {
//    cards.map(card => { 
//         let y = document.createElement("img");
//         y.setAttribute("src", photo)
//         card.appendChild(y)

// })
//  }) }

const getData = () => {

fetch("https://api.unsplash.com/search/photos?client_id=LTNB5WMcNPir06RnJxoWG8GIAVN-TQhb6tfwzRNybjk&query=african&per_page=8")
.then(res => res.json())
.then(data => {
    console.log(data.results)

    data.results.forEach((item,index) => {
        let x = document.createElement("li")
        let y = document.createElement("h2")
        let z = document.createElement("p")
        x.classList.add("card1")
      x.innerHTML = `<img src=${item.urls.thumb} />`
      y.innerHTML = `${item.user.first_name} ${item.user.last_name}`
    z.innerHTML = `${item.user.location}`
    x.append(y)
    x.append(z)
 
        if (index % 3 === 1) {
            slide1.append(x)
        }
        else if(index % 2 === 0) {
            slide2.append(x)
        }
        else if (index === 0 || index % 2 === 1 ) {
            slide3.append(x)
    }

// 
    x.addEventListener("click", ()=> {
        modal.style.display = "block"; 
        modalImg.src = item.urls.thumb
        captionText.innerHTML = `${item.user.first_name} ${item.user.last_name}`
        captionText2.innerHTML = item.user.location
    })  

     span.onclick = function() {
       modal.style.display = "none";
      }
     
})
    // photos.push(...data)
    // updatePhotoGrid(photos)
} )}

// getData("fun")

//  const getData = () => {

// fetch("https://api.unsplash.com/search/photos?client_id=LTNB5WMcNPir06RnJxoWG8GIAVN-TQhb6tfwzRNybjk&query=african&per_page=8")
//  .then(res => res.json())
//  .then(data => {
//     //  console.log(data.results)
//       photos.push(...data.results) 
//       console.log(photos)
//     const hey =  photos.filter(photo => {
//         photo;
        
//     //   photoLinks.push(photo.urls.regular) 
//     //   console.log(photoLinks)  
// }) 
// console.log(hey)
    //   updatePhotoGrid(photoLinks)
    //   } ) } 


    //   getData()
  window.onload = () => getData()


// getData("african")

// fetch("https://api.unsplash.com/search/photos?client_id=LTNB5WMcNPir06RnJxoWG8GIAVN-TQhb6tfwzRNybjk&query=african&per_page=8")
//  .then(res => res.json())
//  .then(data => {
//     //  console.log(data.results)
//       photos.push(...data.results) 
//       console.log(photos)
//     // const hey =  photos.filter(photo => {
//     //     photo[0];
        
//     //   photoLinks.push(photo.urls.regular) 
//     //   console.log(photoLinks)  
// }) 
// console.log(hey)
//     //   updatePhotoGrid(photoLinks)
//       } )