const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Selectors created
let navigation = document.querySelectorAll("a");
let headerContent = document.querySelector("h1");
let headerBtn = document.querySelector("button");
let ctaImg = document.getElementById("cta-img");
let textContent = document.querySelectorAll("h4");
let paragraph = document.querySelectorAll("p");
let middleImg = document.getElementById("middle-img");
let contactHeading = document.querySelector(".contact h4");
let contactParagraph = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer p");


// HTML updated with the JSON data
navigation[0].textContent = siteContent.nav["nav-item-1"]; 
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];

headerContent.innerHTML = siteContent.cta.h1.split(" ").join("<br>");
headerBtn.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

textContent[0].textContent = siteContent["main-content"]["features-h4"];
paragraph[0].textContent = siteContent["main-content"]["features-content"];

textContent[1].textContent = siteContent["main-content"]["about-h4"];
paragraph[1].textContent = siteContent["main-content"]["about-content"];
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

textContent[2].textContent = siteContent["main-content"]["services-h4"];
paragraph[2].textContent = siteContent["main-content"]["services-content"];

textContent[3].textContent = siteContent["main-content"]["product-h4"];
paragraph[3].textContent = siteContent["main-content"]["product-content"];

textContent[4].textContent = siteContent["main-content"]["vision-h4"];
paragraph[4].textContent = siteContent["main-content"]["vision-content"];

contactHeading.textContent = siteContent.contact["contact-h4"];
contactParagraph[0].textContent = siteContent.contact.address;
contactParagraph[1].textContent = siteContent.contact.phone;
contactParagraph[2].textContent = siteContent.contact.email;

footer.textContent = siteContent.footer.copyright;

navigation.forEach(a => {
  a.style.color = "green";
});

let myNewItem1 = document.createElement("a");
myNewItem1.textContent = "Log in";
myNewItem1.setAttribute("href", "#" );
myNewItem1.style.color = "green";

let myNewItem2 = document.createElement("a");
myNewItem2.textContent = "Home";
myNewItem2.setAttribute("href", "#" );
myNewItem2.style.color = "green";

let nav = document.querySelector("nav");
nav.appendChild(myNewItem1);
nav.prepend(myNewItem2);
