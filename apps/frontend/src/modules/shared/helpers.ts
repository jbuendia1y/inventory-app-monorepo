export const toogleNav = () => {
  const aside = document.getElementById("main-aside");
  aside?.classList.toggle("transform");
  aside?.classList.toggle("translate-x-full");
};

export const formatDate = (date: string): string => {
  const _date = new Date(date).toJSON().split("T")[0];
  const [year, month, day] = _date.split("-");
  const withFormat = `${day}/${month}/${year}`;
  return withFormat;
};
