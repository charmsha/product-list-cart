// import data from './data.json' assert {type:'json'}

// console.log(data);

const container = document.querySelector('.products-container');

fetch('./data.json')

.then((response)=> response.json())

.then((data) =>
   
      container.innerHTML = data.map((product) =>{
         const{name,category,price,image:{desktop}} = product;


         return `
          <img src="${desktop}" alt="" srcset="">
         
         
         
         `
      }).join(' ')
  
  
      
   
);







      // <p class="name">${name}</p>
      // <p class="spec">${category}</p>
      // <p class="price">${price}</p>