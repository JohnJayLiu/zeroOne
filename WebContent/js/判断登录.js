//请求用户id号
alert("判断登陆lll");
//alert("判断登陆");
$.ajax({
				url : "JudgeLoginState",
				dataType : "text",//数据格式 
				type : "post",//请求方式
				async : true,//是否异步请求
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
					//alert(data);
					//alert("data:"+data);
					document.getElementById("uid").value=data;
					//alert(document.getElementById("uid").value);
				}
			},
		});
		
