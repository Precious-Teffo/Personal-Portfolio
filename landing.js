/* global https */

//Add event listener to button
document.addEventListener("DOMContentLoaded",function(){
    const exploreBtn=document.getElementById("explore-btn");
    exploreBtn.addEventListener("click",function(){
        //Redirect to poertfoloio page
        window.location.href="index.html";
    });
});
//Add 3D effect on hover
const landingContent=document.querySelector(".landing-content");
landingContent.addEventListener("mouseover",function(){
   landingContent.style.trasform="rotateX(30deg) rotateY(20deg) scale(1.2)"; 
});
landingContent.addEventListener("mouseout",function(){
    landingContent.style.trasform="rotateX(20deg) rotateY(10deg) scale(1.1)"; 
});