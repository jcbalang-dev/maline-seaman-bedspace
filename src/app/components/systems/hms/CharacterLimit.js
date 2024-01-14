const getCharacterLimit = (id) => {
  switch (id.toUpperCase()) {
    case "PASSPORT":
      return 9;
    case "DRIVERS LICENSE":
      return 13;
    case "UMID":
      return 14;
    case "SSS":
      return 12;
    case "PRC":
      return 8;
    default:
      return null;
  }
};

export default getCharacterLimit;
