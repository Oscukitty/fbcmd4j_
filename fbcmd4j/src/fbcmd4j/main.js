$(function(){

var ap_id = '333248490700101';
var scopes = 'email, user_friends, user_online_presence';
var btn_login = '<li> <a href="#" id="login" class="btn btn-primary">Iniciar secion2</a> </li>';
var div_session = "<div id='facebook-session'>"+
				  "<strong></strong>"+
				  "<img>"+
				  "<a herf='#' id='logout' class='btn btn-danger'>Cerrar secion</a>"+
				  "</div>";

window.fbAsyncInit = function() {
    FB.init({
      appId      : app_id,
      status     : true,
      cookie     : true,         
      xfbml      : true,  
      version    : 'v2.1' 
    });

    

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

 var statusChangeCallback = function(response,callback) {
    console.log('statusChangeCallback');
    console.log(response, function(){

    });
    .
    if (response.status === 'connected') {
      getFacebookData(); 
      //testAPI();
    } else {
     
      callback (false);
    }
  }

var checkLoginState = function (callback) {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response,function(data){
      	callback(data);
      });
    });
  }

var getFacebookData=function(){
FB.api('/me',function(response){
	$('#login').after(div_session);
	$('#login').remove();
	$('#facebook-session strong').text("Bienbenido: "+response.name);
	$('#facebook-session img').attr('scr','http://graph.facebook.com/'+response.id+'/picture?type=large')
})
}
var facebookLogin = function{
checkLoginState(function(response){
if(!response){
	FB.login(function(response){
		if(response.status==='connected')
			getFacebookData();
		
	},{scope: scopes});
}

})
}

$(document).on('click','#login', function(e){

e.preventDefault();

facebookLogin();

})


})