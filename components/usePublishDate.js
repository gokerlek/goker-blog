import { DateTime } from 'luxon';

export const usePublishDate = (page) => {
  const day = DateTime.fromISO(page.publish_date).setLocale('en-US').day;
  const month = DateTime.fromISO(page.publish_date).setLocale('en-US').monthShort;
  const year = DateTime.fromISO(page.publish_date).setLocale('en-US').year;
  const publishDate = `Published on ${day}th of ${month}, ${year}`;
  return publishDate;
};
