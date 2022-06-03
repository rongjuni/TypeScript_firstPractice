console.log("working?");

const checkAnagramT = (arg1, arg2) => {
  let arg1Arrange = arg1
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
  let arg2Arrange = arg2
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

  console.log(arg1Arrange, arg2Arrange);

  if (arg1Arrange === arg2Arrange) {
    return true;
  } else {
    return false;
  }
};

console.log(checkAnagramT("elvis", "lives"));
