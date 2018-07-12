function deleteStore(Obj){
	if(confirm("确认删除？")){
        document.getElementById("id2").removeChild(Obj.parentNode.parentNode.parentNode);
		var datas = Obj.parentNode.parentNode.parentNode.id;
 		//alert(datas);
 		//var data = JSON.parse(datas);
 		//alert(JSON.stringify(data));
 		//alert(datas);
 		$.ajax({  
 				url : "deleteShopFromFavorite",  
 				type : "POST",  
 				datatype:"text",  
 				contentType: "application/json; charset=utf-8",  
 				data:datas, 
 				success : function(data, stats) {  
 					        if (stats == "success") {  
 								//   window.location.href="/yc"  
 							}  
 				        },  
 				error : function(data) {  
 							alert("请求失败");  
 						}  
 				}); 
    }
}
alert("店铺收藏");
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
					alert("已登录ss");
					//alert("判断登陆");
				if(data.length!=0){
					document.getElementById("uid").value=data;
			
					alert("已登录sss");
			$.ajax({
			 		url : "loadFavorite",
			 		dataType : "json",//数据格式 
			 		//contentType: "application/json; charset=utf-8",
			 		type : "post",//请求方式
			 		async : true,//是否异步请求
			 		success : function(data) {
							var orderList=data;
							alert("已登录s");
							for(var i=0;i<orderList.store.length;i++){
								if(orderList.store[i]!=null){
									var li1 = document.createElement("li");
									li1.className = "fa_item_list_li";
									li1.id = orderList.store[i].storeId;
									document.getElementById("id2").appendChild(li1);
									var div1 = document.createElement("div");
									div1.className = "fa_store fl";
									li1.appendChild(div1);
									var div2 = document.createElement("div");
									div2.className = "fa_store_link";
									div1.appendChild(div2);
									var div3 = document.createElement("div");
									div3.className = "fa_store_picture fl";
									div2.appendChild(div3);
									var a1 = document.createElement("a");
									a1.href = orderList.store[i].link;
									div3.appendChild(a1);
									var img1 = document.createElement("img");
									img1.className = "img";
									img1.src = orderList.store[i].logo;
									img1.alt = "暂无图片";
									a1.appendChild(img1);
									var div4 = document.createElement("div");
									div4.className = "fa_store_name fl";
									div2.appendChild(div4);
									var a2 = document.createElement("a");
									a2.href = orderList.store[i].link;
									a2.innerHTML = orderList.store[i].name;
									div4.appendChild(a2);
					var div5 = document.createElement("div");
					div5.className = "store_delete_icon fl";
					div5.onclick = function(){deleteStore(this)};
					div2.appendChild(div5);
					div5.innerHTML = '<img class="img" src="../img/delete.png" title="删除"/>';
					var div6 = document.createElement("div");
					div6.className = "fa_store_info";
					div6.innerHTML = orderList.store[i].info;
					div1.appendChild(div6);
					var div7 = document.createElement("div");
					div7.className = "fa_itemlist fl";
					div7.innerHTML = '<div class="thing_on_shelf">架上物品</div><a href="#" class="cmore">查看更多></a>';
					li1.appendChild(div7);
					var div8 = document.createElement("div");
					div8.className = "fa_storeitems";
					div7.appendChild(div8);
					var ul = document.createElement("ul");
					div8.appendChild(ul);
					for(var j=0;j<orderList.store[i].items.length;j++){
						var li2 = document.createElement("li");
					    li2.className = "fa_storeitems_li fl";
						ul.appendChild(li2);
						var div9 = document.createElement("div");
						div9.className = "fa_picture";
						li2.appendChild(div9);
						var a3 = document.createElement("a");
					    a3.href = orderList.store[i].items[j].link;
						div9.appendChild(a3);
						var img2 = document.createElement("img");
					    img2.className = "img";
					    img2.src = "../" + orderList.store[i].items[j].picture;
					    img2.alt = "暂无图片";
						img2.title = orderList.store[i].items[j].description;
						a3.appendChild(img2);
						var div10 = document.createElement("div");
					    div10.className = "fa_price";
						div10.innerHTML = "￥" + orderList.store[i].items[j].price;
						li2.appendChild(div10);
					}
				}
			}
			 							},error : function(data) {  
			 								alert(JSON.stringify(data));  
			 							}
		 		 					});
					//在html隐藏页面保存uid信息
					//alert(data);
					//alert("data:"+data);
					
					//alert(document.getElementById("uid").value);
				}
				else{//未登录状态
					var node = document.getElementById("id2");
					node.innerText="您还未登录";
					var link = document.createElement("a");
					var b = document.createElement("br");
					link.href="登录.html";
					link.innerText="登录";
					node.appendChild(b);
					node.appendChild(link);
		}
			},
		});
//document.getElementById("uid").value=3;
//var uid=document.getElementById("uid").value;
////alert(uid);
//
////若uid存在，修改界面
//if(uid.length!=0){
//	
//	/*********************
//	},
//	 					})
//	*********************/
//}