var home_animation = {
  boundEvents: {},  



  container: document.getElementById("container"),
  bind: function (elem, eventName, callback) {if (elem.addEventListener) {elem.addEventListener(eventName, callback, false);}else if (elem.attachEvent) {var eID = elem.attachEvent('on'+ eventName, callback);boundEvents[eID] = { name: eventName, callback: callback };}},
  init: function () {
    // CTA BTN CLICKTAG //
    home_animation.bind(document.getElementById('click_screen'), 'click', function(e) 
    {
      e.preventDefault();
      Enabler.exit("clickTag1");
    });
   // TweenLite.to(pre_war, 0.5, {scaleX:2.5,left:0, scaleY:2.5});
   // TweenLite.to(PreWar_circle, 0, {scaleX:1.45,left:2, scaleY:1.45});



    document.getElementById("container").style.display = "block";

  TweenLite.to(order_now, 0, {opacity:1, scaleX:0, scaleY:0});  



    home_animation.frame1();
  },
  reset: function () {    
  },
  frame1: function () {

    console.log("frame1");
    
    // == show stars ==
    var i;
    for (i = 1; i < 13; i++) {

    var varNew = document.getElementById("star_"+i);

    //console.log(varNew);
    TweenLite.to("star_"+i, .5, {opacity:1, delay: .1*i, ease: Expo.easeOut});
    
    }

    TweenLite.to(building_color, 0.5, {opacity:1, delay:1.2});
    TweenLite.to(your, 0.1, {opacity:1, delay:1.2});
    TweenLite.to(secret, 0.1, {opacity:1, delay:1.4});


  TweenLite.delayedCall(3, home_animation.frame2);
  },


  frame2: function () {
    console.log("frame2");

    var i;
    for (i = 1; i < 13; i++) {

    var varNew = document.getElementById("star_"+i);

    //console.log(varNew);
    TweenLite.to("star_"+i, 0.2, {opacity:0, delay:0, ease: Expo.easeOut});
    
    }

    TweenLite.to(building, 0.1, {opacity:0, delay:0});
    TweenLite.to(building_color, 0.1, {opacity:0, delay:0});
    TweenLite.to(your, 0.1, {opacity:0, delay:0});
    TweenLite.to(secret, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.4, home_animation.frame3);
  },
  frame3: function () {
    console.log("frame3");

    TweenLite.to(ThreeAM, 0.1, {opacity:1, delay:0});
    TweenLite.to(dumpling, 0.1, {opacity:1, delay:0.2});
    TweenLite.to(and, 0.1, {opacity:1, delay:0.6});  
    TweenLite.to(donuts, 0.1, {opacity:1, delay:0.8});
    TweenLite.to(order, 0.1, {opacity:1, delay:1});
   
    TweenLite.delayedCall(3, home_animation.frame4);

  },
  frame4: function () {
    console.log("frame4");

    TweenLite.to(ThreeAM, 0.1, {opacity:0, delay:0});
    TweenLite.to(dumpling, 0.1, {opacity:0, delay:0});
    TweenLite.to(and, 0.1, {opacity:0, delay:0});  
    TweenLite.to(donuts, 0.1, {opacity:0, delay:0});
    TweenLite.to(order, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.4, home_animation.frame5);

  },
  frame5: function () {
    console.log("frame5");

    TweenLite.to(is, 0.1, {opacity:1, delay:0});
    TweenLite.to(safe, 0.1, {opacity:1, delay:0.1});
    TweenLite.to(with_text, 0.1, {opacity:1, delay:0.4});  
    TweenLite.to(us, 0.1, {opacity:1, delay:0.5});

   TweenLite.delayedCall(2.2, home_animation.frame6);

  },

  frame6: function () {
    console.log("frame6");

    TweenLite.to(is, 0.1, {opacity:0, delay:0});
    TweenLite.to(safe, 0.1, {opacity:0, delay:0});
    TweenLite.to(with_text, 0.1, {opacity:0, delay:0});  
    TweenLite.to(us, 0.1, {opacity:0, delay:0});

   TweenLite.delayedCall(0.4, home_animation.frame7);

  },


  frame7: function () {
    console.log("frame7");

    TweenLite.to(logo, 0.3, {opacity:1, delay:0});
    TweenLite.to(how, 0.3, {opacity:1, delay:0.1});
    TweenLite.to(order_now, 0.3, {opacity:1, top:0, delay:0.2, scaleX:1, scaleY:1});  

 //  TweenLite.delayedCall(0.4, home_animation.frame7);
  }





};
// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}
function enablerInitHandler(){home_animation.init();}

