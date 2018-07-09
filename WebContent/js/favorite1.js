function deleteStore(Obj){
	if(confirm("确认删除？")){
        document.getElementById("id2").removeChild(Obj.parentNode.parentNode.parentNode);
    }
}

var orderList={"store":[
			{
				"name":"名字有两行（暂定）店",
				"logo":"",
				"link":"#",
				"info":"店铺简介：卖家很懒，什么都没说",
				"items":[
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"}
				]
			},
			{
				"name":"零一",
				"logo":"",
				"link":"#",
				"info":"店铺简介：卖家很懒，什么都没说。卖家很懒，什么都没说",
				"items":[
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"}
				]
			},
			{
				"name":"名字有两行（暂定）店",
				"logo":"",
				"link":"#",
				"info":"店铺简介：卖家很懒，什么都没说",
				"items":[
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"}
				]
			}
		]
		};
for(var i=0;i<orderList.store.length;i++){
	if(orderList.store[i]!=null){
		var li1 = document.createElement("li");
		li1.className = "fa_item_list_li";
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
		div7.innerHTML = '<div class="thing_on_shelf">架上物品</div>';
		li1.appendChild(div7);
		var div8 = document.createElement("div");
		div8.className = "fa_items";
		div7.appendChild(div8);
		var ul = document.createElement("ul");
		div8.appendChild(ul);
		for(var j=0;j<orderList.store[i].items.length;j++){
			var li2 = document.createElement("li");
		    li2.className = "fa_items_li fl";
			ul.appendChild(li2);
			var div9 = document.createElement("div");
			div9.className = "fa_picture";
			li2.appendChild(div9);
			var a3 = document.createElement("a");
		    a3.href = orderList.store[i].items[j].link;
			div9.appendChild(a3);
			var img2 = document.createElement("img");
		    img2.className = "img";
		    img2.src = orderList.store[i].items[j].picture;
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