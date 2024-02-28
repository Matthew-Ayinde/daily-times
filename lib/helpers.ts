import moment from "moment";

export const slugify = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export const deslugify = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatDate = (dateString: string): string => {
  const now = moment();
  const targetDate = moment(dateString);
  const diffSeconds = now.diff(targetDate, "seconds");

  if (diffSeconds < 60) {
    return "Just now";
  } else if (diffSeconds < 3600) {
    const diffMinutes = Math.floor(diffSeconds / 60);

    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  } else if (diffSeconds < 86400) {
    const diffHours = Math.floor(diffSeconds / 3600);

    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  } else {
    return targetDate.format("DD MMM YYYY");
  }
};

export const calculateReadingTime = (articleContent: string): number => {
  const wordCount = articleContent.trim().split(/\s+/).length;

  const wordsPerMinute = 180;

  const readingTimeInMinutes = Math.ceil(wordCount / wordsPerMinute);

  return readingTimeInMinutes;
};
