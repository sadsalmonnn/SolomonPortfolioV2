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

  
  masterTL.add(animateLoadingPage());

  // Then show homepage after loading is complete
    masterTL.add(animateLandingPage());

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
      })
      .to("#homeTitle", {
        duration: 2,
        text: { value: "SOLOMON<br>A. DIONISIO", delimiter: "" },
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

  function animateLoadingPage() {
    let tl = gsap.timeline();

    tl.set("#loadingscreen", { autoAlpha: 0 })
      .to("#loadingscreen", { autoAlpha: 1, duration: 1, ease: "power4.out" })
      .to("#loadingscreen", {
        autoAlpha: 0,
        duration: 4,
        delay: 1.5,
        ease: "power4.out",
      }).add(() => {
        const el = document.getElementById("loadingscreen");
        if (el) el.classList.add("hidden");
        const el1 = document.getElementById("appwrap")
        if (el1) el1.classList.remove("max-h-dvh")
    });

    return tl;
  }
}