package com.models;

import java.io.ObjectInputStream.GetField;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

public class ShopStock {
 private String goodsID;
 private String goodsName;
 private String price;
 private String shopID;
 private String goodsCount;
 private String goodsDescription;
public String getGoodsID() {
	return goodsID;
}
public void setGoodsID(String goodsID) {
	this.goodsID = goodsID;
}
public String getGoodsName() {
	return goodsName;
}
public void setGoodsName(String goodsName) {
	this.goodsName = goodsName;
}
public String getPrice() {
	return price;
}
public void setPrice(String price) {
	this.price = price;
}
public String getShopID() {
	return shopID;
}
public void setShopID(String shopID) {
	this.shopID = shopID;
}
public String getGoodsCount() {
	return goodsCount;
}
public void setGoodsCount(String goodsCount) {
	this.goodsCount = goodsCount;
}
public String getGoodsDescription() {
	return goodsDescription;
}
public void setGoodsDescription(String goodsDescription) {
	this.goodsDescription = goodsDescription;
}
 
}
