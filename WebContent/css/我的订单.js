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


  $.ajax({
                url : "order.php",
                dataType : "json",//数据格式 
                type : "post",//请求方式
                async : false,//是否异步请求
                success : function(data) {   //如果请求成功，返回数据。
                var html = "";
                for(var i=0;i<data.length;i++){    //遍历data数组
                        var ls = data[i];     
                        html +="<span>测试："+ls.name+"</span>";
                    }
                    $("#test").html(html); //在html页面id=test的标签里显示html内容
                },
            })

		//1.json文本格式
		var orderList={"store":[
			{
				"name":"商店1",
				"items":[
				{"goods":"纪念明信片","price":"5","amount":"18","total":"90"},
				{"goods":"珞珈山","price":"5","amount":"18","total":"90"},
				{"goods":"活动","price":"5","amount":"18","total":"90"}
				]
			},
			{
				"name":"商店2",
				"items":[
				{"goods":"纪念明信","price":"5","amount":"18","total":"90"},
				{"goods":"珞珈山","price":"5","amount":"18","total":"90"},
				{"goods":"活动","price":"5","amount":"18","total":"90"}
				]
			}
		]
		};
		//输出的都是undefined，不知道类型
	//	document.write(user.userId+" "+user.username);
		//使用eval将json文本格式数据解析为json对象
	//	var userObj=eval("("+ user+")");
	//	document.write(userObj.userId+" "+userObj.username);
		//2.json数组对象
// 		var emps={"employees":[
// 			{"empId":"1","empName":"Tom"},
// 			{"empId":"2","empName":"Lilei"},
// 			{"empId":"3","empName":"Lucy"},
// 			{"empId":"4","empName":"Lili"},
// 			{"empId":"5","empName":"Hanmeimei"},
// 		]};
// 		document.write(emps.employees[0].empId+"---"+emps.employees[0].empName);
// 		var emp='{"id":"1001","empName":"Lucy","hobbit":["Lol","basketBall"]}';
		//var orderListObj=eval("("+ orderList +")");
	//	alert( orderList.items[2]);
// 	if(orderList.items[5]==null){
 		//alert( orderList.store[1].items[0].goods);
// 	}
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
					
					li1.className="goods";li2.className="pic";li3.className="price";
					li4.className="amount";li5.className="total";li6.className="mng";
					
					li1.innerText=orderList.store[j].items[k].goods;
					li1.appendChild(input1);
					var img=document.createElement("img");
					li2.appendChild(img);
					img.src="../img/购物车.jpg";img.width=50;img.height=50;
					li3.innerText=orderList.store[j].items[k].price;
					li4.innerText=orderList.store[j].items[k].amount;
					li5.innerText=orderList.store[j].items[k].total;
					li6.innerText="移出购物车";
					var input2 = document.createElement("input");
					input2.type="checkbox";
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
		
		
		
