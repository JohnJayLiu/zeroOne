function deleteItem(Obj){
	if(confirm("确认删除？")){
        document.getElementById("id3").removeChild(Obj.parentNode.parentNode);
		var datas = Obj.parentNode.parentNode.id;
 		//alert(datas);
 		//var data = JSON.parse(datas);
 		//alert(JSON.stringify(data));
 		//alert(datas);
 		$.ajax({  
 				url : "deleteFromFavorite",  
 				type : "POST",  
 				datatype:"text",  
 				//	contentType: "application/json; charset=utf-8",  
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

alert("判断登陆");
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
					alert("商品data:"+data);
				if(data.length!=0){
					//在html隐藏页面保存uid信息
					//alert(data);
					alert("data:"+data);
					document.getElementById("uid").value=data;
//					var orderList;
//					={"items":[
//		                {"goodsId":"1","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"12.34"},
//						{"goodsId":"2","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"56.78"},
//						{"goodsId":"3","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"90.00"},
//						{"goodsId":"4","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
//						{"goodsId":"5","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
//						{"goodsId":"6","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
//						{"goodsId":"7","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
//						{"goodsId":"8","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
//						{"goodsId":"9","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
//						{"goodsId":"10","picture":"img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
//						]
//		            };
		
		 
		$.ajax({
		 							url : "loadFavoriteGoods",
		 							dataType : "json",//数据格式 
		 							type : "post",//请求方式
		 							async :true,//是否异步请求
		 							success : function(data) {
										var orderList=data;
	
					
		for(var i=0;i<orderList.items.length;i++){
			var li1 = document.createElement("li");
			li1.className = "fa_items_li fl";
			li1.id = orderList.items[i].goodsId;
			document.getElementById("id3").appendChild(li1);
			var div1 = document.createElement("div");
			div1.className = "fa_item_picture";
			li1.appendChild(div1);
			var a1 = document.createElement("a");
			a1.href = orderList.items[i].link;
			div1.appendChild(a1);
			var img = document.createElement("img");
			img.className = "img";
			img.src = "../" + orderList.items[i].picture;
			img.alt = "暂无图片";
			img.title = orderList.items[i].description;
			a1.appendChild(img);
			var div2 = document.createElement("div");
			div2.className = "item_delete_icon";
			div2.innerHTML = '<img class="img" src="../img/idelete.png" title="删除物品"/>';
			div2.onclick = function(){deleteItem(this)};
			div1.appendChild(div2);
			var a2 = document.createElement("a");
			a2.href = orderList.items[i].link;
			a2.className = "fa_item_info";
			a2.title = orderList.items[i].description;
			a2.innerHTML = orderList.items[i].description;
			li1.appendChild(a2);
			var div3 = document.createElement("div");
			div3.className = "fa_item_price";
			div3.innerHTML = "￥" + orderList.items[i].price;
			li1.appendChild(div3);
		}
		 							},
		 							error : function(data) {  
		 	 							alert(JSON.stringify(data));  
		 	 						}  
			});
					//alert(document.getElementById("uid").value);
				}
				else{//未登录状态
					var node = document.getElementById("id3");
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
//}


/*********************
},
 					})
*********************/