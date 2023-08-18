function validate() {
  let form = document.forms["formm"];
  let errorbos = document.querySelector(".error-message");

  const errorMessages = [];

  if (form["navn"].value == "") {
    errorMessages.push("Name is required");
  }

  if (form["E-mail"].value == "") {
    errorMessages.push("Email is required");
  }

  if (form["textarea"].value == "") {
    errorMessages.push("Tekst is required");
  } else if (form["textarea"].value.length > 250) {
    errorMessages.push("Max limit is 250");
  }

  console.log(errorMessages);
  console.log(errorMessages.length);
  if (errorMessages.length != 0) {
    errorbos.classList.add("show");
    errorbos.innerText = errorMessages.toString();

    return false;
  }
  return true;
}

function burgermenu() {
  document.querySelector("nav").classList.toggle("active");
}

const slideData = [
  {
    surrce: "./assets/forsiden2.jpg",
    alt: "billede 1",
    dic: "At lege er at leve",
  },

  {
    surrce: "./assets/toys.webp",
    alt: "Produkt 2",
    dic: "At lege er at leve",
  },

  {
    surrce: "./assets/alcohlod.webp",
    alt: "Produkt 3",
    dic: "At hygge er at leve",
  },

  {
    surrce: "./assets/Isbjoern drink.jpg",
    alt: "Produkt 4",
    dic: "At hygge er at leve",
  },
];

const slidecontainer = document.querySelector(".slides");

slideData.forEach((slide) => {
  slidecontainer.innerHTML += `
    <div class="single-slide">
          <div class="slide-content">
           ${slide.dic}
          </div>
          <img src="${slide.surrce}" alt="${slide.dic}" />
        </div>
`;
});

const slides = document.querySelectorAll(".single-slide"); // alle bilderne
const btnnext = document.querySelector("[data-direction=next]");
const btnprevious = document.querySelector("[data-direction=previous]");
const display = document.querySelector(".display");

let slideslegth = slides.length - 1;
let currntimgeindex = 0;

const setactiveslide = (index) => {
  slides.forEach((element) => {
    element.classList.remove("active");
  });

  slides[index].classList.add("active");
  display.textContent = `${index + 1} ud af ${slideslegth + 1}`;
};

const next = () => {
  if (currntimgeindex >= slideslegth) {
    currntimgeindex = 0;
  } else {
    currntimgeindex += 1;
  }
  setactiveslide(currntimgeindex);
};

btnnext.addEventListener("click", next);

const previous = () => {
  if (currntimgeindex === 0) {
    currntimgeindex = slideslegth;
  } else {
    currntimgeindex -= 1;
  }
  setactiveslide(currntimgeindex);
};

btnprevious.addEventListener("click", previous);

setactiveslide(currntimgeindex);

const toys = [
  {
    surrce: "./assets/product1.jpg",
    alt: "billede 5",
    ptag: "Tiny Republic Play",
    h4tag: "Tandlægesæt i træ",
    h3tag: "849 kr",
  },

  {
    surrce: "./assets/product2.jpg",
    alt: "billede 6",
    ptag: "Kids Concept",
    h4tag: "Edvin gåvogn",
    h3tag: "499 kr",
  },

  {
    surrce: "./assets/product3.jpg",
    alt: "billede 7",
    ptag: "Vilac",
    h4tag: "Fire på stribe spil",
    h3tag: "69,30 kr",
  },

  {
    surrce: "./assets/product4.jpg",
    alt: "billede 8",
    ptag: "Tiny Republic Play",
    h4tag: "isbod i træ",
    h3tag: "259 kr",
  },
];

const adult = document.querySelector(".our-toys-boxadult");

toys.forEach((element) => {
  adult.innerHTML += `
  <div>
  <img src="${element.surrce}" alt="${element.alt}" />
  <div class="under-box">
    <p>${element.ptag}</p>
    <h4>${element.h4tag}</h4>
    <h3>${element.h3tag}</h3>
  </div>
</div>

  `;
});

const udtaler = [
  {
    ptag: "Pakken kom dagen efter jeg bestilte. Der blev jeg positivt overrasket, da der står på deres hjemmeside at leveringstiden er 2-4 hverdage. Og min lille Hugo elsker sin nye træhest. ",
    h4tag: "- Heidi, mor til Hugo på 3 år",
  },

  {
    ptag: "“Efter min gode ven Lars tippede mig Legekrogen.dk, har jeg ikke længere problemer med at købe de perfekte julegaver. Tak til Legekrogen. Og Lars” ",
    h4tag: "- Karsten Hansen, Morfar",
  },

  {
    ptag: "Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede Legekrogens kundeservice, var de meget hurtige til at sende mig den rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget lækkert ",
    h4tag: "- Omar, onkel til Anton på 11 år",
  },
];

const ost = document.querySelector(".Udtalelser-boxadult");

udtaler.forEach((element) => {
  ost.innerHTML += `
  <div class="Udtalelserbox">
  <p>${element.ptag}</p>
  <h4>${element.h4tag}</h4>
</div>
  `;
});
