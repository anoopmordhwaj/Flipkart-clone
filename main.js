// var counter = 1

// setInterval(goNext, 3000);

// function goNext(){
//     if (counter < 7) {
//         counter++;
//         document.getElementById("slide").src=`images/slide${counter}.webp`;
//         if(counter == 7){
//             counter = 0;
//         }
//     }
// }

// function goPrev(){
//     if (counter > 1) {
//         counter--
//         document.getElementById("slide").src=`images/slide${counter}.webp`
//         if(counter == 1){
//             counter = 8;
//         }
//     }
// }

let slides = document.querySelectorAll(".slide");

var counter  = 0;

setInterval(goNext, 4000);

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
});

const slideImage= () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

function goNext(){
    if (counter < 6) {
        counter++;
        slideImage();
        if(counter == 6){
            counter = 0;
        }
    }
}


function goPrev(){
    if (counter > 0) {
        counter--
        slideImage();
        if(counter == 1){
            counter = 7;
        }
    }
}
