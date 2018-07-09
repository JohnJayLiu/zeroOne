function deleteItem(Obj){
	if(confirm("确认删除？")){
        document.getElementById("id3").removeChild(Obj.parentNode.parentNode);
	}
}

var orderList={"items":[
                {"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				{"picture":"../img/item1.jpg","link":"#","description":"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本","price":"00.00"},
				]
            }
			
for(var i=0;i<orderList.items.length;i++){
	var li1 = document.createElement("li");
	li1.className = "fa_items_li fl";
	document.getElementById("id3").appendChild(li1);
	var div1 = document.createElement("div");
	div1.className = "fa_item_picture";
	li1.appendChild(div1);
	var a1 = document.createElement("a");
	a1.href = orderList.items[i].link;
	div1.appendChild(a1);
	var img = document.createElement("img");
	img.className = "img";
	img.src = orderList.items[i].picture;
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
	div3.className = "fa_price";
	div3.innerHTML = "￥" + orderList.items[i].price;
	li1.appendChild(div3);
}