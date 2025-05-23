function loco(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();



/*Timelines for page2 to animate text over video*/
var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:'#page2',
      start:'top-top',
      scrub:1,
      scroller:'#main',
      pin:true,
      markers:false,
  }
})
tl2.from(" #page2>#over_video_container ",{
  top:'50%'
})
tl2.to(" #page2>#over_video_container ",{
  top:'-50%'
})

/*Timelines for page4 to animate text over video*/
var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:'#page4',
      start:'top-top',
      scrub:1,
      scroller:'#main',
      pin:true,
      markers:false,
  }
})
tl4.from(" #page4>#over_video_container ",{
  top:'50%'
})
tl4.to(" #page4>#over_video_container ",{
  top:'-50%',
})


/*Timelines for page6 to animate text over video*/
var tl6 = gsap.timeline({
  scrollTrigger:{
      trigger:'#page6',
      start:'top-top',
      scrub:1,
      scroller:'#main',
      pin:true,
      markers:false,
  }
})
tl6.from(" #page6>#over_video_container ",{
  top:'50%'
})
tl6.to(" #page6>#over_video_container ",{
  top:'-50%',
})