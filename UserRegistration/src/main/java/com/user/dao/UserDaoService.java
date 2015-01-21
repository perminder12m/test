package com.user.dao;


public class UserDaoService {

	private static UserDao userDao=null;

	private UserDaoService(){
		userDao = new UserDaoImpl();
	}
	
	public static UserDao getUserService(){
		if(userDao==null){
			userDao = new UserDaoImpl();
		}
		return userDao;
	}
	
}
