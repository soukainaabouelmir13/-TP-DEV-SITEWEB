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
    
    let popup=document.getElementById("popup");
    function openpopup(){
        popup.classList.add("openpopup");

    }
    function closepopup(){
        popup.classList.remove("openpopup");

    }
    const sliderr=document.querySelector(".sliderr");
    firstImg=sliderr.querySelectorAll("img")[0];
    arrowIcons=document.querySelectorAll(".sliderimg i");

    let isDragStart=false,prevPageX,prevScrollLeft;
    
    

    const showHideIcons=()=>{
        let scrollWidth=sliderr.scrollWidth-sliderr.clientWidth;
        arrowIcons[0].style.display=sliderr.scrollLeft==0 ? "none" :"block";
        arrowIcons[1].style.display=sliderr.scrollLeft==scrollWidth ? "none" :"block";
    }
    arrowIcons.forEach(icon=>{
        
        
        icon.addEventListener("click",()=>{
            let firstImgWidth=firstImg.clientWidth+14;
            sliderr.scrollLeft+=icon.id=="leftr"? -firstImgWidth:firstImgWidth;
            setTimeout(()=>showHideIcons() ,60);

        });
    });
    const dragStart=(e)=>{
      isDragStart=true;
      prevPageX=e.pageX ||e.touches[0].pageX;
      prevScrollLeft=sliderr.scrollLeft;
    }
    const dragging=(e)=>{
        if(!isDragStart)return;
        e.preventDefault();
        sliderr.classList.add("dragging");
        let positionDiff=(e.pageX||e.touches[0].pageX)-prevPageX;
        sliderr.scrollLeft=prevScrollLeft-positionDiff;
        showHideIcons();
    }
    const dragStop=()=>{
        isDragStart=false;
        sliderr.classList.remove("dragging");

    }
    sliderr.addEventListener("mousedown",dragStart);
    sliderr.addEventListener("touchstart",dragStart);
    sliderr.addEventListener("mousemove",dragging);
    sliderr.addEventListener("touchmove",dragging);
    sliderr.addEventListener("mouseup",dragStop);
    sliderr.addEventListener("mouseleave",dragStop);
    sliderr.addEventListener("touchend",dragStop);


    function toggleCart() {
        const cartElement = document.getElementById('payment-form');
        cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'block' : 'none';
      }

      function loginCart() {
        const cartElement = document.getElementById('login-container');
        cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'block' : 'none';
      }
     
     