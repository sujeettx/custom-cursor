let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let imageDiv = document.querySelector(".image");
main.addEventListener("mousemove",(dets)=>{
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease: "elastic.out"  
})
});
imageDiv.addEventListener("mouseenter",(dets)=>{
    cursor.innerHTML = "view more";
    gsap.to(cursor,{
    scale:3,
    duration:0.1,
    ease: "back.out",
    backgroundColor:"#ffffffa9"
    })
})
imageDiv.addEventListener("mouseleave",(dets)=>{
    cursor.innerHTML = "";
    gsap.to(cursor,{
    scale:1,
    duration:0.1,
    ease: "back.out",
    backgroundColor:"#ffffff"
    })
})
