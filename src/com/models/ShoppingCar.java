package com.models;

import java.util.List;

public class ShoppingCar{
    private String goodsID;
    private String studentID;
    private int count;
    private ShopStock ShopStock;
    public void setCount(int count) {
        this.count = count;
    }

    public int getCount() {
        return count;
    }

    public String getGoodsID() {
        return goodsID;
    }

    public String getStudentID() {
        return studentID;
    }

    public void setGoodsID(String goodsID) {
        this.goodsID = goodsID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public void setShopStock(ShopStock ShopStock) {
        this.ShopStock = ShopStock;
    }
    public ShopStock getShopStock() {
        return ShopStock;
    }
}