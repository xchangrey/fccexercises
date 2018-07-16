//JavaScript Algorithms and Data Structures Projects: Telephone Number Validator

function telephoneCheck(str) {
  const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
  let isTelNum = regex.test(str);
  return isTelNum;
}

telephoneCheck("555-555-5555");