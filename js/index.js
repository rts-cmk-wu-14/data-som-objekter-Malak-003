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
// Kald funk
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


// Facilities --------------
const facilitiesSection = document.querySelector(".facilities")

function renderFacilities(data) {
  let facilityCards = data.options.map(facility => {
    return     `
      <div class="facility-card">
        <img src="${facility.icon}" alt="">
        <h3>${facility.headline}</h3>
        <p>${facility.text}</p>
        <a href="#">Show me more</a>
      </div>
    `
  }).join("")

  facilitiesSection.innerHTML = `
    <h2>${data.headline}</h2>
    <div class="facilities-wrapper">
      ${facilityCards}
    </div>
  `
}

renderFacilities(facilities)


// Sites --------------

const sitesSection = document.querySelector(".sites")

function renderSites(data) {
  let sitesCards = data.places.map(site => {
    return `
      <div class="sites-card">
        <img src="${site.img}" alt="${site.name}">
        <h3>${site.name}</h3>
        <p>${site.city}</p>
        <a href="#">View the Site</a>
      </div>
    `
  }).join("")

  sitesSection.innerHTML = `
  <div class="sitesHead">
    <h2>${data.headline}</h2>
    <p>${data.text}</p>
      <button > <img class="icon" src="${data.btnicon}"> Start  </button>
      </div>


    <div class="sites-wrapper">
      ${sitesCards}
    </div>
  `
}

renderSites(sites)


// Advantages --------------
const advantagesSection = document.querySelector(".advantages")

function renderadvantages(data) {
  let advantageCards = data.map(advantage => {
    return `
      <div class="advantage-card">
      <img src="${advantage.icon}" alt="">
      <h3>${advantage.headline}</h3>
      <p>${advantage.text}</p>
      </div>
    `
  }).join("")

  advantagesSection.innerHTML = `
      <h2>Our Advantages </h2>
    <div class="advantages-wrapper">
    ${advantageCards}
    </div>
  `
}
renderadvantages(advantages)


// Footer --------------

const footerSection = document.querySelector(".footer")

function renderFooter(data) {
  let footerCards = data.links.map(footer => {
    let items = footer.items.map(item => `<li>${item}</li>`).join("")
    return `
      <div class="footer-card">
        <h3>${footer.headline}</h3>
        <ul>${items}</ul>
      </div>
    `
  }).join("")

  footerSection.innerHTML = `
    <div class="footer-top">
    <div class="footer-head">
      <h2>${data.brand.name}</h2>
      <p>${data.brand.slogan}</p>
    </div>

    <div class="footer-cards">
      ${footerCards}
    </div>
      </div>
    <div class="border"></div>
    <div class="footer-bottom">
      <p>${data.bottom.copyright}</p>
      <ul>
        ${data.bottom.links.map(link => `<li>${link}</li>`).join("")}
      </ul>
    </div>
  `
}

renderFooter(footer)













