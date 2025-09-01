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

  window.addEventListener("load", () => {

    
  animationExperiencePage();
  animateExpTimeline();
  animateAboutPage();
  animateProjectsPage();
  animateContactPage()
  
  let masterTL = gsap.timeline();


  // Animate loading screen
  masterTL.add(removeanimateLoadingPage());
  
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
      .from("#viewworkbuttonwhole", {autoAlpha: 0, y: -50, duration: 1, ease: "power4.out"})
        .to("#navbar", {autoAlpha: 1}, "-=0.8")
      .to("#homeTitle", {
        duration: 2,
        text: { value: "SOFTWARE<br>DEVELOPER", delimiter: "" },
        delay: "-=2"
      },"-=0.4")
      .to("#homeTitle", {
        duration: 2,
        text: { value: "SOLOMON<br>ADOR DIONISIO", delimiter: "" },
        delay: "-=2"
      })
      .from(
        "#homedivider",
        {
          autoAlpha: 0,
          scaleX: 0,
          height: 0,
          transformOrigin: "center",
        },
        "-=1"
      ).to("navbar", {
        autoAlpha: 1,})

    return tl;
  }


// function animateLandingPage() {
//   let tl = gsap.timeline({
//     defaults: { ease: "power1.out" }
//   });

//   tl
//     // Hide elements initially
//     .set("#homedivider", { autoAlpha: 0, scaleX: 0, height: 0 })
//     .set("#homeLeft", { autoAlpha: 0 })
//     .set("#homeTitle", { autoAlpha: 0, text: "" })
//     .set("#navbar", { autoAlpha: 0 })

//     // Show homepage background
//     .to("#homepage", { autoAlpha: 1, duration: 1 })

//     // Show the navbar and button
//     .from("#viewworkbuttonwhole", {
//       autoAlpha: 0,
//       y: -50,
//       duration: 1,
//       ease: "power4.out"
//     }, "<")
//     .to("#navbar", { autoAlpha: 1 }, "-=0.8")

//     // Fade in the title before typing
//     .to("#homeTitle", { autoAlpha: 1, duration: 0.3 })

//     // Start typing after title is fully visible
//     .to("#homeTitle", {
//       duration: 2,
//       text: { value: "SOFTWARE<br>DEVELOPER", delimiter: "" }
//     }, "+=0.2")
//     .to("#homeTitle", {
//       duration: 2,
//       text: { value: "SOLOMON<br>A. DIONISIO", delimiter: "" }
//     }, "-=1.5")

//     // Animate the divider
//     .to("#homedivider", {
//       autoAlpha: 1,
//       scaleX: 1,
//       height: "100%",
//       transformOrigin: "center",
//       duration: 1
//     }, "-=1")

//     // Reveal left panel
//     .to("#homeLeft", {
//       autoAlpha: 1,
//       duration: 0.5,
//       onStart: () => {
//         document.getElementById("homeLeft")?.classList.remove("opacity-0");
//       }
//     }, "<");

//   return tl;
// }

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
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutmepage",
        // markers: true,
        start: "top bottom",
        end: "bottom top",
        once: true
        // scrub: true // uncomment if you want scrub later
      }
    });

    tl.from("#aboutmetitle", {
        autoAlpha: 0,
        x: -100,
        duration: 2,
        ease: "power4.out"
      })
      .from("#aboutmeblueblock", {
        width: 0,
        duration: 1,
        ease: "power4.out"
      }, "<")
      .from("#aboutmegreyblock", {
        delay: "-=0.8",
        width: 0,
        duration: 1,
        ease: "power4.out"
      }, "<")

      .from("#aboutmetext", {
        y: -100,
        autoAlpha: 0,
        duration: 2,
        ease: "power4.out"
      }, "-=1.6")

      .from("#aboutmeimg", {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "easeInOut"
      }, "-=1.8");

    return tl;
  }


  function animationExperiencePage() {
    
    gsap.from("#exptitle", {
      scrollTrigger: {
          trigger: "#exptitle",
          start: "top bottom-=15%", // adjust as needed
          toggleActions: "play none none none", // plays once
          // markers: true
      },
      autoAlpha: 0,
      x: -100,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from("#expblueblock", {
      scrollTrigger: {
          trigger: "#exptitle",
          start: "top bottom-=15%", // adjust as needed
          toggleActions: "play none none none", // plays once
          // markers: true
      },
      width: 0,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from("#expgreyblock", {
      scrollTrigger: {
          trigger: "#exptitle",
          start: "top bottom-=15%", // adjust as needed
          toggleActions: "play none none none", // plays once
          // markers: true
      },
      delay: "-=0.8",
      width: 0,
      duration: 1,
      ease: "power4.out"
    });
  }

  function animateExpTimeline() {
    const hrs = document.querySelectorAll(".hrexp");
    const content = document.getElementsByClassName("expcontentsection");

    hrs.forEach((el, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top bottom-=15%",
                end: "bottom+=20% top",
                once: true,
                // markers: true,
            }
        });

        tl.from(el, {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 1,
            ease: "power2.out",
        }).from(content[index], {
            autoAlpha: 0.2,
            duration: 1,
            ease: "power2.out",
        }, "<"); // "<" means it starts at the same time as the previous animation
    });
  }

  function animateProjectsPage() {
    gsap.from("#projtitle", {
      scrollTrigger: {
        trigger: "#projtitle",
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true
      },
      autoAlpha: 0,
      x: -100,
      duration: 1,
      ease: "power4.out"
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projtitle",
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true
      }
    });

    tl.from("#projblueblock", {
      width: "0px",
      duration: 1,
      ease: "power4.out"
    }).from("#projgreyblock", {
      width: "0px",
      duration: 1,
      ease: "power4.out"
    }, "-=0.8"); // overlap by 0.8s

const content = document.getElementsByClassName("projectcontainer");

    for (const element of content) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
          end: "bottom+=20% top",
          once: true,
          // markers: true,
        }
      });

      tl
      .from(element, {
            autoAlpha: 0.2,
            duration: 1,
            ease: "power2.out",
        }, "<");
    }
  }

  function animateContactPage() {

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contactcircleimg",
        start: "top bottom",
        end: "bottom+=20% top",
        toggleActions: "play none none none",
        // markers: true
      }
    });

    tl
    .from("#contactcircleimg", {
      autoAlpha: 0,
      duration: 2,
      ease: "power4.out"
    })
    .to("#contacttext", {
      text: "Let's work together!",
      duration: 1.5,
      ease: "none",
    }, "<")
    .from("#contactemail", {
      autoAlpha: 0,
      duration: 1,
      y: 50,
      ease: "power4.out",
    }, "-=1");

    let iconIds = ["instaicon", "linklednicon", "discordicon", "githubicon", "resumebutton"];
    iconIds.forEach((id) => {
      tl.from(`#${id}`, {
        autoAlpha: 0,
        duration: 1,
        y: 50,
        ease: "power4.out",
      }, "-=0.8");
    });
  }
  });

}