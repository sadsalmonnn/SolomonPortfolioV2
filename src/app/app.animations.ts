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
    masterTL.add(animateLandingPage(), 5);

    function animateLandingPage() {
        let tl = gsap.timeline({
            defaults: {
                ease: "power1.out"
            }
        });
        tl
        .set('#homedivider', {
            autoAlpha: 0,
            scaleX: 0,
        })

        .to("#homeTitle", {
            duration: 2,
            delay: 1,
            text: { value: "SOFTWARE<br>DEVELOPER", delimiter: "" }
        })

        .to("#homeTitle", {
            duration: 2,
            text: { value: "SOLOMON<br>A. DIONISIO", delimiter: "" }
        })

        .to('#homedivider', {
            autoAlpha: 1,
            scaleX: 1,
            transformOrigin: 'center'
        }, "-=1")

        return tl
    }


    function animateLoadingPage() {
        var tl = gsap.timeline();

        tl
        .set("#loadingscreen", { autoAlpha: 0 })

        .to("#loadingscreen", { autoAlpha: 1, duration: 4, ease: "power4.out" });

        .add(() => {})

        return tl;
    }


}