let $cels = $("#cels");
let $fahr = $("#fahr");
let $celsLabel = $("#celsLabel");
let $fahrLabel = $("#fahrLabel");

$("#convertBtn").click(function () {
   // Determine which field has a number and convert the number
   if ($.isNumeric($cels.val())) {
      let fahr = ($cels.val() * 9) / 5 + 32;
      $fahr.val(fahr);
   } else if ($.isNumeric($fahr.val())) {
      let cels = (($fahr.val() - 32) * 5) / 9;
      $cels.val(cels);
   }
});

// Add focus and blur callbacks here
$("input").focus(function () {
   $(this).siblings().toggleClass("selected");
});
$("input").blur(function () {
   $(this).siblings().toggleClass("selected");
});

// Add keyup callbacks here
$("input").focus(function () {
   $(this).keypress(function () {
      if (!$.isNumeric($(this).val())) {
         $(this).addClass("error");
      } else {
         $(this).removeClass("error");
      }
      if ($(this).is("#cels")) {
         $fahr.val("");
      } else {
         $cels.val("");
      }
   });
});
