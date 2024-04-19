//part1

let p1Image = document.getElementById("p1Image2");
let p1ImageDiv =document.getElementsByClassName("p1Image");
let p1LeftText =document.getElementById("p1LeftText");
let p1RightText =document.getElementById("p1RightText");
let color1;
let color2;
// p1ImageDiv[0].style.backgroundColor = "red";
// p1Image.style.backgroundColor = "red";


// rgba(141, 35, 35, 0.906)
p1RightText.style.color= "white";
p1LeftText.style.color= "white";

// p1Image.style.width = "red";
document.addEventListener("mousemove",function(elem){
    var x = elem.clientX;
    console.log(elem.clientX)
    p1Image.style.width = x*0.05-16+"vw";
    p1ImageDiv[0].style.left = 48+x*0.0065-2+'vw';
    color1= 1 - (x * 0.0006);
    color2= x * 0.001 ;

    if(color1 < 0.4 ){
      color1 = 0.4;
    } 
    if(color2 < 0.4){
      color2=0.4;
    }

    p1LeftText.style.color= "rgba(255, 255, 255," + color1 +")" ;

    p1RightText.style.color= "rgba(255, 255, 255," + color2 +")";
})















//part2
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





gsap.from("#page2 h1:nth-child(1)", {
  scrollTrigger: {
    trigger: "#page2 h1:nth-child(1)",
    scroller: "#main",
    // markers: true,
    start: "top 70%"
  },
  opacity: 0
})


gsap.from(".box h4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".box h4",
    scroller: "#main",
    // markers:true,
    start: "top 70%"
  },
  stagger: 0.5
})

gsap.from(".dev-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".dev-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 2
  }

})
gsap.from(".des-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".des-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 1
  }

})