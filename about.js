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
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newTransformValue = -currentIndex * 100 + '%';
  document.getElementById('slider').style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-play
setInterval(nextSlide, 2000);
