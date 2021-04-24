import { DateTime } from 'luxon';

export const usePublishDate = (publishDateData) => {
  const publishDate = DateTime.fromISO(publishDateData).toFormat(
    "'Published on 'dd'th of' LLL,yyyy",
  );
  return publishDate;
};
