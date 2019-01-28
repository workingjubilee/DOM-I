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
// Nav Bar
const navBarKeys = Object.keys(siteContent.nav).filter(key => {
  if (key.includes('nav')) {
    return key;
  }
});

console.log(navBarKeys);
const navBar = document.querySelectorAll('nav a');
navBar.forEach((element,index) => {
  element.textContent = siteContent.nav[navBarKeys[index]];
});

// CTA

const ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = "DOM<br />is</br />Awesome"
const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta.button;

// Main Content
const h4list = document.querySelectorAll(".main-content h4");

// const topContentP = document.querySelectorAll(".main-content .top-content .text-content p");
// console.log(topContentH4);

const h4Keys = Object.keys(siteContent["main-content"]).filter(key => {
  if (key.includes('h4')) {
    return key;
  }
});
h4list.forEach((element,index) => {
  element.textContent = siteContent["main-content"][h4Keys[index]];});
console.log(h4Keys);


const mainPlist = document.querySelectorAll(".main-content p");
const mainPKeys = Object.keys(siteContent["main-content"]).filter(key => {
  if (key.includes('content')) {
    return key;
  }
});
mainPlist.forEach((element,index) => {
  element.textContent = siteContent["main-content"][mainPKeys[index]];});


// const contact = document.querySelectorAll(".contact");
// const contactChildren = contact.childNodes;
// console.log(contactChildren);
// const contactKeys = Object.keys(siteContent.contact);
// contact.children.ForEach((element,index) => {
//   element.textContent = siteContent.contact[contactKeys[index]];
// });

const contacth4 = document.querySelector(".contact h4");
contacth4.textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];
// console.log(contactItems[0]);
// contactItems.forEach((element,i) => {
//   const contactJSON = Array.from(siteContent["contact"]);
//   const contactJSONEntries = Object.entries(siteContent["contact"]);
//   console.log(contactJSON);
//   element.textContent = siteContent["contact"][i];
//   console.log(element);
// });
// function contactPLoop() {
//   for (let i = 0; i < contactP.children.length; i++);
// }
// console.log(contactItems);
// contactP.textContent = siteContent["contact"]["contact-h4"];

// siteContent["contact"].forEach((currentValue) => {
// contactItems = document.querySelectorAll(".contact");
// console.log(contactItems);
// document.querySelectorAll(".contact").children.ForEach(()
//   textContent = siteContent["contact"][currentValue];
// });

// document.
// contactStuff = document.querySelectorAll("contact");
// contactStuff = document.getElementsByClassName("contact");
// console.log(contactStuff.children);
// console.log(contactStuff.childNodes);
// contactStuff.children.forEach(() => {
//   const currentItem = contactStuff[i];
//   console.log(currentItem);
//   // textContent = Object.entries(
// });
// function contactChildSet() {
//   for (let i = 0; i < contactStuff[0].children.length; i++) {
//     contactStuff[0].children[i].textContent = Object.entries(siteContent["contact"][i]);
//   }
//   console.log('Ran?')
// }
// console.log(contactStuff[0].children.length);
// console.log(contactStuff[0].children[0]);
// contactChildSet();
// siteContent["contact"].forEach( => {
//   contactStuff[0].children[i].textContent = siteContent
// }
// console.log(siteContent["contact"]);
// console.log(Object.entries(siteContent["contact"]));
// Object.entries(siteContent["contact"].forEach(
// console.log(siteContent["contact"]);
// contactChildSet();
// console.log(contactStuff);
// console.log(contactStuff[0].children);
// contactStuff.textContent = siteContent["contact"];

// Footer
copywrong = document.querySelector("footer p");
copywrong.textContent = siteContent["footer"]["copyright"];

// [""0""].children


// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])




// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

// * [ ] Change the color of the navigation text to be green.
// use .appendChild()` and `.prepend()
// add two new items to the navigation system. You can call them whatever you want.
