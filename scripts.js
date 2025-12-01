// Menu hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fermer le menu au clic sur un lien
document.querySelectorAll(".nav-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

function goToSlide(index) {
  showSlide(index);
}

// Auto-play slider
setInterval(() => {
  changeSlide(1);
}, 5000);

//  gestion des modales pour produit

const products = {
  orange: {
    image:
      "images/s6.png",
    title: "Jus d'Orange",
    price: "2 500 FCFA",
    description:
      "Fraîchement pressé chaque matin, notre jus d'orange est riche en vitamine C et offre une saveur douce et rafraîchissante. Parfait pour bien commencer la journée!",
    details: [
      "<strong>Volume:</strong> 500 ml",
      "<strong>Ingrédients:</strong> 100% oranges fraîches de Côte d'Ivoire",
      "<strong>Conservation:</strong> À consommer dans les 48h",
      "<strong>Bienfaits:</strong> Riche en vitamine C, antioxydants",
      "<strong>Sans conservateurs:</strong> Produit 100% naturel",
    ],
  },
  ananas: {
    image:
      "images/s7.png",
    title: "Jus d'Ananas",
    price: "2 800 FCFA",
    description:
      "Un jus d'ananas tropical et savoureux, parfait pour vous rafraîchir. Préparé avec des ananas mûrs à point pour une douceur naturelle incomparable.",
    details: [
      "<strong>Volume:</strong> 500 ml",
      "<strong>Ingrédients:</strong> Ananas frais, sucre naturel",
      "<strong>Conservation:</strong> À consommer dans les 48h",
      "<strong>Bienfaits:</strong> Facilite la digestion, anti-inflammatoire",
      "<strong>Sans additifs:</strong> Goût authentique",
    ],
  },
  mangue: {
    image:
      "images/s8.png" ,
    title: "Jus de Mangue",
    price: "3 000 FCFA",
    description:
      "La saveur sucrée et onctueuse de nos mangues locales dans un jus onctueux et délicieux. Un vrai goût du paradis tropical!",
    details: [
      "<strong>Volume:</strong> 500 ml",
      "<strong>Ingrédients:</strong> Mangues Kent premium",
      "<strong>Conservation:</strong> À consommer dans les 48h",
      "<strong>Bienfaits:</strong> Riche en vitamines A et C",
      "<strong>Texture:</strong> Onctueux et gourmand",
    ],
  },
  cocktail: {
    image:
       "images/s1.png",
    title: "Cocktail Tropical",
    price: "3 500 FCFA",
    description:
      "Un mélange exotique d'ananas, mangue, fruit de la passion et orange pour une explosion de saveurs tropicales. Notre bestseller!",
    details: [
      "<strong>Volume:</strong> 500 ml",
      "<strong>Ingrédients:</strong> Ananas, mangue, passion, orange",
      "<strong>Conservation:</strong> À consommer dans les 48h",
      "<strong>Bienfaits:</strong> Multi-vitamines, énergisant",
      "<strong>Recommandé:</strong> Notre produit phare",
    ],
  },
  bissap: {
    image:
       "images/s3.png",
    title: "Bissap",
    price: "2 000 FCFA",
    description:
      "La boisson traditionnelle africaine par excellence! Notre bissap est préparé selon la recette authentique avec des fleurs d'hibiscus de qualité.",
    details: [
      "<strong>Volume:</strong> 500 ml",
      "<strong>Ingrédients:</strong> Fleurs d'hibiscus, menthe, sucre",
      "<strong>Conservation:</strong> 3-4 jours au frais",
      "<strong>Bienfaits:</strong> Antioxydants, régule la tension",
      "<strong>Type:</strong> Boisson traditionnelle",
    ],
  },
  gingembre: {
    image:
       "images/s4.png",
    title: "Jus de Gingembre",
    price: "2 500 FCFA",
    description:
      "Revigorant et épicé, notre jus de gingembre est parfait pour stimuler votre système immunitaire. Un concentré de bienfaits!",
    details: [
      "<strong>Volume:</strong> 500 ml",
      "<strong>Ingrédients:</strong> Gingembre frais, citron, miel",
      "<strong>Conservation:</strong> 3-4 jours au frais",
      "<strong>Bienfaits:</strong> Anti-inflammatoire, digestif",
      "<strong>Intensité:</strong> Épicé et tonifiant",
    ],
  },
};

function openModal(productKey) {
  const product = products[productKey];
  const modal = document.getElementById("productModal");

  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.title;
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("modalDescription").textContent = product.description;

  const detailsList = document.getElementById("modalDetails");
  detailsList.innerHTML = product.details
    .map((detail) => `<li>${detail}</li>`)
    .join("");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("productModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function orderProduct() {
  const productName = document.getElementById("modalTitle").textContent;
  alert(
    `Merci pour votre commande de ${productName}! Nous vous contacterons bientôt.`
  );
  closeModal();
}

// Fermer la modale en cliquant en dehors
document.getElementById("productModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Fermer avec la touche Échap
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
