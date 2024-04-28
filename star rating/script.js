let stars = document.querySelectorAll(".stars");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let selectedindex;
stars.forEach((star,index)=>
{
    
    star.addEventListener("click",()=>
    {
        if(index+1==1)
        {
            two.classList.remove("ycolor");
            three.classList.remove("ycolor");
            four.classList.remove("ycolor");
            five.classList.remove("ycolor");
        }
        if(index+1==2)
        {
            one.classList.add("ycolor");
            two.classList.add("ycolor");
            three.classList.remove("ycolor");
            four.classList.remove("ycolor");
            five.classList.remove("ycolor");
        }
        if(index+1==3)
        {
            one.classList.add("ycolor");
            two.classList.add("ycolor");
            three.classList.add("ycolor");
            four.classList.remove("ycolor");
            five.classList.remove("ycolor");
        }
        if(index+1==4)
        {
            one.classList.add("ycolor");
            two.classList.add("ycolor");
            three.classList.add("ycolor");
            four.classList.add("ycolor");
            five.classList.remove("ycolor");
        }
        if(index+1==5)
        {
            one.classList.add("ycolor");
            two.classList.add("ycolor");
            three.classList.add("ycolor");
            four.classList.add("ycolor");
            five.classList.add("ycolor");
        }
        
    });
});




// // Select all star elements
// const stars = document.querySelectorAll(".stars");

// // Loop through each star element
// stars.forEach((star, index) => {
//     // Add click event listener to each star
//     star.addEventListener("click", () => {
//         // Remove "ycolor" class from all stars
//         stars.forEach(s => s.classList.remove("ycolor"));
        
//         // Add "ycolor" class to stars up to the clicked star (inclusive)
//         for (let i = 0; i <= index; i++) {
//             stars[i].classList.add("ycolor");
//         }
//     });
// });
