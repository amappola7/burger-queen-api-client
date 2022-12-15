/* eslint-disable import/prefer-default-export */
const formatDate = () => {
  const initialDate = new Date().toLocaleString('es-ES');
  const separatedDate = initialDate.split(', ');
  const onlyHour = separatedDate[1];
  const onlyDate = separatedDate[0].split('/');

  return `${onlyDate[2]}-${onlyDate[1]}-${onlyDate[0]} ${onlyHour}`;
};

export { formatDate };
