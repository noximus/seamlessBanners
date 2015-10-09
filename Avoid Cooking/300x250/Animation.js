var home_animation = {
  boundEvents: {},  
  container: document.getElementById("container"),
  Frame1: document.getElementById("Frame1"),
  Frame2: document.getElementById("Frame2"),
  f1_Img01: document.getElementById("f1_Img01"),
  f1_Img02: document.getElementById("f1_Img02"),
  f1_Img03: document.getElementById("f1_Img03"),
  f1_Img04: document.getElementById("f1_Img04"),
  f1_Txt01: document.getElementById("f1_Txt01"),
  f1_Txt02: document.getElementById("f1_Txt02"),
  f1_Txt03: document.getElementById("f1_Txt03"),
  f1_Txt04: document.getElementById("f1_Txt04"),  
  f2_Img01: document.getElementById("f2_Img01"),
  f2_Img02: document.getElementById("f2_Img02"),
  f2_Img03: document.getElementById("f2_Img03"),
  f2_Img04: document.getElementById("f2_Img04"),
  bind: function (elem, eventName, callback) {if (elem.addEventListener) {elem.addEventListener(eventName, callback, false);}else if (elem.attachEvent) {var eID = elem.attachEvent('on'+ eventName, callback);boundEvents[eID] = { name: eventName, callback: callback };}},
  init: function () {
    // CTA BTN CLICKTAG //
    home_animation.bind(container,'click',function(e){e.preventDefault();Enabler.exit("clickTag1");});
    TweenLite.to(container, 0, {opacity:1, display:'block'});      
    TweenLite.to(order_now, 0, {opacity:1, scaleX:0, scaleY:0});  

    TweenLite.to(f1_Img01, 0, {left:-100});
    TweenLite.to(f1_Img02, 0, {left:-100});
    TweenLite.to(f1_Img03, 0, {left:300});
    TweenLite.to(f1_Img04, 0, {left:300});
    TweenLite.to(f2_Img01, 0, {left:-100});
    TweenLite.to(f2_Img02, 0, {left:-100});
    TweenLite.to(f2_Img03, 0, {left:300});
    TweenLite.to(f2_Img04, 0, {left:300});
    home_animation.frame1();
  },
  reset: function () {    
  },
  frame1: function () {
    TweenLite.to(f1_Img01, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});
    TweenLite.to(f1_Img02, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f1_Img03, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f1_Img04, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});

    TweenLite.to(f1_Txt01, .5, {opacity:1, delay: .7, ease: Expo.easeOut});
    TweenLite.to(f1_Txt02, .5, {opacity:1, delay: .6, ease: Expo.easeOut});
    TweenLite.to(f1_Txt03, .5, {opacity:1, delay: .5, ease: Expo.easeOut});
    TweenLite.to(f1_Txt04, .5, {opacity:1, delay: .4, ease: Expo.easeOut});
    
    // Exit
    TweenLite.to(Frame1, 0.2, {opacity:0, delay: 2.8});
    TweenLite.delayedCall(3, home_animation.frame2);
  },
  frame2: function () {
    
    
    TweenLite.to(f2_Img01, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});
    TweenLite.to(f2_Img02, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f2_Img03, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f2_Img04, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});

    TweenLite.to(f2_Txt01, .5, {opacity:1, delay: .7, ease: Expo.easeOut});
    TweenLite.to(f2_Txt02, .5, {opacity:1, delay: .6, ease: Expo.easeOut});
    TweenLite.to(f2_Txt03, .5, {opacity:1, delay: .5, ease: Expo.easeOut});
    TweenLite.to(f2_Txt04, .5, {opacity:1, delay: .4, ease: Expo.easeOut});
    TweenLite.to(f2_Txt05, .5, {opacity:1, delay: 1, ease: Expo.easeOut});
    TweenLite.to(f2_Txt06, .5, {opacity:1, delay: .9, ease: Expo.easeOut});
    TweenLite.to(f2_Txt07, .5, {opacity:1, delay: .8, ease: Expo.easeOut});
    TweenLite.to(f2_Txt08, .5, {opacity:1, delay: .7, ease: Expo.easeOut});
    
    // Exit
    TweenLite.to(Frame2, 0.2, {opacity:0, delay: 2.8});
    TweenLite.delayedCall(3, home_animation.frame3);
  },
  frame3: function () {
    TweenLite.to(logo, 0.3, {opacity:1});
    TweenLite.to(how, 0.3, {opacity:1, delay:0.1});
    TweenLite.to(order_now, 0.3, {opacity:1, top:0, delay:0.2, scaleX:1, scaleY:1});  
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {if (Enabler.isInitialized()) {enablerInitHandler();} else {Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler);}}
function enablerInitHandler(){home_animation.init();}

