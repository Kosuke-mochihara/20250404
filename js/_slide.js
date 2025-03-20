import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export function slide() {
  if (document.querySelector(".splide01")) {
    new Splide(".splide01", {
      perPage: 3,
      type: "loop",
      focus: 0,
      arrows: false,
      pagination: false,
      drag: false,
      swipe: false,
      // fixedWidth: 'min(640px, calc(640 / 1440 * 100vw))',
      fixedWidth: 'calc(640 / 1440 * 100vw)',
      autoScroll: {
        speed: 0.5,
        pauseOnHover: false,
        pauseOnFocus: false
      },
      breakpoints: {
        768: {
          perPage: 1,
          fixedWidth: 'min(221px, calc(221 / 375 * 100vw))',
          autoScroll: {
            speed: 0.3,
            pauseOnHover: false
          }
        }
      }
    }).mount({ AutoScroll });
  }

  if (document.querySelector(".splide02")) {
    new Splide(".splide02", {
      type: "loop",
      perPage: 2,
      perMove: 1,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      arrows: false,
      pagination: true,
      focus: 0,
      fixedWidth: 'calc(416 / 1440 * 100vw)',
      gap: 'calc(40 / 1440 * 100vw)',
      breakpoints: {
        768: {
          fixedWidth: 'calc(200 / 375 * 100vw)',
          gap: 'min(20px, calc(13 / 375 * 100vw))',
          focus: 'center'
        }
      }
    }).mount();
  }

  if (document.querySelector(".splide03")) {
    new Splide(".splide03", {
      perPage: 3,
      type: "loop",
      focus: 0,
      arrows: false,
      pagination: false,
      drag: false,
      swipe: false,
      // fixedWidth: 'min(640px, calc(640 / 1440 * 100vw))',
      fixedWidth: 'calc(640 / 1440 * 100vw)',
      autoScroll: {
        speed: 0.5,
        pauseOnHover: false,
        pauseOnFocus: false
      },
      breakpoints: {
        768: {
          perPage: 1,
          fixedWidth: 'min(221px, calc(221 / 375 * 100vw))',
          autoScroll: {
            speed: 0.3,
            pauseOnHover: false
          }
        }
      }
    }).mount({ AutoScroll });
  }


  if (document.querySelector(".splide04")) {
    new Splide(".splide04", {
      type: "loop",
      perPage: 2,
      perMove: 1,
      // autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      arrows: false,
      pagination: true,
      focus: 0,
      fixedWidth: 'calc(416 / 1440 * 100vw)',
      gap: 'calc(40 / 1440 * 100vw)',
      breakpoints: {
        768: {
          fixedWidth: 'calc(200 / 375 * 100vw)',
          gap: 'min(20px, calc(13 / 375 * 100vw))',
          focus: 'center'
        }
      }
    }).mount();
  }

}
