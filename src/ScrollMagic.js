import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { TweenMax } from "gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax);
const controller = new ScrollMagic.Controller();
const Scene = (gsap, trigger) => {
  for (let i = 0; i < gsap.length; i++) {
    const tm = TweenMax.to(gsap[i], 0.5, { opacity: 1, y: 0 });
    console.log(gsap[i]);
    new ScrollMagic.Scene({
      triggerElement: gsap[i],
      offset: -50,
      triggerHook: trigger
    })
      // .setClassToggle(gsap[i], className)
      .setTween(tm)
      .addTo(controller);
  }
};
export default Scene;
