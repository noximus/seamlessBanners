var BanTimeline = {
  star1: document.getElementById("star1"),
  star2: document.getElementById("star2"),
  star3: document.getElementById("star3"),
  star4: document.getElementById("star4"),
  
  
  your: document.getElementById("your"),
  tinyKitchen: document.getElementById("tinyKitchen"),
  willThankYou: document.getElementById("willThankYou"),
  frame1Wrap: document.getElementById("frame1Wrap"),
  frame2Wrap: document.getElementById("frame2Wrap"),
  frame3Wrap: document.getElementById("frame3Wrap"),

  
  f2AndSoWill: document.getElementById("f2AndSoWill"),
  f2TheGuy: document.getElementById("f2TheGuy"),
  f3Subletting: document.getElementById("f3Subletting"),
  f2Star1: document.getElementById("f2Star1"),
  f2Star2: document.getElementById("f2Star2"),
  f2Star3: document.getElementById("f2Star3"),
  f2Star4: document.getElementById("f2Star4"),
  f2Star5: document.getElementById("f2star5"),
  f3Logo: document.getElementById("f3Logo"),
  f3NyEats: document.getElementById("f3NyEats"),
  f3OrderNow: document.getElementById("f3OrderNow"),

  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
      TweenLite.to(your, .4, {scaleX:0, scaleY:0});
      TweenLite.to(f3OrderNow, .4, {scaleX:1.5, scaleY:1.5});
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(utensil1, .2, {display:'block', opacity:1, delay:.3, ease:Power4.easeOut});
    TweenLite.to(utensil2, .2, {display:'block', opacity:1, delay:.35, ease:Power4.easeOut});
    TweenLite.to(utensil3, .5, {display:'block', top:0, delay:.4, ease:Power4.easeOut});
    TweenLite.to(utensil4, .2, {display:'block', opacity:1, delay:.45, ease:Power4.easeOut});
    TweenLite.to(utensil5, .2, {display:'block', opacity:1, delay:.5, ease:Power4.easeOut});
    TweenLite.to(your, .2, {opacity:1, display: 'block', scaleX:1, scaleY:1, delay:.6, ease:Power1.easeOut});
    TweenLite.to(tinykitchen, .2, {opacity:1, display: 'block', delay:.7, ease:Power1.easeOut});
    TweenLite.to(thankyou, .2, {opacity:1, display: 'block', delay:.8, ease:Power1.easeOut});
    TweenLite.to(star5, .2, {opacity:1, display:'block', delay:.9, ease:Bounce.easeOut});
    TweenLite.to(star1, .2, {opacity:1, display:'block', delay:1, ease:Bounce.easeOut});
    TweenLite.to(star2, .2, {opacity:1, display:'block', delay:1.1, ease:Bounce.easeOut});
    TweenLite.to(star3, .2, {opacity:1, display:'block', delay:1.2, ease:Bounce.easeOut});
    TweenLite.to(star4, .2, {opacity:1, display:'block', delay:1.3, ease:Bounce.easeOut});  
    TweenLite.to(star6, .2, {opacity:1, display:'block', delay:1.4, ease:Bounce.easeOut});

    TweenLite.delayedCall(3.5, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(frame1Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f2AndSoWill, .2, {opacity:1, display: 'block', delay: .2, ease:Power4.easeOut});
    TweenLite.to(f2TheGuy, .2, {opacity:1, display: 'block', delay: .4, ease:Power4.easeOut});
    TweenLite.to(f2SublettingIt, .2, {opacity:1, display: 'block', delay: .6, ease:Power4.easeOut});
    TweenLite.to(f2Star2, .2, {opacity:1, display: 'block', delay: .7, ease:Power4.easeOut});
    TweenLite.to(f2Star3, .2, {opacity:1, display: 'block', delay: .8, ease:Power4.easeOut});
    TweenLite.to(f2Star4, .2, {opacity:1, display: 'block', delay: .9, ease:Power4.easeOut});
    TweenLite.to(f2Star5, .2, {opacity:1, display: 'block', delay: 1, ease:Power4.easeOut});
    TweenLite.to(f2Star1, .2, {opacity:1, display: 'block', delay: 1.1, ease:Power4.easeOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(frame2Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f3Logo, .4, {opacity:1, display: 'block', delay: .3, ease:Power4.easeOut});
    TweenLite.to(f3NyEats, .4, {opacity:1, display: 'block', delay: .8, ease:Power4.easeOut});
    TweenLite.to(f3OrderNow, .5, {opacity:1, display: 'block', scaleX:1, scaleY:1, delay: 1.3, ease:Power4.easeOut});
  }
};
BanTimeline.init();