


$("ul#menu li:has(ul)").prepend('<span class="down"></span>');
        $(".toggle-icon").click(function() {
                //$(this).toggleClass("close");
	                $("#menu").fadeToggle();
        });
            
		function apperMenu(){

			var windowWidth = $(window).width();
			console.log(windowWidth);
			 if (windowWidth > 768) {	
			 	$('ul#menu li span.down').unbind();				 	
			 	$('ul#menu li').children('span').removeClass('up');
			 	$('ul#menu li').children('span').addClass('down');
			 		$("#menu").show();	
			 		$('ul#menu li ul').hide();            
		            $('ul#menu li').hover(function() {
		                $(this).children('ul').delay(20).fadeIn(200);
		            }, function() {
		                $(this).children('ul').delay(20).fadeOut(200);
		            });
		    } else{ 
		    		$('ul#menu li span.down').unbind();		    		
		    		$(".toggle-icon").removeClass("close");
		    		$("#menu").hide();
		    		$('ul#menu li').unbind();
		            $('ul#menu li span.down').click(function() {
		                $(this).toggleClass('up');
		                //alert("hi");
		                $(this).siblings('ul').delay(20).slideToggle(200);
		                $(this).parents('li').siblings('li').children('ul').slideUp();
		                $(this).siblings('ul').children('li').children('ul').slideUp();
		                $(this).parents('li').siblings('li').children('span').removeClass('up');
		                $(this).siblings('ul').children('li').children('span').removeClass('up');
		        });
		    }
		}

		$(window).on('load', function(){
		   apperMenu();
		  
		});

		$(window).resize(function() {	
		    apperMenu();
		});





// $('.roundTrip span').click(function(){
// 	console.log('hi')
// 	$(this).css({backgroundColor: 'red'});
// });

$(".roundTrip span").click(function(){
	console.log('hi')
});
	



// mobiscroll.settings = {
//     theme: 'ios',
//     themeVariant: 'light'
// };

// mobiscroll.range('#demo', {
//     startInput: '#start',
//     endInput: '#end'
// });


// mobiscroll.range('#demo-non-form', {
//     showSelector: false
// });

// var now = new Date(),
//     week = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6, 23, 59)];

// var instance = mobiscroll.range('#demo-external', {
//     showOnTap: false,
//     showOnFocus: false,
//     showSelector: false,
//     onInit: function (event, inst) {
//         inst.setVal(week, true);
//     }
// });

// document
//     .getElementById('show')
//     .addEventListener('click', function () {
//         instance.show();
//     }, false);