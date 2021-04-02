export const useReadingMinutesFromBlocks = (blocks) => {
  const allTheTextToBeCalculated = blocks
    .filter((block) => block.template === 'text-block')
    .reduce(
      (cumulatedText, block) => `${cumulatedText} ${block.title} ${block.content}`,
      '',
    );
  const readingMinutes = allTheTextToBeCalculated.split(' ').length / 180;
  const readingTimeText =
    readingMinutes < 1
      ? `${Math.floor(readingMinutes * 60)} seconds read.`
      : `${Math.floor(readingMinutes)} minutes read.`;
  return readingTimeText;
};
