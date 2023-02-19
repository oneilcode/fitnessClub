const toggleMenu = () => {
  const menuBtn = document.querySelector(".menu__mobile_btn");
  const menu = document.querySelector(".mobile");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  menu.addEventListener("click", (e) => {
    if (e.target.closest(".menu__mobile_btn") || !e.target.closest(".mobile")) {
      handleMenu();
    } else if (e.target.classList.contains("close-btn")) {
      handleMenu();
    } else if (e.target.matches("ul>li>a")) {
      handleMenu();
    }
  });
};

toggleMenu();