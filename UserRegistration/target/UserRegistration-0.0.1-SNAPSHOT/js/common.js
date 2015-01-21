/**
 * 
 */

$(document).ready(function(){
	$('#addUserBtn').click(function(){
		$('#userInfoDiv').removeClass('hidden');
		$('#addUserBtn').addClass('hidden');
	});
	
	$('#cancelUserBtn').click(function(){
		$('#userInfoDiv').addClass('hidden');
		$('#addUserBtn').removeClass('hidden');
	})
	
	$('#submitUserBtn').click(function(){
		///show a laoder
		var userName = $('#userNameText').val()
		$.ajax({ 
			type: "POST",
			url : 'http://localhost:8189/UserRegistration/user/userservice/addUser/',
			data: JSON.stringify({ userName: userName }),
			content: 'application/json',
			success: function(response){
				//response has service returned data.
				alert(response);			
			},
			error: function(error, xhr){
				alert("there is an error");
			}
		})
	});
	
	function getUsers(sucessHandler, failureHandler){
		$.ajax({ 
			type: "GET",
			url : 'http://localhost:8189/UserRegistration/user/userservice/show/',
			content: 'application/json',
			success: sucessHandler,
			error: failureHandler
		})
	}
	$('#showUsrNameBtn').click(function(){
		///show a laoder
		getUsers(function(response){
			$('#userOutputDivJson').empty();
			for(var i=0; i<response.length;i++){
				$('#userOutputDivJson').append('<div>'+JSON.parse(response[i].value).userName+'</div>');
			}			
		}, function(error, xhr){
			alert("there is an error");
		});
});
	
	$('#showUsrJsonBtn').click(function(){
		///show a laoder
		getUsers(function(response){
			$('#userOutputDivJson').empty();
			for(var i=0; i<response.length;i++){
				$('#userOutputDivJson').append('<div>'+ response[i].value+'</div>');
			}			
		}, function(error, xhr){
			alert("there is an error");
		});
		
	/*$.ajax({ 
		type: "GET",
		url : 'http://localhost:8189/UserRegistration/user/userservice/show/',
		content: 'application/json',
		success: function(response){
			$('#userOutputDivJson').empty();
			for(var i=0; i<response.length;i++){
				$('#userOutputDivJson').append('<div>'+JSON.parse(response[i].value).userName+'</div>')
			}
			alert(response);			
		},
		error: function(error, xhr){
			alert("there is an error");
		}
	})*/
});
	
/*	$('#showUsrJsonBtn').click(function(){
		$('#userOutputDivJson').removeClass('hidden');
	})*/
	
});
