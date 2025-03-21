import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export function animation() {

  // フェードインアニメーション
  const fadeInElements = document.querySelectorAll(".js-fade-in");
  fadeInElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element, // トリガーとなる要素を指定
          start: "top 80%", // スクロール開始位置を指定
          //markers: true,
        },
      }
    );
  });

  const fadeInLeftElements = document.querySelectorAll(".js-fade-in-left");
  fadeInLeftElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element, // トリガーとなる要素を指定
          start: "top 80%", // スクロール開始位置を指定
          //markers: true,
        },
      }
    );
  });

  const fadeInRightElements = document.querySelectorAll(".js-fade-in-right");
  fadeInRightElements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element, // トリガーとなる要素を指定
          start: "top 70%", // スクロール開始位置を指定
          //markers: true,
        },
      }
    );
  });
}
