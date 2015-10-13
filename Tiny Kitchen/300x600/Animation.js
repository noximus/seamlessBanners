var BanTimeline = {
  star1: document.getElementById("star1"),
  star2: document.getElementById("star2"),
  star3: document.getElementById("star3"),
  star4: document.getElementById("star4"),
  star5: document.getElementById("star5"),
  star6: document.getElementById("star6"),
  utensil1: document.getElementById("utensil1"),
  utensil2: document.getElementById("utensil2"),
  utensil3: document.getElementById("utensil3"),
  utensil4: document.getElementById("utensil4"),
  utensil5: document.getElementById("utensil5"),
  your: document.getElementById("your"),
  tinykitchen: document.getElementById("tinykitchen"),
  thankyou: document.getElementById("thankyou"),
  bind: function (elem, eventName, callback) {if (elem.addEventListener) {elem.addEventListener(eventName, callback, false);}else if (elem.attachEvent) {var eID = elem.attachEvent('on'+ eventName, callback);boundEvents[eID] = { name: eventName, callback: callback };}},
  init: function () {
    // CTA BTN CLICKTAG //
    BanTimeline.bind(document.getElementById('click_screen'), 'click', function(e) 
    {
      e.preventDefault();
      Enabler.exit("clickTag1");
    });
    document.getElementById("container").style.display = "block";

    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump

    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(your, .4, {opacity:1, display: 'block', delay:.2, ease:Power1.easeOut});
    TweenLite.to(tinykitchen, .4, {opacity:1, display: 'block', delay:.3, ease:Power1.easeOut});
    TweenLite.to(thankyou, .4, {opacity:1, display: 'block', delay:.5, ease:Power1.easeOut});
    TweenLite.to(utensil1, .4, {top:0, delay:.7, ease:Power4.easeOut});
    TweenLite.to(utensil2, .4, {top:0, delay:.8, ease:Power4.easeOut});
    TweenLite.to(utensil3, .4, {top:0, delay:.9, ease:Power4.easeOut});
    TweenLite.to(utensil4, .4, {top:0, delay:1, ease:Power4.easeOut});
    TweenLite.to(utensil5, .4, {top:0, delay:1.1, ease:Power4.easeOut});
    TweenLite.to(star5, .4, {opacity:1, display:'block', delay:1.2, ease:Bounce.easeOut});
    TweenLite.to(star1, .4, {opacity:1, display:'block', delay:1.3, ease:Bounce.easeOut});
    TweenLite.to(star2, .4, {opacity:1, display:'block', delay:1.4, ease:Bounce.easeOut});
    TweenLite.to(star3, .4, {opacity:1, display:'block', delay:1.5, ease:Bounce.easeOut});
    TweenLite.to(star4, .4, {opacity:1, display:'block', delay:1.6, ease:Bounce.easeOut});
    TweenLite.to(star6, .4, {opacity:1, display:'block', delay:1.7, ease:Bounce.easeOut});

    // TweenLite.delayedCall(1, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(your, .2, {opacity:1, display: 'block', delay: 0, ease:Power4.easeOut});

    TweenLite.delayedCall(1.3, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(a, .2, {opacity:1, display: 'block', delay: 0, ease:Power5.easeOut});

    TweenLite.delayedCall(3, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f4_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    
    TweenLite.delayedCall(3, BanTimeline.frame5);
  },
  frame5: function () {
    TweenLite.to(f5_img1, 2, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {if (Enabler.isInitialized()) {enablerInitHandler();} else {Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler);}}
function enablerInitHandler(){BanTimeline.init();}
