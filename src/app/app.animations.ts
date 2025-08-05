import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo} from "gsap/EasePack";
    
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrambleTextPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);


export function webpageAnimation() {
  
  let masterTL = gsap.timeline();


  // Animate loading screen
  masterTL.add(removeanimateLoadingPage());
  
  // Then show homepage after loading is complete
  masterTL.add(animateLandingPage());

  // Then show about page after homepage
  masterTL.add(animateAboutPage());

  function animateLandingPage() {
    let tl = gsap.timeline({
      defaults: {
        ease: "power1.out",
      },
    });
    tl
      .set("#homedivider", {
        autoAlpha: 0,
        scaleX: 0,
      })
      
      .to("#homepage", {autoAlpha: 1, duration: 1})
      .from("#viewworkbuttonwhole", {autoAlpha: 0, y: -50, duration: 1, ease: "power4.out", delay: "-0.5"})
      .to("#homeTitle", {
        duration: 2,
        text: { value: "SOFTWARE<br>DEVELOPER", delimiter: "" },
        delay: "-=2"
      })
      .to("#homeTitle", {
        duration: 2,
        text: { value: "SOLOMON<br>A. DIONISIO", delimiter: "" },
        delay: "-=2"
      })
      .to(
        "#homedivider",
        {
          autoAlpha: 1,
          scaleX: 1,
          transformOrigin: "center",
        },
        "-=1"
      );

    return tl;
  }

  function removeanimateLoadingPage() {
    const tl = gsap.timeline();

    tl.to("#loadingscreen", { autoAlpha: 1, duration: 1 }) // optional fade-in
      .to("#loadingscreen", {
        autoAlpha: 0,
        duration: 1.5,
        delay: 1,
        ease: "power2.out",
      })
      .add(() => {
        const el = document.getElementById("loadingscreen");
        if (el) el.style.display = "none";

        document.body.classList.remove("overflow-hidden");

        const appwrap = document.getElementById("appwrap");
        if (appwrap) {
          appwrap.classList.remove("overflow-y-hidden");
          appwrap.classList.remove("max-h-dvh");
        }
      })
      .to("app-root", { autoAlpha: 1, duration: 1, ease: "power2.out" }, "+=0.1");

    return tl;
  }

  function animateAboutPage() {
    let tl = gsap.timeline();

    tl
    .set("#aboutmeleftImage", {autoAlpha: 0})
    .set("#aboutmemiddleImage", {autoAlpha: 0})
    .set("#aboutmerightImage", {autoAlpha: 0})
    .from("#aboutmepage", {width: 0, padding: 0, duration: 1, ease: "power4.out"})
    .from("#aboutmetitle", { autoAlpha: 0, duration: 1, }, "-=0.8")
    .from("#aboutmetext", { autoAlpha: 0, duration: 1, }, "-=0.85")
    .from("#aboutmemiddleImage", { autoAlpha: 0, scale: 0, duration: 1, ease: "power4.out" }, "-=0.85")
    .from("#aboutmeleftImage", { x:100, autoAlpha: 0, duration: 1, ease: "power4.out" }, "-=0.85")
    .from("#aboutmerightImage", { x:-100, autoAlpha: 0, duration: 1, ease: "power4.out" }, "-=0.85")


    return tl;
  }
}