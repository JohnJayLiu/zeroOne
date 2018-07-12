//button.onclick=
	function searchItem(){
	//alert("dasds");
	var data=document.getElementById("search").value;
	//alert(data);
	$.ajax({  
					url : "doSearch",  
					type : "POST",  
					datatype:"text",  
					//contentType: "application/json; charset=utf-8",  
					data: data, 
					success : function(data, stats) {  
						//alert("请求成功");
							if (stats == "success") {  
								alert("search");
								alert(data);
								   window.location.href="search.html";//跳转到查询界面
								   
								   }  
					},  
					error : function(data) {  
							alert("请求失败");  
					}  
			}); 
}

window.onload = function () {
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var timer;

	function animate(offset) {
		//获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
		//且style.left获取的是字符串，需要用parseInt()取整转化为数字。
		var newLeft = parseInt(list.style.left) + offset;
		list.style.left = newLeft + 'px';
		//无限滚动判断
		if (newLeft > -600) {
			list.style.left = -1800 + 'px';
		}
		if (newLeft < -1800) {
			list.style.left = -600 + 'px';
		}
	}



	function play() {
		//重复执行的定时器
		timer = setInterval(function () {
			next.onclick();
		}, 2000)
	}

	function stop() {
		clearInterval(timer);
	}

	function buttonsShow() {
		//将之前的小圆点的样式清除
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == "on") {
				buttons[i].className = "";
			}
		}
		//数组从0开始，故index需要-1
		buttons[index - 1].className = "on";
	}

	prev.onclick = function () {
		index -= 1;
		if (index < 1) {
			index = 3;
		}
		buttonsShow();
		animate(600);
	};

	next.onclick = function () {
		//由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
		index += 1;
		if (index > 3) {
			index = 1
		}
		animate(-600);
		buttonsShow();
	};

	for (var i = 0; i < buttons.length; i++) {
		(function (i) {
			buttons[i].onclick = function () {
				/*  这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
				/*  由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
				var clickIndex = parseInt(this.getAttribute('index'));
				var offset = 600 * (index - clickIndex); //这个index是当前图片停留时的index
				animate(offset);
				index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
				buttonsShow();
			}
		})(i)
	}

	container.onmouseover = stop;
	container.onmouseout = play;
	play();

}



//var data=3;
//document.getElementById("uid").value=data;
$.ajax({
	url : "JudgeLoginState",
	dataType : "text",//数据格式 
	type : "post",//请求方式
	async :true,//是否异步请求
	success : function(data) {   //如果请求成功，返回数据。
//	var html = "";
	//for(var i=0;i<data.length;i++){    //遍历data数组
		//			var ls = data[i];     
		//			html +="<span>测试："+ls+"</span>";
		//	}
	//$("#test").html(html); //在html页面id=test的标签里显示html内容
		//alert("判断登陆");
	if(data.length!=0){
		//在html隐藏页面保存uid信息
		alert("data:"+data);
		alert("判断登陆lll"+data);
		document.getElementById("uid").value=data;
		//alert(uid);
		document.getElementById("note").innerText="欢迎登录";
		var span=document.createElement("span");
		span.className="avatar";
		document.getElementById("note").appendChild(span);
		thisNode=document.getElementById("link2");
		document.getElementById("link1").innerText="修改信息";
		document.getElementById("link1").href="修改信息.html";
		document.getElementById("link2").innerText="退出登录";
		document.getElementById("link2").href="#";
		document.getElementById("link2").onclick=function ret(){
			//向后台发送退出信息
			$.ajax({  
							url : "doLogout",  
							type : "POST",  
							datatype:"text",  
							//contentType: "application/json; charset=utf-8",  
							data: "logout", 
							success : function(data, stats) {  
									if (stats == "success") {  
										//   window.location.href="/yc"  
									}  
							},  
							error : function(data) {  
									alert("请求失败");  
							}  
					});  
			//重新刷新页面
			location.reload();
			
			alert("已退出")
			};
		//alert(document.getElementById("uid").value);
	}
},
});

//var uid=document.getElementById("uid").value;
//alert(uid);

//若uid存在，修改界面
//if(uid.length!=0){
	
//}

