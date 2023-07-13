const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};



const nav = document.querySelector('header nav');

const services = nav.querySelector('a:nth-child(1)').textContent = 'Services';
const product = nav.querySelector('a:nth-child(2)').textContent = 'Product';
const vision = nav.querySelector('a:nth-child(3)').textContent = 'Vision';
const features = nav.querySelector('a:nth-child(4)').textContent = 'Features'; 
const about = nav.querySelector('a:nth-child(5)').textContent = 'About';
const contact = nav.querySelector('a:nth-child(6)').textContent = 'Contact'
 
/*assigned class name 'italic' to all anchor tags
assigned their text content and style*/ 

const logoImg = document.querySelector('#logo-img');

logoImg.setAttribute('src','http://localhost:9000/img/logo.png');

const section = document.querySelector('.cta-text');
const sectionOneH1 = section.querySelector('h1').textContent = 'DOM Is Awesome';
const button = section.querySelector('button').textContent = 'Get Started';
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'http://localhost:9000/img/cta.png';
//section 2 done 

const topContent = document.querySelector('.top-content');
const featuredTextContent = topContent.querySelector('h4').textContent = 'Features';
const pForTextContent = topContent.querySelector('p');
pForTextContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//section 3 done

const secondTextBody = topContent.querySelectorAll('.text-content'); 
const array = Array.from(secondTextBody); 
const secondDiv = array[1];
const h4Second = secondDiv.querySelector('h4').textContent = 'About';
const pSecond = secondDiv.querySelector('p').textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//top content done

const middleImg = document.querySelector('#middle-img').src = "http://localhost:9000/img/accent.png";
const text_content = document.querySelectorAll('.text-content'); 
const secondArray = Array.from(text_content);
const thirdDiv = secondArray[2];
const h4Third = thirdDiv.querySelector('h4').textContent = 'Services'
const pThird = thirdDiv.querySelector('p').textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//third div done
const fourthDiv = secondArray[3];
const h4Fourth = fourthDiv.querySelector('h4').textContent = 'Product';
const pFourth = fourthDiv.querySelector('p').textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//fourth div done

const fifthDiv = secondArray[4];
const h4Fifth = fifthDiv.querySelector('h4').textContent = 'Vision';
const pFifth = fifthDiv.querySelector('p').textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//fifth done 

const lastSection = document.querySelector('.contact');
const h4_contact = lastSection.querySelector('h4').textContent = 'Contact';
const p1 = lastSection.querySelector('p').textContent = '123 Way 456 Street Somewhere, USA';
const p2 = lastSection.querySelector('p:nth-of-type(2)').textContent = '1 (888) 888-8888';
const p3 = lastSection.querySelector('p:nth-of-type(3)').textContent = 'sales@greatidea.io';

//last section done

 const links = nav.querySelectorAll('a');
 links.forEach(n=> {
  n.style.fontStyle = 'italic';
  n.classList.add('italic'); 
 })
 console.log(links)
 const lastA = document.querySelector('footer > a');
 lastA.classList.add('bold'); 
 lastA.textContent = 'Copyright Great Idea! 2021';
 console.log(lastA);