const validIDFormat = (inputVal, selectedIDTypes) => {
  if (inputVal) {
    const cleanedVal = inputVal.replace(/[-\s]/g, "");

    let formattedVal;
    selectedIDTypes.forEach((idType) => {
      switch (idType.toLowerCase()) {
        case "passport":
          formattedVal = cleanedVal;
          break;
        case "drivers license":
          formattedVal = cleanedVal
            .replace(/(.{1,3})(.{1,2})(.{1,1})/, "$1-$2-$3")
            .toUpperCase();
          break;
        case "umid":
          formattedVal = cleanedVal
            .replace(/(.{1,4})(.{1,7})(.{1,1})/, "$1-$2-$3")
            .toUpperCase();
          break;
        case "sss":
          formattedVal = `${cleanedVal.substring(0, 2)}-${cleanedVal.substring(
            2,
            9
          )}-${cleanedVal.substring(9, 10)}`;
          break;
        case "prc":
          formattedVal = cleanedVal.toUpperCase();
          break;
        default:
          formattedVal = cleanedVal;
          break;
      }
    });

    return formattedVal;
  }

  return inputVal;
};

export default validIDFormat;
