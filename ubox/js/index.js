var count = 0
var timer = null;
$(".content1 .switch span").on("click", function() {

	//	var that = $(this)
	var index = $(this).index() * 1;
	//	console.log(index)
	$(".content1 .switch span").eq(index).addClass("select").siblings().removeClass("select");
	count = index
	start()
	go(count)
});

function go(count) {
	if(count % 2 == 0) {
		//		console.log(1)
		$(".content1 .title1").html('What is UBOX');
		$(".content1 .title2").html('UBOX is the mailbox of the future.');
		$(".content1 .info").html('Ingeniously designed to provide a secure location for your home deliveries, ensuring you will never miss a delivery or collection again. There is a mail slot for all your letters and a locker for small and large parcels.<br />UBOX is an open platform designed to work with all freight companies. Users will be able to access our UB shipping platform, to return your online orders or send parcels from the comfort of their home.');
		$(".content1_img_video").show();
		$(".content1_img_app").hide();
	} else {
		$(".content1 .title1").html('UBOX App');
		$(".content1 .title2").html('Our UBOX App allows you to track and trace (in real time)');
		$(".content1 .info").html('via your smart phone device. A notification is sent to your smart phone when your parcel arrives.<br/>Our App for iOS and Android enables our users to open and close your UBOX smart home parcel locker with the convenience of your fingers tips. ');
		
		$(".content1_img_video").hide();
		$(".content1_img_app").show()
	}
}

function start() {
	clearInterval(timer);

	timer = setInterval(function() {
		count++
		go(count);

		$(".content1 .switch span").eq(count % 2).addClass("select").siblings().removeClass("select");

	}, 15000)
}
start()



$(".content2 .switch button").on("click", function() {
	var index = $(this).index() * 1;

	$(".content2 .switch button").eq(index).addClass("select").siblings().removeClass("select");
	if(index % 2 == 0) {
		$(".content2 .from .track").hide();
		$(".content2 .from .quote").show();
	} else {
		$(".content2 .from .track").show();
		$(".content2 .from .quote").hide();
	}

})



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
			$("html,body").animate({scrollTop:$(".content1bg").offset().top-100+"px"},300)
			
		}else if(index == 1){
			$("html,body").animate({scrollTop:$(".content2").offset().top},300)
		}else if(index == 2){
			$("html,body").animate({scrollTop:$(".content3bg").offset().top},300)
		}else if(index == 3){
			$("html,body").animate({scrollTop:$(".content4bg").offset().top},300)
		}else if(index == 4){
			$("html,body").animate({scrollTop:$(".content5bg").offset().top},300)
		}
}








$(".quote_add").on("click",function(){
	var num = $(".quote11 input").val();
	console.log(num);
	num++;
	 $(".quote11 input").val(num)
})
$(".quote_sub").on("click",function(){
	var num = $(".quote11 input").val();
	console.log(num);
	num--;
	if(num<0){
		num =0;
	}
	 $(".quote11 input").val(num)
	 
})





var player = videojs('example-video', {"poster": "","controls": "true"}, function(){this.on('play',function(){
//          console.log('正在播放');
          }); 

         //暂停--播放完毕后也会暂停
          this.on('pause',function(){
//                     console.log("暂停中")
                  }); 

          // 结束
          this.on('ended', function() {
//          console.log('结束');

				$(".bg_shadow").remove()
				player.dispose()
          })
        
    });




	$(".content1_img_video").on("click",function(){

//	alert(123)
	
	var html = '<div class="bg_shadow" ><video id="example-video" width="640" height="360" class="video-js vjs-default-skin vjs-big-play-centered ubox_video_size" poster="" autoplay="autoplay"><source src="http://cxs1.oss-cn-shenzhen.aliyuncs.com/video/ubox.mp4"></source></video></div>'

	$(".footerbg").after(html);
	
	
	
	var player = videojs('example-video', {"poster": "","controls": "true"}, function(){this.on('play',function(){
//          console.log('正在播放');
          }); 

         //暂停--播放完毕后也会暂停
          this.on('pause',function(){
//                     console.log("暂停中")
                  }); 

          // 结束
          this.on('ended', function() {
//          console.log('结束');
				$(".bg_shadow").remove();
				player.dispose()
          })
        
    });
	

	
var bg_shadow = document.querySelector(".bg_shadow");
var uboxVideo = document.querySelector("#example-video");
var vjscontrolbar = document.querySelector(".vjs-control-bar")
	bg_shadow.onclick = function(){
		//$(".bg_shadow").remove()
		player.dispose()
		$(".bg_shadow").remove()
		console.log("移除")
	}
	uboxVideo.onclick = function (e) {

        var evt = window.event || e;
////        evt.stopPropagation();
//        evt.cancelBubble = true
        if (evt.stopPropagation) {
            evt.stopPropagation();
        } else {
            evt.cancelBubble = true
        }
//      alert("黄色被点击");
    }
	vjscontrolbar.onclick = function (e) {

        var evt = window.event || e;
////        evt.stopPropagation();
//        evt.cancelBubble = true
        if (evt.stopPropagation) {
            evt.stopPropagation();
        } else {
            evt.cancelBubble = true
        }
//      alert("黄色被点击");
    }
	
	
	
	})
	
	



 var bg_shadow = document.querySelector(".bg_shadow");
var uboxVideo = document.querySelector("#example-video");
var vjscontrolbar = document.querySelector(".vjs-control-bar")
	bg_shadow.onclick = function(){
		player.dispose()
		$(".bg_shadow").remove()
	}
	uboxVideo.onclick = function (e) {

        var evt = window.event || e;
////        evt.stopPropagation();
//        evt.cancelBubble = true
        if (evt.stopPropagation) {
            evt.stopPropagation();
        } else {
            evt.cancelBubble = true
        }
//      alert("黄色被点击");
    }
	vjscontrolbar.onclick = function (e) {

        var evt = window.event || e;
////        evt.stopPropagation();
//        evt.cancelBubble = true
        if (evt.stopPropagation) {
            evt.stopPropagation();
        } else {
            evt.cancelBubble = true
        }
//      alert("黄色被点击");
    }
	
	
	
	
	
	$(".content4 .switch button").on("click",function(){
		var index = $(this).index() * 1;
		if(index%2==0){			
			$(".content4 .two .price").html("$9.00");
			$(".content4 .three .price").html("$4.50");
			
			$(".content4 .one .time").html("/mo");
			$(".content4 .two .time").html("/mo");
			$(".content4 .three .time").html("/mo");
			
			
		}else{
			
			$(".content4 .two .price").html("$99.00");
			$(".content4 .three .price").html("$49.50");
			
			$(".content4 .one .time").html("/year");
			$(".content4 .two .time").html("/year");
			$(".content4 .three .time").html("/year");
		}
		
		
	$(".content4 .switch button").eq(index).addClass("select").siblings().removeClass("select");
	})




var playerData = sessionStorage.getItem('player');
//console.log(playerData)

if(playerData == "close"){
	player.dispose()
	$(".bg_shadow").remove()
}



var logoCount = 0
var logoTimer = null;
$(".f_lbg .switch div").on("click", function() {

	//	var that = $(this)
	var index = $(this).index() * 1;
		console.log(index)
	$(".f_lbg .switch div").eq(index).addClass("select").siblings().removeClass("select");
	logoCount = index
	logoStart()
	logoGo(logoCount)
});




function logoGo(logoCount){
	if(logoCount == 0){
		$(".f_lbg .img1").show();
		$(".f_lbg .img2").hide();
		$(".f_lbg .img3").hide();
		$(".f_lbg .title").html("Freight & Logistics company")
		
	}else if(logoCount == 1){
		$(".f_lbg .img1").hide();
		$(".f_lbg .img2").show();
		$(".f_lbg .img3").hide();
		$(".f_lbg .title").html("Ecommerce & E-Retailers");
	}else{
		$(".f_lbg .img1").hide();
		$(".f_lbg .img2").hide();
		$(".f_lbg .img3").show();
		$(".f_lbg .title").html("Integration");
	}
}

function logoStart() {
	clearInterval(logoTimer);

	logoTimer = setInterval(function() {
		logoCount++
		if(logoCount==3){
			logoCount = 0
		}
		logoGo(logoCount);
		
		$(".f_lbg .switch div").eq(logoCount).addClass("select").siblings().removeClass("select");

	}, 7000)
}
logoStart()





