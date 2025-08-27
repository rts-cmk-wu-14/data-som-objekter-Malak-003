// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))

// Hero--------------
const heroSection = document.querySelector(".hero")
function renderHero(data) {
  heroSection.innerHTML = `
    <div class="hero-content">
    <img class="hero-img" src="${data.image}" >
      <div class="hero-text">
        <h1>${data.headline}</h1>
        <p class="heroP">${data.copy}</p>
        <button>  <img class="icon" src="${data.icon}"> Explore  </button>
      </div>
    </div>
  `
}
renderHero(hero)


// Services--------------
const servicesSection = document.querySelector(".services")

function renderServices(data) {
  // laver HTML til hvert servicekort
  let serviceCards = data.map(service => {
    return `
      <div class="service-card">
      <img src="${service.illustration}" alt="">
      <h3>${service.headline}</h3>
      <p>${service.text}</p>
        <a href="#">${service.linktext}</a>
      </div>
    `
  }).join("")

  // sætter alt ind i section
  servicesSection.innerHTML = `
    <div class="services-wrapper">
    ${serviceCards}
    </div>
  `
}
renderServices(services)



















