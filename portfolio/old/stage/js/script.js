$(document).ready(function(){
    var open = 0;

	$('html,body').animate({scrollLeft : '0'}, 'slow');
    $('html,body').animate({scrollTop : '0'}, 'normal');

	$('.frame1').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup1').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame2').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup2').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame3').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup3').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame4').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup4').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame5').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup5').fadeIn('normal');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame6').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup6').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame7').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup7').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame8').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup8').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame9').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup9').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame10').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup10').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame11').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup11').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame12').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup12').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame13').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup13').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame14').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup14').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('.frame16').click(function(){
        if(open == 0){
            open++;

		    $('#close,.popup16').fadeIn('slow');

		    $('html,body').animate({scrollLeft : '698px'}, 'slow');
            $('html,body').animate({scrollTop : '0'}, 'normal');
        }
	});

	$('#close').click(function(){
        open--;

		$('#close').fadeOut('slow');

		$('.popup1,.popup2,.popup3,.popup4,.popup5,.popup6,.popup7,.popup8,.popup9,.popup10,.popup11,.popup12,.popup13,.popup14,.popup16').fadeOut(1000);

		$('html,body').animate({scrollLeft : '0'}, 'slow');
		$('html,body').animate({scrollTop : '0'}, 'normal');
	});

    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
 
    function parallaxScroll(){
        var scrolledY = $(window).scrollTop();

		$('header').css('background-position', 'center -'+((scrolledY*0.1))+'px');
    }

	/*$('.bg').click(function(){
        $('#contento').fadeIn('fast').delay(7000).fadeOut('fast');
	});

	$('.bg1').click(function(){
        $('.arrow').css("left", "8px");
	});

	$('.bg2').click(function(){
        $('.arrow').css("left", "109px");
	});*/

	$('.bg3').click(function(){
        /*$('.arrow').css("left", "210px");*/
        alert("Klik op de plaatjes voor een beschrijving van de asset, klik op de 'part 1/2/3' knoppen om hoofdstukken te openen. Ik ben van plan voor mijn volgende stage verslag deze website uit te breiden en nieuwe hoofstukken en assets toe te voegen.");
	});

});


