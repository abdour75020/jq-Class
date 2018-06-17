
$(document).ready(function(){
$("#bRouge").click(function(){
	 $(".circleBase").removeClass("blue2"); 
	 $(".circleBase").removeClass("blue3");
	 $(".circleBase").removeClass("blue4");
	 $(".circleBase").removeClass("blue5");
	 $(".circleBase").removeClass("blue6");
	 $(".circleBase").removeClass("blue7");
	 $(".carre").removeClass("red1"); // pourquoi autant de red ? //C'eetait parce que j'avais un bug kan je faisant en mode tout remplir !!

	 $(".carre").removeClass("red2");
	 $(".carre").removeClass("red3");
	 $(".carre").removeClass("red4");
	 $("#diamond").removeClass("purple2");
    $(".carre").addClass("red");
    $(".circleBase").addClass("blue");
    $(".diamond").addClass("purple");

});

$("#bJaune").click(function(){
	 $(".circleBase").removeClass("blue2");
    $(".carre").removeClass("red");
    $(".circleBase").removeClass("blue");
    $(".diamond").removeClass("purple");
    $(".circleBase").removeClass("blue3");
	 $(".circleBase").removeClass("blue4");
	 $(".circleBase").removeClass("blue5");
	 $(".circleBase").removeClass("blue6");
	 $(".circleBase").removeClass("blue7");
	 $(".carre").removeClass("red1");
	 $(".carre").removeClass("red2");
	 $(".carre").removeClass("red3");
	 $(".carre").removeClass("red4");
	 $(".diamond").removeClass("purple2");
});

$("#cercle1").click(function(){
	$("#cercle1").toggleClass("blue");
	
	
    
    

});

$("#cercle2").click(function(){
	$("#cercle2").toggleClass("blue");

	
});

$("#cercle3").click(function(){
	$("#cercle3").toggleClass("blue");
});

$("#cercle4").click(function(){
	$("#cercle4").toggleClass("blue");
});

$("#cercle5").click(function(){
	$("#cercle5").toggleClass("blue");
});

$("#cercle6").click(function(){
	$("#cercle6").toggleClass("blue");
});

$("#cercle7").click(function(){
	$("#cercle7").toggleClass("blue");
});

$("#cercle8").click(function(){
	$("#cercle8").toggleClass("blue");
});

$("#cercle9").click(function(){
	$("#cercle9").toggleClass("blue");
});

$("#cercle10").click(function(){
	$("#cercle10").toggleClass("blue");
});

$("#cercle11").click(function(){
	$("#cercle11").toggleClass("blue");
});

$("#cercle12").click(function(){
	$("#cercle12").toggleClass("blue");
});

$("#cercle13").click(function(){
	$("#cercle13").toggleClass("blue");
});

$("#cercle14").click(function(){
	$("#cercle14").toggleClass("blue");
});

$("#cercle15").click(function(){
	$("#cercle15").toggleClass("blue");
});

$("#cercle16").click(function(){
	$("#cercle16").toggleClass("blue");
});

$("#cercle17").click(function(){
	$("#cercle17").toggleClass("blue");
});

$("#cercle18").click(function(){
	$("#cercle18").toggleClass("blue");
});

$("#cercle19").click(function(){
	$("#cercle19").toggleClass("blue");
});

$("#cercle20").click(function(){
	$("#cercle20").toggleClass("blue");
});



$("#carre1").click(function(){

     $("#carre1").removeClass("red");
	$(".alinea1").removeClass("blue");
    $("#carre1").toggleClass("red1");
	
	$(".alinea1").toggleClass("blue2");




});

$("#carre2").click(function(){
    $("#carre2").removeClass("red");
	$(".alinea2").removeClass("blue");
    $("#carre2").toggleClass("red2");
	
	$(".alinea2").toggleClass("blue3");




});

$(".diamond").click(function(){

    $(".diamond").removeClass("purple");
	$(".alinea3").removeClass("blue");
	

    $(".diamond").toggleClass("purple2");
	
	$(".alinea3").toggleClass("blue4");




});

$("#carre3").click(function(){
    
     $("#carre3").removeClass("red");
	$(".alinea4").removeClass("blue");
    $("#carre3").toggleClass("red3");
	
	$(".alinea4").toggleClass("blue5");





});

$("#carre4").click(function(){
	$("#carre4").removeClass("red");

	$(".alinea5").removeClass("blue");

    $("#carre4").toggleClass("red4");
	
	$(".alinea5").toggleClass("blue6");




});

});