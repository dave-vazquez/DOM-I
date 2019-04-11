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


/*********************************************************************************
*                                 HEADER/NAV                                     *
**********************************************************************************/ 
const nav = document.querySelector('nav');
const navAnchors = document.querySelectorAll('nav a');
const logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent["nav"]["img-src"]);

navAnchors.forEach((anchor, i) => {
  anchor.innerText = siteContent.nav[`nav-item-${++i}`];
  anchor.style.color = 'green';
});

const prependedAnchor = document.createElement('a');
const appendedAnchor = document.createElement('a');

prependedAnchor.textContent = 'Locations'
prependedAnchor.style.color = 'green';

appendedAnchor.textContent = 'Careers'
appendedAnchor.style.color = 'green';

nav.prepend(prependedAnchor);
nav.append(appendedAnchor);

/*********************************************************************************
*                               CALL-TO-ACTION                                   *
**********************************************************************************/ 
const ctaHeader = document.querySelector('.cta-text > h1');
const ctaButton = document.querySelector('.cta-text > button');
const ctaImage = document.getElementById('cta-img');

ctaHeader.innerText = siteContent.cta.h1;
ctaButton.innerText = siteContent.cta.button;
ctaImage.src = siteContent.cta["img-src"];

/*********************************************************************************
*                                 TOP-CONTENT                                    *
**********************************************************************************/ 
const topContentDivs = document.querySelectorAll('.top-content div');

const topContent1Header = topContentDivs[0].firstElementChild;
const topContent1Para = topContentDivs[0].lastElementChild;
const topContent2Header = topContentDivs[1].firstElementChild;
const topContent2Para = topContentDivs[1].lastElementChild;

topContent1Header.innerText = siteContent["main-content"]["features-h4"];
topContent1Para.innerText = siteContent["main-content"]["features-content"];

topContent2Header.innerText = siteContent["main-content"]["about-h4"];
topContent2Para.innerText = siteContent["main-content"]["about-content"];

/*   ** MIDDLE-IMG **  */

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

/*********************************************************************************
*                               BOTTOM-CONTENT                                   *
**********************************************************************************/ 
const bottomContentDivs = document.querySelectorAll('.bottom-content div');

const bottomContent1Header = bottomContentDivs[0].firstElementChild;
const bottomContent1Para = bottomContentDivs[0].lastElementChild;
const bottomContent2Header = bottomContentDivs[1].firstElementChild;
const bottomContent2Para = bottomContentDivs[1].lastElementChild;

bottomContent1Header.innerText = siteContent["main-content"]["services-h4"];
bottomContent1Para.innerText = siteContent["main-content"]["services-content"];

bottomContent2Header.innerText = siteContent["main-content"]["product-h4"];
bottomContent2Para.innerText = siteContent["main-content"]["product-content"];

/*********************************************************************************
*                                   CONTACT                                      *
**********************************************************************************/ 
const contactHeader = document.querySelector('.contact h4');
const contactParas = document.querySelectorAll('.contact p');

contactHeader.textContent = siteContent.contact["contact-h4"];
contactParas[0].textContent = siteContent.contact.address;
contactParas[1].textContent = siteContent.contact.phone;
contactParas[2].textContent = siteContent.contact.email;

/*********************************************************************************
*                                    FOOTER                                      *
**********************************************************************************/ 
const footerPara = document.querySelector('footer p');

footerPara.textContent = siteContent.footer.copyright; 












