// This const wrapper selects the document and then querySelector selects the class I want to select.  
const wrapper = document.querySelector('.sliderWrapper');

// This const will create an eventListener that will be called when I click one of the buttons. 
const menuItems = document.querySelectorAll('.menuItem');

// This is an array for the products section  

const product =[
  {
    id: 1,
    title: 'Air Force',
    price: 1199,
    colors: [
      {
        code: 'black',
        img : './images/air.png',
      },
      {
        code: 'darkblue',
        img : './images/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 999,
    colors: [
      {
        code: 'lightgray',
        img : './images/jordan.png',
      },
      {
        code: 'green',
        img : './images/jordan2.png',
      }
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: 749,
    colors: [
      {
        code: 'lightgray',
        img : './images/blazer.png',
      },
      {
        code: 'green',
        img : './images/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 799,
    colors: [
      {
        code: 'black',
        img : './images/crater.png',
      },
      {
        code: 'white',
        img : './images/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 899,
    colors: [
      {
        code: 'darkgray',
        img : './images/hippie.png',
      },
      {
        code: 'black',
        img : './images/hippie2.png',
      },
    ]
  }
]

// This selects the products from the array of products
let chosenProduct = product[0];

// When the navTop shoe is selected the product is selected with the following information added
const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');





menuItems.forEach((item, index) =>{
  item.addEventListener('click', () => {
   // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
   // change current product slide
   chosenProduct = product[index];

   // change text of currentProduct 
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = 'R' + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;
    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
   });
  });
});

// This function will allow us to coose between the 2 colors of the shoe, allowing the image to change

currentProductColors.forEach((color, index) => { color.addEventListener('click',() =>{
    currentProductImg.src = chosenProduct.colors[index].img;
  })
})

// This function will allow us to click on the size of the shoes and it when do a function

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click',()=>{
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';  
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

// This const below will select the classes of the pop up window
const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});

close.addEventListener('click', () => {
  payment.style.display = 'none';
});