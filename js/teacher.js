$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})
// var date_input=$('input[name="date"]'); //our date input has the name "date"
//       var container=$('.form-group').length>0 ? $('.form-group').parent() : "body";
//       var options={
//         format: 'mm/dd/yyyy',
//         container: container,
//         todayHighlight: true,
//         autoclose: true,
//       };
//       date_input.datepicker(options);
//       $('#demo').multiselect();

       
  $('#mydate').datepicker({
    todayHighlight: true,
     orientation: "bottom left",
     format: "mm/dd/yy",
    container: ".bdc"
    //container: console.log($(this).datepicker())
  });
  

 

      

});


const FormHide = document.querySelector("#newForm")
const BtnHide = document.querySelector("#hideBtn")
BtnHide.addEventListener("click", function(){
	FormHide.style.display="block";
})