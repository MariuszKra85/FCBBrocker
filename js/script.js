const initialfun = () => {
  addViewPosition();
  menuHandler();
};

const addViewPosition = () => {
  document.addEventListener("scroll", () => {
    let pos = window.scrollY;
    const topbar = document.querySelector(".topBar");
    const arrow = document.querySelector("#header-arrow");
    const arrowLink = document.querySelector("#arrowLink");

    if (pos > 10) {
      console.log(topbar);
      topbar.classList.add("fixed");
      arrow.classList.add("header-arrow-up");
      arrowLink.href = "#top";
    } else {
      topbar.classList.remove("fixed");
      arrow.classList.remove("header-arrow-up");
      arrowLink.href = "#main";
    }
  });
};

const menuHandler = () => {
  const menuBtn = document.querySelector("#hamburger");
  const menu = document.querySelector("#nav-list");
  console.log(menuBtn);
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
};

initialfun();
