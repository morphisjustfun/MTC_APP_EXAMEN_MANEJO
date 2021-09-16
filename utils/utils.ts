export const getConvertedDate = (date : Date) => {
   const seconds = date.getSeconds();
   const minutes = date.getMinutes();
   const hours = date.getHours();
   return `${hours}:${minutes}:${seconds}`;
}
