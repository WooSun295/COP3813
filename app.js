$(".flip-card").click(function () {
   let clicked = this.classList[2];
   if (clicked == 1) location.href = "./p1/index.html";
   else if (clicked == 2) location.href = "./p2/index.html";
   else if (clicked == 3) location.href = "./p3/index.html";
   else location.href = "./p4/index.html";
});

$(".flip-card-inner").hover(
   function () {
      $(this).css("transform", "rotateY(180deg)");
   },
   function () {
      $(this).css("transform", "rotateY(0deg)");
   }
);
