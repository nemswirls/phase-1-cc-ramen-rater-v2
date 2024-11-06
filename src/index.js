
// index.js
const ramenURL= "http://localhost:3500/ramens";
const ramenMenuDiv = document.getElementById('ramen-menu');
const detailImage= document.getElementById('detail-image');
const detailName= document.getElementById('detail-name');
const detailRestaurant= document.getElementById('detail-restaurant');
const detailRating=document.getElementById('rating-display');
const detailComment=document.getElementById('comment-display');
const newRamenForm=document.getElementById('new-ramen');


fetch(ramenURL)
.then(res => res.json())
.then(displayRamens);

function displayRamens(ramens){
  ramens. forEach(displayRamen);
}
function displayRamen(ramen){
const ramenImage= document.createElement('img');
ramenImage.src= ramen.image;
ramenMenuDiv.append(ramenImage);
ramenImage.addEventListener('click', () => handleClick(ramen))
}
function handleClick(ramen){
 detailImage.src= ramen.image
 detailName.textContent= ramen.name
 detailRestaurant.textContent= ramen.restaurant
 detailRating.textContent= ramen.rating
 detailComment.textContent=ramen.comment
}


function addSubmitListener(e){
  e.preventDefault();
  newRamenForm.addEventListener('submit', () => addSubmitListener(ramen))

  const addSumbit= {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target ['new-comment'].value,

  };
  displayRamen(addSumbit);
  e.target.reset();
}
