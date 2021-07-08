export const toogleNav = () => {
  const aside = document.getElementById("main-aside");
  aside?.classList.toggle("transform");
  aside?.classList.toggle("translate-x-full");
};
