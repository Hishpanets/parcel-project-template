
          // $( "read-more-btn" ).first().click(function() {
          //   $( "moreText" ).first().fadeToggle( "slow", "linear" );
          // });

      
// $("button").last().click(function () {
//   $( "p" ).last().fadeToggle( "fast", function() {
//     $( "#dots" ).append( "<div>finished</div>" );
//   });
// });

// function ShowHide() {
//     $('ab-dots').slideToggle();
//     if ($('read-more-btn').text() == "Less") {
//         $(this).text("Read more")
//     } else {
//         $(this).text("Less")
//     }
// };

// $('read-more-btn').click(function () {s
//     $('ab-dots').slideToggle();
//     if ($('read-more-btn').text() == "Less") {
//         $(this).text("Read more")
//     } else {
//         $(this).text("Less")
//     }
// }
// function myFunction() {
//   var x = document.getElementById("ab-dots");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };

//  aria-expanded="false"
//                 aria-controls="text-hidden"
//                 aria-label="Read-more"
//                 data-program__button

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
};