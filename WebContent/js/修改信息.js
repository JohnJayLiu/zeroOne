//接受student信息
 $.ajax({
				url : "requestInfo",
				dataType : "json",//数据格式 
				type : "post",//请求方式
				async : false,//是否异步请求
				success : function(data) {   //如果请求成功，返回数据。
				var html = "";
				/*for(var i=0;i<data.length;i++){    //遍历data数组
								var ls = data[i];     
								html +="<span>测试："+ls+"</span>";
						}
						$("#test").html(html); //在html页面id=test的标签里显示html内容*/
				var info=data;
				//{"studentID":"3134","studentName":"aa","phone":"1342222","address":"dwqdwdq","password":"dqeqgr","email":"swsq@qq.com"};

				document.getElementById("studentId").value=info.studentID;
				document.getElementById("studentName").value=info.studentName;
				document.getElementById("phone").value=info.phone;
				document.getElementById("address").value=info.address;
				document.getElementById("email").value=info.email;
				},
		})



//返回student修改信息
function check(){
		 // var name = document.getElementById("username").value;
			var p1 = document.getElementById("password").value;
			var p2 = document.getElementById("password2").value;
			if(p1!=p2){
				alert("两次输入密码不一致!");
			}
			//break;
			else{
			$(function (){
									$.fn.serializeObject = function(){
									var o = {};
									var a = this.serializeArray();
									$.each(a, function() {
											if (o[this.name] !== undefined) {
													if (!o[this.name].push) {
															o[this.name] = [o[this.name]];
													}
													o[this.name].push(this.value || '');
											} else {
													o[this.name] = this.value || '';
											}
									});
									return o;
							}

								var data = $("form").serializeObject();
								$("#test").html(JSON.stringify(data));
								
								$.ajax({  
												url : "ChangeInfo",  
												type : "POST",  
												datatype:"json",  
												contentType: "application/json; charset=utf-8",  
												data: JSON.stringify(data), 
												success : function(data, stats) {  
														if (stats == "success") {  
															//   window.location.href="/yc"  
														}  
												},  
												error : function(data) {  
														alert("请求失败");  
												}  
										});  
						});
				
			}
  }

	