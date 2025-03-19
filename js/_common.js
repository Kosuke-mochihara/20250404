export function common() {
  const header = document.getElementById("js-header");

  if (!header) return; // 要素が存在しない場合は処理を終了

  const headerScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1 && window.innerWidth > 768) {
        header.classList.add("is-scroll");
      } else {
        header.classList.remove("is-scroll");
      }
    });
  };

  headerScroll();
}