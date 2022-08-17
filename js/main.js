// jQuery for Slider
$(document).ready(function(){
		var slider = $(".owl-carousel");
				slider.owlCarousel({
				loop:true,
				nav:true,
				items:1,
				dots:false,
				autoPlayTimeOut:500,
				autoplay:true,
				navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]

			});

			slider.on("changed.owl.carousel", function(event){
				var item = event.item.index-2;
				$("h3").removeClass("animated animate__fadeInUp");
				$(".owl-item").not(".cloned").eq(item).find("h3").addClass("animated animate__fadeInUp");

				$(".item").removeClass("animated animate__fadeIn");
				$(".owl-item").not(".cloned").eq(item).find(".item").addClass("animated animate__fadeIn");

				$("span").removeClass("animated animate__zoomIn");
				$(".owl-item").not(".cloned").eq(item).find("span").addClass("animated animate__zoomIn");				
			});

		});

//en jQuery for slider