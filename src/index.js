
// index.js
const ramenURL= "http://localhost:3500/ramens";
const ramenMenuDiv = document.getElementById('ramen-menu');
const newRamenForm= document.getElementById('new-ramen');

function getAllRamens(){
return fetch(ramenURL).then(response => {
  return response.json()
})
}
const displayRamens = () => {
  getAllRamens().then(ramenArr => {
    ramenArr.forEach(renderRamen)
    handleClick(ramenArr[0])
  })
}

function renderRamen(ramen){
const ramenImage= document.createElement('img');
ramenImage.src= ramen.image;
ramenMenuDiv.append(ramenImage);
ramenImage.addEventListener('click', () => handleClick(ramen))

}
function handleClick(ramen){
 el('detail-image').src= ramen.image
 el('detail-name').textContent= ramen.name
el('detail-restaurant').textContent= ramen.restaurant
 el('rating-display').textContent= ramen.rating
el('comment-display').textContent=ramen.comment
}

const handleSubmit = (e) => {
e.preventDefault()
const newRamen ={
name: e.target.name.value,
restaurant: e.target.restaurant.value,
image: e.target.image.value,
rating: e.target.rating.value,
comment: e.target["new-comment"]. value
}
renderRamen(newRamen)
e.target.reset()
}
const addSubmitListener = () => {
document.querySelector('#new-ramen').addEventListener('submit', handleSubmit)

};


function el(id){
  return document.getElementById(id);
}

const main = () => {
displayRamens()
addSubmitListener()

};

main();