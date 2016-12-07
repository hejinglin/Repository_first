$(function(){
			//广告位
			$('.phonemove').mouseenter(function(){
//				$(this).find('.phonemovebg').css({'left':'-219px','display':'none'});
				$(this).find('.phonemovebg').stop().show().animate({'left':'-158px'},500);
			}).mouseleave(function(){
				$(this).find('.phonemovebg').stop().css({'left':'-219px','display':'none'});
			})
			
			$('.wxmove').mouseenter(function(){
//				$(this).find('.phonemovebg').css({'left':'-219px','display':'none'});
				$(this).find('.wxmovebg').stop().show().animate({'left':'-158px'},500);
			}).mouseleave(function(){
				$(this).find('.wxmovebg').stop().css({'left':'-219px','display':'none'});
			})
			
			//广告位的出现与消失
			$(window).scroll(function(){
//				console.log($(this).scrollTop());
				if($(this).scrollTop()>300){
					$('.miyaAPP').show();
					$('.miyaInformation').show();
				}else{
					$('.miyaAPP').hide();
					$('.miyaInformation').hide();
				}
				
				$('.miyaInformation ul li.last').click(function(){
					var timer1=setInterval(function(){
						console.log(1);
						var current=$(window).scrollTop();
						var speed=current/200;
						var speed=Math.ceil(speed);
						//临界判断
							if(current==0){
								clearInterval(timer1);
								return;
							}
						//改变当前状态
						$(window).scrollTop(current-speed);
					},100)
				})
				
			})
})
