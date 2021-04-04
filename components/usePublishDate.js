import { DateTime } from 'luxon';

export const usePublishDate = (page) => {
  const publishDate = DateTime.fromISO(page.publish_date).toFormat(
    "'Published on 'dd'th of' LLL,yyyy",
  );
  return publishDate;
};
