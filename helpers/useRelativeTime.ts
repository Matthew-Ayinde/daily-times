import { useEffect, useState } from "react";
import moment from "moment";

const useRelativeTime = (dateString: string): string => {
  const [relativeTime, setRelativeTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const date = moment(dateString);
      const diffSeconds = now.diff(date, "seconds");
      
      if (diffSeconds < 60) {
        setRelativeTime("just now");
      } else if (diffSeconds < 3600) {
        const diffMinutes = Math.floor(diffSeconds / 60);
        setRelativeTime(`${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`);
      } else if (diffSeconds < 86400) {
        const diffHours = Math.floor(diffSeconds / 3600);
        setRelativeTime(`${diffHours} hour${diffHours > 1 ? "s" : ""} ago`);
      } else {
        setRelativeTime(date.format("HH:mm, DD MMMM YYYY [GMT]"));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dateString]);

  return relativeTime;
};

export default useRelativeTime;
