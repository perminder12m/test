package com.user.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.JAXBElement;
import javax.xml.namespace.QName;

import com.user.dao.UserDao;
import com.user.dao.UserDaoService;

@Path("/userservice")
public class UserService {
	
	private UserDao userDao;
	public UserService(){
		userDao = UserDaoService.getUserService();
	}
	
	@POST	 
	@Path("/addUser")
	public String addUser(String userName){	
		if(userName!=null && userName!=""){
		userDao.add(userName);
		return "SUCCESS";
		}
		else
			return "Add Failed";
	}
	
	@GET
	@Path("/show")
	@Produces(MediaType.APPLICATION_JSON)
	public List<JAXBElement<String>> showUsers(){
		List<String> users = userDao.show();
		List<JAXBElement<String>> userList = new ArrayList<JAXBElement<String>>();
		int i=0;
		for(String user:users){
			i++;
			userList.add(new JAXBElement<String>(QName.valueOf("element"+i), String.class, user));
		}
		return userList;		
	}
}
