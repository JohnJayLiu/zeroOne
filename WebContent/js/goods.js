function addItem(){
	
	var id = getID();
	var num=document.getElementById("num").value;
	var data = id + "," + num ;
	//var data = JSON.parse(datas);
	//alert(JSON.stringify(data));
	alert(data);
	
	//返回goodsID并在数据库购物车中添加此商品
	$.ajax({  
					url : "cart",  
					type : "POST",  
					datatype:"text",  
			//		contentType: "application/json; charset=utf-8",  
					data: data, 
					success : function(data, stats) {  
						alert("已添加到购物车");
							if (stats == "success") {  
								//   window.location.href="/yc"  
								
							}  
					},  
					error : function(data) {  
							alert("请求失败");  
					}  
			});  
}

//商品id
 window.onload = getID;
	  var id = getID();
      function getID() {
		var url = window.location.search;
		id= url.substring(4);
		return id;
	  }
	 // alert(id);
	 //向后台传id值
	 var data = id;
	$.ajax({  
					url : "a.action",  
					type : "POST",  
					datatype:"text",  
					contentType: "application/json; charset=utf-8",  
					data: data, 
					success : function(data, stats) {  
							if (stats == "success") {  
								//   window.location.href="/yc"  
							}  
					},  
					error : function(data) {  
							alert("请求失败");  
					}  
			});  
			
		
// 	var uid=document.getElementById("uid").value;
// 	//alert(uid);
// 	
// 	//若uid存在，修改界面
// 	if(uid.length!=0){
// 		
// 	}
			
	 //向后台请求goodsID相关信息
	 var goodsInfo;
	 	//接受商品信息
	  $.ajax({
	  							url : "order.php",
	  							dataType : "json",//数据格式 
	  							type : "post",//请求方式
	  							async : true,//是否异步请求
	  							success : function(data) {   //如果请求成功，返回数据。
	  							var html = "";
	  							for(var i=0;i<data.length;i++){    //遍历data数组
	  											var ls = data[i];     
	  											html +="<span>测试："+ls+"</span>";
	  									}
	  									$("#test").html(html); //在html页面id=test的标签里显示html内容
	  							},
	  					})
						
	goodsInfo={"goodsName":"牙膏","price":"33","goodsCount":"1234","goodsDescription":"lalala","shopName":"商店"};
	
	document.getElementById("goodsName").innerText=goodsInfo.goodsName;
	document.getElementById("price").innerText=goodsInfo.price;
	document.getElementById("goodsCount").innerText=goodsInfo.goodsCount;
	document.getElementById("goodsDescription").innerText=goodsInfo.goodsDescription;
	document.getElementById("shopName").innerText=goodsInfo.shopName;
	 
