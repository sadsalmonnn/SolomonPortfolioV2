import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
  ScrambleTextPlugin,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  TextPlugin
);

export function webpageAnimation() {
  window.addEventListener("load", () => {
    animationExperiencePage();
    animateExpTimeline();
    // animateAboutPage();
    animateProjectsPage();
    animateContactPage();

    gsap.to(".testing", {
      scale: 300,

      scrollTrigger: {
        trigger: ".homecontainer",
        scrub: 1,
        pin: true,
        start: "top top",
        // end: "bottom top+=65%",
        // ease: "none",
      }
    })


    gsap.to(".homesubititlecontent", {
      opacity: 0,

      scrollTrigger: {
        trigger: ".homepage",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom top+=65%",
        // ease: "none",
      }
    })

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
        // .set("#homedivider", { autoAlpha: 0, scaleX: 0 })
        .to("#homepage", { autoAlpha: 1, duration: 1 })
        // .from("#viewworkbuttonwhole", { autoAlpha: 0, y: -50, duration: 1, ease: "power4.out" })
        .to(
          "#homeTitle1",
          { duration: 1, text: { value: "SOFTWARE", delimiter: "" }, delay: "-=2" },
          "-=0.4"
        )
        .to(
          "#homeTitle2",
          { duration: 1, text: { value: "DEVELOPER", delimiter: "" }, delay: "-=2" },
          "-=0.4"
        )
        .to("#homeTitle1", { duration: 1, text: { value: "SOLOMON JAMES", delimiter: "" }, delay: "-=2" })
        .to("#homeTitle2", { duration: 1, text: { value: "ADOR-DIONISIO", delimiter: "" }, delay: "-=2" })
        // .from(
        //   "#homedivider",
        //   { autoAlpha: 0, scaleX: 0, height: 0, transformOrigin: "center" },
        //   "-=1"
        // )
        .to("#navbar", { autoAlpha: 1, duration: 1 }, "-=0.5");
        // .to("navbar", { autoAlpha: 1 });

      return tl;
    }

    function removeanimateLoadingPage() {
      const tl = gsap.timeline();

      tl.to("#loadingscreen", { autoAlpha: 1, duration: 1 })
        .to("#loadingscreen", { autoAlpha: 0, duration: 1.5, delay: 1, ease: "power2.out" })
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
          start: "top bottom",
          end: "bottom top",
          once: true,
        },
      });

      tl.from("#aboutmetitle", { autoAlpha: 0, x: -100, duration: 2, ease: "power4.out" })
        .from("#aboutmeblueblock", { width: 0, duration: 1, ease: "power4.out" }, "<")
        .from("#aboutmegreyblock", { delay: "-=0.8", width: 0, duration: 1, ease: "power4.out" }, "<")
        .from("#aboutmetext", { y: -100, autoAlpha: 0, duration: 2, ease: "power4.out" }, "-=1.6")
        .from("#aboutmeimg", { opacity: 0, y: -100, duration: 1, ease: "easeInOut" }, "-=1.8");

      return tl;
    }

    function animationExperiencePage() {
      gsap.from("#exptitle", {
        scrollTrigger: {
          trigger: "#exptitle",
          start: "top bottom-=15%",
          toggleActions: "play none none none",
        },
        autoAlpha: 0,
        x: -100,
        duration: 1,
        ease: "power4.out",
      });

      // gsap.from("#expblueblock", {
      //   scrollTrigger: {
      //     trigger: "#exptitle",
      //     start: "top bottom-=15%",
      //     toggleActions: "play none none none",
      //   },
      //   width: 0,
      //   duration: 1,
      //   ease: "power4.out",
      // });

      // gsap.from("#expgreyblock", {
      //   scrollTrigger: {
      //     trigger: "#exptitle",
      //     start: "top bottom-=15%",
      //     toggleActions: "play none none none",
      //   },
      //   delay: "-=0.8",
      //   width: 0,
      //   duration: 1,
      //   ease: "power4.out",
      // });
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
          },
        });

        tl.from(el, { scaleY: 0, transformOrigin: "top center", duration: 1, ease: "power2.out" })
          .from(content[index], { autoAlpha: 0.2, duration: 1, ease: "power2.out" }, "<");
      });
    }

    function animateProjectsPage() {
      gsap.from("#projtitle", {
        scrollTrigger: { trigger: "#projtitle", start: "top 80%", toggleActions: "play none none none" },
        autoAlpha: 0,
        x: -100,
        duration: 1,
        ease: "power4.out",
      });

      let tl = gsap.timeline({
        scrollTrigger: { trigger: "#projtitle", start: "top 80%", toggleActions: "play none none none" },
      });

      // tl.from("#projblueblock", { width: "0px", duration: 1, ease: "power4.out" })
      //   .from("#projgreyblock", { width: "0px", duration: 1, ease: "power4.out" }, "-=0.8");

      const content = document.getElementsByClassName("projectcontainer");

      for (const element of content) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=20%",
            end: "bottom+=20% top",
            once: true,
          },
        });

        tl.from(element, { autoAlpha: 0.2, duration: 1, ease: "power2.out" }, "<");
      }
    }

    function animateContactPage() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contactcircleimg",
          start: "top bottom",
          end: "bottom+=20% top",
          toggleActions: "play none none none",
        },
      });

      tl.from("#contactcircleimg", { autoAlpha: 0, duration: 2, ease: "power4.out" })
        .to("#contacttext", { text: "Let's work together!", duration: 1.5, ease: "none" }, "<")
        .from("#contactemail", { autoAlpha: 0, duration: 1, y: 50, ease: "power4.out" }, "-=1");

      let iconIds = ["instaicon", "linklednicon", "discordicon", "githubicon", "resumebutton"];
      iconIds.forEach((id) => {
        tl.from(`#${id}`, { autoAlpha: 0, duration: 1, y: 50, ease: "power4.out" }, "-=0.8");
      });
    }
  });
}
