export interface IAffiliatedLinks {
  link: string;
  url: string;
}

export const navLinks: IAffiliatedLinks[] = [
  {
    link: "News",
    url: "news",
  },
  {
    link: "Videos",
    url: "videos",
  },
  {
    link: "Entertainment",
    url: "entertainment",
  },
  {
    link: "Categories",
    url: "categories",
  },
];

export interface ILinks {
  name: string;
  url: string;
  imgSrc: string;
}

export const links: ILinks[] = [
  {
    name: "website-link",
    url: "www.example.com",
    imgSrc: "/svg/link-black.svg",
  },
  {
    name: "linkedIn",
    url: "www.linkedin.com",
    imgSrc: "/svg/linkedIn-black.svg",
  },
  {
    name: "twitter",
    url: "www.twitter.com",
    imgSrc: "/svg/twitter-black.svg",
  },
  {
    name: "facebook",
    url: "www.facebook.com",
    imgSrc: "/svg/facebook-black.svg",
  },
];
