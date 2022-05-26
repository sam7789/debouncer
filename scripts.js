const callback = () => {
  console.log("APi debounce in progress");
};

const debounce = (func, delay) => {
  let debouncing;
  return function () {
    clearTimeout(debouncing);
    debouncing = setTimeout(() => func.apply(this, arguments), delay);
  };
};

window.addEventListener("load", function () {
  var btn = document.getElementById("click");
  btn.addEventListener("click", debounce(callback, 2000));
});
