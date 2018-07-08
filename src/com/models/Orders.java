package com.models;

import java.util.LinkedList;
import java.util.List;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

public class Orders {
	private List<Store>store;

	public List<Store> getStore() {
		return store;
	}

	public void setStore(List<Store> store) {
		this.store = store;
	}
	public void setTotalPriceForItem() {
		for (Store s:store)
			s.setTotalPriceForItem();
	}
	public String getStoreName(int index) {
		return store.get(index).getName();
	}
	public Orders () {
		store=new LinkedList<>();
		Store s1=new Store();
		Store s2=new Store();
		store.add(s1);
		store.add(s2);
	}
}

final class Store {
	private String name ;
	private List<Item>items;
	public Store() {
		name ="store1";
		Item i1=new Item();
		Item i2=new Item();
		Item i3=new Item();
		items=new LinkedList<>();
		items.add(i2);
		items.add(i1);
		items.add(i3);
		
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Item> getItems() {
		return items;
	}
	public void setItems(List<Item> items) {
		this.items = items;
	}
	public void setTotalPriceForItem() {
		for (Item item:items) {
			item.setTotal(""+Integer.valueOf(item.getPrice()).intValue()*Integer.valueOf(item.getAmount()).intValue());
		}
	}
}

final class Item {
	private String goods;
	private String  price;
	private String amount;
	private String total;
	public Item () {
		goods="goods";
		price="5";
		amount="4";
		total=""+Integer.valueOf(price).intValue()*Integer.valueOf(amount).intValue();
	}
	public String getGoods() {
		return goods;
	}
	public void setGoods(String goods) {
		this.goods = goods;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
}