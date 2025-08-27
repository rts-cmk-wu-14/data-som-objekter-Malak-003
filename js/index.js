// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

// Hero--------------
const heroSection = document.querySelector(".hero")
function renderHero(data) {
  heroSection.innerHTML = `
    <div class="hero-content">
      <img class="hero-img" src="${data.image}" alt="Hero image">
      <div class="hero-text">
        <h1>${data.headline}</h1>
        <p class="heroP">${data.copy}</p>
        <button>  <img class="icon" src="${data.icon}"> Explore  </button>
      </div>
    </div>
  `
}
renderHero(hero)

// const  servicesSection = document.querySelector(".services")
// function renderHero(data){
// servicesSection.innerHTML = `
//       <div class="hero-content">

// `
// }
















