export const slugify = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export const deslugify = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
