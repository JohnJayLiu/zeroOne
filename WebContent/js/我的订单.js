function checkboxed(objName){
    var objNameList=document.getElementsByName(objName);    

    if(null!=objNameList){
        //alert("");
        for(var i=0;i<objNameList.length;i++){
            objNameList[i].checked="checked";
        }
    }
}

function uncheckboxed(objName){
    var objNameList=document.getElementsByName(objName);    

    if(null!=objNameList){
       // alert("取消全选操作");
        for(var i=0;i<objNameList.length;i++){
            objNameList[i].checked="";
        }
    }
}

function confirm(){
		//alert("delete!");
		var bb = "";
		var temp = "";
		var flag = 0;
		var a = document.getElementsByName("checkbox");
		for ( var i = 0; i < a.length; i++) {
			if (a[i].checked) {
				temp = a[i].value;
				if(flag==0){
					bb = bb  + temp ;
				}else{
					bb = bb + "," + temp;
				}
			 flag=1;
			}
		}
		bb+="";
	//	alert(bb);	
		//var data = JSON.parse(bb);
		//alert(JSON.stringify(data));
		//返回购物车确认的goodsId
		$.ajax({  
								url : "order",  
								type : "POST",  
								datatype:"text",   
								data: bb, 
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
alert("判断登陆。。。。");
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
					
				if(data.length!=0){
					
					//在html隐藏页面保存uid信息
					//alert(data);
					document.getElementById("uid").value=data;
					alert("您已登录");
					var orderList;
						//接受购物车信息
					 $.ajax({
					 							url : "goodsPage",
					 							dataType : "json",//数据格式 
					 							type : "post",//请求方式
					 							async : true,//是否异步请求
					 							success : function(data) {   //如果请求成功，返回数据。
					 								orderList=data;
					 							 
					 								var j=0;
					 								for(var i=0;i<orderList.store.length;i++){
					 									while(orderList.store[j]!=null){
					 										var k=0;
					 										var element1 = document.createElement("div");
					 										element1.className = "store";
					 										var storeIns = document.createElement("div");
					 										storeIns.className = "storeIns";
					 										storeIns.innerText=orderList.store[j].name;
					 										element1.appendChild(storeIns);
					 										while(orderList.store[j].items[k]!=null){
					 											var element2 = document.createElement("div");
					 											if(k%2==0){
					 												element2.className = "orderItem";
					 											}
					 											else{
					 												element2.className = "orderItem1";
					 											}
					 											
					 											element1.appendChild(element2);
					 											var li1 = document.createElement("li");
					 											var li2 = document.createElement("li");
					 											var li3 = document.createElement("li");
					 											var li4 = document.createElement("li");
					 											var li5 = document.createElement("li");
					 											var li6 = document.createElement("li");
					 											element2.appendChild(li1);
					 											var input1 = document.createElement("input");
					 											input1.type="checkbox";
					 											input1.name="checkbox";
					 											input1.value=orderList.store[j].items[k].goodsID;
					 											li1.className="goods";li2.className="pic";li3.className="price";
					 											li4.className="amount";li5.className="total";li6.className="mng";
					 											
					 											li1.innerText=orderList.store[j].items[k].goods;
					 											li1.id="info";
					 											li1.appendChild(input1);
					 											var img=document.createElement("img");
					 											li2.appendChild(img);
					 											img.src="../img/购物车.jpg";img.width=50;img.height=50;
					 											li3.innerText=orderList.store[j].items[k].price;
					 											li4.innerText=orderList.store[j].items[k].amount;
					 											li5.innerText=orderList.store[j].items[k].total;
					 											//li6.innerText="移出购物车";
					 											var input2 = document.createElement("button");
					 											 input2.innerText="移出购物车";
					 											 //$("input2").attr("onclick","del();");
					 											 input2.onclick=function del(){
					 												this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
					 												//请求从购物车删除物品的goodsId
					 											//	alert(this.parentNode.parentNode.children[0].children[0].value);
					 												var datas ="";
					 												datas = datas + this.parentNode.parentNode.children[0].children[0].value;
					 												//var data = JSON.parse(datas);
					 												//alert(JSON.stringify(data));
					 												
					 												$.ajax({  
					 																				url : "deleteGoods",  
					 																				type : "POST",  
					 																				datatype:"text",  
					 																				//contentType: "application/json; charset=utf-8",  
					 																				data: datas, 
					 																				success : function(data, stats) {  
					 																						if (stats == "success") {  
					 																							//   window.location.href="/yc"  
					 																						}  
					 																				},  
					 																				error : function(data) {  
					 																						alert("请求失败");  
					 																				}  
					 																		}); 
					 												} ;
					 											li6.appendChild(input2);
					 											
					 											element2.appendChild(li2);
					 											element2.appendChild(li3);
					 											element2.appendChild(li4);
					 											element2.appendChild(li5);
					 											element2.appendChild(li6);
					 											k++;
					 										}
					 										var orderListh = document.getElementById("orderList");
					 										orderListh.appendChild(element1);
					 										j++;
					 									}
					 								}
					 							},
					 					});
					
							//1.json文本格式
							
					//alert(document.getElementById("uid").value);
				}
				else{
					alert("。。您未登录");
					var node = document.getElementById("orderList")
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

//	//document.getElementById("uid").value=3;
//	var uid="3";
//	//=document.getElementById("uid").value;
//	//alert(uid);
//	//uid="3";
//	//alert("您已登录");
//	//若uid存在，修改界面
//	if(uid.length!=0){
//		
//		
//	}	
//	
