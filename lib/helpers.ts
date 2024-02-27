import { IArticle } from "@/types/articles";

export const slugify = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export const deslugify = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const filterByCategory = (array: IArticle[], categoryName: string) => {
  return array.filter(
    (item) => item.attributes.category.data.attributes.name === categoryName
  );
};

export const filterByTag = (array: IArticle[], tagName: string) => {
  return array.filter((item) => {
    return item.attributes.tags.data.some(
      (tag) => tag.attributes.name === tagName
    );
  });
};
