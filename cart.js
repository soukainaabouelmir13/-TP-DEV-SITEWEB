let open=document.getElementById('open');
let close=document.getElementById('close')
let containerr=document.querySelector('.containerr');
close.onclick=function(){
    containerr.classList.add('hide');
    this.classList.add('hide');
    open.classList.remove('hide');
}

open.onclick=function(){
    this.classList.add('hide');
   close.classList.remove('hide');
    containerr.classList.remove('hide');
}

if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}
function ready(){
    var removeCartButtons=document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i=0;i<removeCartButtons.length;i++){
        var button=removeCartButtons[i]
        button.addEventListener("click" ,removeCartItem)
    }
}
function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
}

// Function to add an item to the cart
function addToCart(productName, price,imageUrl) {
    // Create a new list item for the cart
    var cartItem = document.createElement("li");
    var imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = productName;
      cartItem.appendChild(imgElement);

    cartItem.textContent = productName +"-MAD"+price;
    
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
              removeButton.className = "remove-btn";
              removeButton.onclick = function () {
                removeFromCart(cartItem, price);
              };
              cartItem.appendChild(removeButton);
    
    // Add the item to the cart
    document.getElementById("cart-items").appendChild(cartItem);

    // Update the total price
    var cartTotal = parseFloat(document.getElementById("totala").textContent);
    document.getElementById("totala").textContent = (cartTotal + price).toFixed(2);
  }
  function removeFromCart(cartItem, price) {
    // Remove the item from the cart
    document.getElementById("cart-items").removeChild(cartItem);


    var cartTotal = parseFloat(document.getElementById("totala").textContent);
    document.getElementById("totala").textContent = (cartTotal - price).toFixed(2);}
    


    var currentSlide = 0;
        
    function showSlide(index) {
      var slides = document.querySelector('.slides');
      if (index < 0) {
        currentSlide = slides.children.length - 1;
      } else if (index >= slides.children.length) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }
      slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // Auto slide change every 3 seconds
    setInterval(nextSlide, 2000);


    function toggleCart() {
        const cartElement = document.getElementById('payment-form');
        cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'block' : 'none';
      }
      let btn=document.getElementById("btn");
window.onscroll=function(){
    if(scrollY>=400){
    btn.style.display='block';}
    else{
        btn.style.display='none';
    }
}
btn.onclick=function(){
   scroll({
    left:0,
    top:0,
    behavior:"smooth"
   })
}