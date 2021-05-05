export const dateSringToDate = (dateSring: string): Date => {
  const dateParts = dateSring.split('/').map((value: string): number => {
    return parseInt(value); // turn string into number
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
