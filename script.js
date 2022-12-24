//task 1

// $(function () {
//   let url = $("#link").attr("href");

//   if (checkUrl(url) == true) {
//     $("#link").attr("target", "_blank");
//   }
// });
// function checkUrl(url) {
//   let regexp = url.match(/https/);
//   console.log(url);
//   if (regexp == "https") {
//     return true;
//   }
// }

//task 2

// $(document).ready(function () {
//   let head = $(".head");
//   let child = $("h2").children();
//   child.css({ fontSize: 35 });
//   head.css({ backgroundColor: "green" });
// });

//task 3

// $(function () {
//   $("div:contains('text1')").insertBefore("h3:contains('header1')");
//   $("div:contains('text2')").insertBefore("h3:contains('header2')");
// });

//task 4

// $("#myform :checkbox").change(function () {
//   let yourArray = [];
//   let sum = 0;
//   let i = 0;

//   i = 0;
//   $("input[type=checkbox]:checked").each(function () {
//     yourArray.push($(this).val());
//     i++;
//     if (i >= 3) {
//       $("input[type=checkbox]:checked").each(function () {
//         this.checked = false;
//       });
//     }
//   });
//   console.log(i);
// });
