package com.dao;

import com.models.*;
//�����ﶨ�����ݿ�����Ľӿ�
public interface DataOperate {
	public Student getStudentByID(String studentID);
	public void insertStudent(Student student);
	public void updateStudent(Student student);
	
	public ShopStock getShopStock(String shopID);
    public void insertShopStock (ShopStock shopStock);
    public void updateShopStock(ShopStock shopStock);
    public void  daleteShopStock(String shopID);
    
    public Shop getShopID(String shopID);
    public void insertShop (Shop shop);
    public void updateShop (Shop shop);
    public void  deleteShop(String shopID);
    
    public ShoppingCar getgoodsID(String goodsID);
    public void insertShoppingCar(ShoppingCar shoppingCar);
    public void updateShoppingCar(ShoppingCar shoppingCar);
    public void deleteShoppingCar(String goodsID);
    
    public ShoppingCar coonQueryList(String goodsID);

    public ShopStock coonSS(String shopID);
}
