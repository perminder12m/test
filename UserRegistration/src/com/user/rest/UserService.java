package com.user.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONObject;

@Path("/userservice")
public class UserService {

	@GET
	@Produces("application/json")
	public Response addUser(){
		JSONObject jsonOblect = new JSONObject();
		
	}
}
