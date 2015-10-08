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

  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
      TweenLite.to(your, .4, {scaleX:0, scaleY:0});
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(utensil1, .2, {display:'block', opacity:1, delay:.3, ease:Power4.easeOut});
    TweenLite.to(utensil2, .2, {display:'block', opacity:1, delay:.35, ease:Power4.easeOut});
    TweenLite.to(star1, .2, {opacity:1, display:'block', delay:.4, ease:Bounce.easeOut});
    TweenLite.to(utensil3, .4, {display:'block', top:0, delay:.45, ease:Power4.easeOut});
    TweenLite.to(star2, .2, {opacity:1, display:'block', delay:.5, ease:Bounce.easeOut});
    TweenLite.to(star3, .2, {opacity:1, display:'block', delay:.55, ease:Bounce.easeOut});
    TweenLite.to(star4, .2, {opacity:1, display:'block', delay:.6, ease:Bounce.easeOut});
    TweenLite.to(utensil4, .2, {display:'block', opacity:1, delay:.65, ease:Power4.easeOut});
    TweenLite.to(utensil5, .2, {display:'block', opacity:1, delay:.7, ease:Power4.easeOut});
    TweenLite.to(your, .2, {opacity:1, display: 'block', scaleX:1, scaleY:1, delay:.75, ease:Power1.easeOut});
    TweenLite.to(tinykitchen, .4, {opacity:1, display: 'block', delay:.9, ease:Power1.easeOut});
    TweenLite.to(star5, .2, {opacity:1, display:'block', delay:.95, ease:Bounce.easeOut});    
    TweenLite.to(thankyou, .4, {opacity:1, display: 'block', delay:1, ease:Power1.easeOut});
    TweenLite.to(star6, .2, {opacity:1, display:'block', delay:1.05, ease:Bounce.easeOut});

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
BanTimeline.init();