const container = document.querySelector('.carousel-container');
const slider = document.querySelector('.carousel-slide');
const elements = document.querySelectorAll('.carousel-slide div');

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const size = slider.clientWidth;

let counter = 1;
slider.style.transform = `translateX(${-size * counter}px)`;

nextButton.addEventListener('click', () => {
    if(counter>elements.length-2){
        return;
    }
    slider.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    slider.style.transform = `translateX(${-size * counter}px)`;

})

prevButton.addEventListener('click', () => {
    if(counter<1){
        return;
    }
    slider.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    slider.style.transform = `translateX(${-size * counter}px)`;
})

slider.addEventListener('transitionend',()=>{
    if(elements[counter].id==='last-clone'){
        slider.style.transition="none";
        counter = elements.length-2;
        slider.style.transform = `translateX(${-size * counter}px)`;
    }
    if(elements[counter].id==='first-clone'){
        slider.style.transition="none";
        counter = 1;
        slider.style.transform = `translateX(${-size * counter}px)`;
    }
})

