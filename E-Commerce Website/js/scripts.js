 
// const products =[
//     {id:1,name :"Laptop",price:1000,image:"./assets/images/laptop.jpeg",style:"min-height: 70% object-fit: contain;"},  
//     {id:2,name :"Headphone",price:1370,image:"./assets/images/headphone.jpeg"},
//     {id:3,name :"Phone",price:1500,image:"./assets/images/phone.jpeg"} ,
//     {id:1,name :"Laptop",price:1000,image:"./assets/images/laptop.jpeg", style:"min-height: 70% object-fit: contain;"},  
//     {id:2,name :"Headphone",price:1370,image:"./assets/images/headphone.jpeg"},
//     {id:3,name :"Phone",price:1500,image:"./assets/images/phone.jpeg"} 
// ];

// //Display Products
// const productList =document.getElementById('product-list');
// products.forEach(product=>{
//     const productDiv =document.createElement('div');
//     productDiv.classList.add('product');
//     productDiv.innerHTML=`
//     <img src="${product.image}" alt="${product.name}">
//     <h3>${product.name}</h3>
//     <p>Price: $${product.price}</p>
//     <button onclick ="addToCart(${product.id}")>Add to Cart</button>`;
//     productList.appendChild(productDiv);
// });

// //Handle Cart
// let cart = JSON.parse(localStorage.getItem('cart'))||[];
// updateCartCount();

// function addToCart(productId){
//     const product = products.find(p=>p.id===productId);
//     cart.push(product);
//     localStorage.setItem('cart',JSON.stringify(cart));
//     updateCartCount();
//     displayCart();
// }

// function updateCartCount(){
//     document.getElementById('cart-count').innerText = cart.length;
// }
// function displayCart(){
//     const cartItemDiv = document.getElementById('cart-items')
//     cartItemDiv.innerHTML = '';
//     cart.forEach(item =>{
//         const cartItemDiv=document.createElement('div');
//         cartItemDiv.classList.add('cart-item');
//         cartItemDiv.innerHTML =`
//         <span>${item.name} -$${item.price}</span>
//         <button onclick="removeFromCart(${item.id})">Remove</button>`;
//         cartItemDiv.appendChild(cartItemDiv);
//     });
// }

// function removeFromCart(productId){
//     cart =cart.filter(item =>item.id!==productId);
//     localStorage.setItem('cart' ,JSON.stringify(cart));
//     updateCartCount();
//     displayCart();
// }

// document.getElementById('checkout-btn').addEventListener('click' ,()=>{
//     alert('Checkout not implemented yet')
// });

/* VEGETABLE AND FRUITS */




  

