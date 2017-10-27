$(".header_bottom li").on("click",function(){
		var index = $(this).index() * 1;

	$(".header_bottom li").eq(index).addClass("select").siblings().removeClass("select");
		
		
		navchange(index)
	
	})



$(window).scroll(function(){
//	console.log($(window).scrollTop())
	var top = $(window).scrollTop()
	var index = 0
	if(top<=60){
		
		$(".header .bottom").css({"position":"absolute","top":"58px"})
		$(".header .logo").css({"position":"absolute","top":"3px"})
	}else if(top>60){
		$(".header .bottom").css({"position":"fixed","top":"0"})
		$(".header .logo").css({"position":"fixed","top":"0"})
	}
	
	var scrollTop = $(this).scrollTop();
	
	$(".lou").each(function (index, ele) {
            var top1 = $(ele).offset().top-$(ele).height() / 2; //找到每一个楼层距离顶部的高度
            if (top1 <= scrollTop) {
//          	console.log(index)
                $(".header_bottom li").eq(index).addClass("select").siblings().removeClass("select");
                

//              return false;
            }
        });
	
	
	
//	console.log( $(".content4bg").offset().top-$(window).scrollTop())

})

function navchange(index){
	if(index == 0){
			$("html,body").animate({scrollTop:$("body").offset().top},300)
			
		}else if(index == 1){
			$("html,body").animate({scrollTop:$(".biz_ecommercebg").offset().top},300)
		}else if(index == 2){
			$("html,body").animate({scrollTop:$(".biz_integration_bg").offset().top},300)
		}
}

sessionStorage.setItem('player', 'close')
