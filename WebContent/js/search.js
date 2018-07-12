//接受查询返回的内容
alert("查询");
$.ajax({
			url : "doSearch",
			dataType : "json",//数据格式 
			type : "post",//请求方式
			async : true,//是否异步请求
			success : function(data) {   //如果请求成功，返回数据。
			
				var info=data;
			alert("查询成功"+JSON.stringify(data));//返回查询内容
			},
			error : function(data) {  
				alert("查询失败"+JSON.stringify(data));  
		}  
	});
//返回的数据格式[[{"shopID":"0813","shopName":"手机周边"}],[{"goodsCount":"50","goodsDescription":"磨砂工艺，边角保护，开孔精准，个性图案","goodsID":"10","goodsName":"iphone手机壳","price":"30","shopID":"0813"}]]