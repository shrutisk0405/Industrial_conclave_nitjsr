// without jQuery
//   document.addEventListener("DOMContentLoaded", function (options) {
//     var elems = document.querySelectorAll(".sidenav");
//     var instances = M.Sidenav.init(elems, options);
//   });

// with jQuery
$(document).ready(function () {
              $(".sidenav").sidenav();
          
              $('.carousel').carousel();
              autoplay();
              function autoplay() {
                  $(".carousel").carousel("next");
                  setTimeout(autoplay, 4000);
              }
          
              $(".fixed-action-btn").floatingActionButton();
          
              $(".scrollspy").scrollSpy();
          
              $('input#text, textarea#textarea1').characterCounter();
          
              $('.datepicker').datepicker();
          
              $('.modal').modal();
          });
          
          
          