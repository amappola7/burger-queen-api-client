/* eslint-disable import/prefer-default-export */
const formatDate = () => {
  const initialDate = new Date().toLocaleString('es-ES');
  const separatedDate = initialDate.split(', ');
  const onlyHour = separatedDate[1];
  const onlyDate = separatedDate[0].split('/');

  return `${onlyDate[2]}-${onlyDate[1]}-${onlyDate[0]} ${onlyHour}`;
};

const preparationTime = (dateEntry, dateProcessed) => {
  const entry = new Date(dateEntry);
  const processed = new Date(dateProcessed);
  const preparation = (processed - entry) / 1000 / 60;

  if (preparation > 60) {
    const hour = Math.floor(preparation / 60);
    const minutes = Math.floor(preparation - hour * 60);
    return `${hour} hrs. y ${minutes} mins.`;
  }

  return `${preparation} mins.`;
};

export { formatDate, preparationTime };
