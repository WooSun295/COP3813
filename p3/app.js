const input = document.getElementById("input");
const submit = document.querySelector("button");
const results = document.getElementById("results");

submit.addEventListener("click", function (e) {
   e.preventDefault();
   const nums = input.value.split(", ").map((x) => Number(x));

   if (checkError(nums)) {
      alert(`Enter Only Numbers Separated by ", " (comma and space)`);
      input.value = "";
      return;
   }

   orderArr(nums);
   updateValues(nums);
   results.classList.remove("hidden");
   input.value = "";
   console.log(nums);
});

function checkError(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
         return true;
      }
   }
}

function orderArr(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (arr[j] > arr[i]) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
         }
      }
   }
}

function updateValues(arr) {
   const max = document.getElementById("max");
   const min = document.getElementById("min");
   const mean = document.getElementById("mean");
   const median = document.getElementById("median");
   const range = document.getElementById("range");

   let meanValue = 0;
   let medianIndex = arr.length / 2;

   max.innerHTML = arr[arr.length - 1];
   min.innerHTML = arr[0];
   range.innerHTML = arr[arr.length - 1] - arr[0];

   for (let i = 0; i < arr.length; i++) {
      meanValue += arr[i];
      console.log(meanValue);
   }
   mean.innerHTML = (meanValue / arr.length).toFixed(2);

   if (arr.length % 2 !== 0) {
      medianIndex = Math.floor(arr.length / 2);
   }

   median.innerHTML = arr[medianIndex];
}
