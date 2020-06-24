 
firebase.auth().onAuthStateChanged(function(user){
	var user = firebase.auth().currentUser;
	if(user.emailVerified==false){
		document.getElementById('verifyemail').style.display="block";
		document.getElementById('loading').style.display="none";

	}else{
		document.getElementById('verifyemail').style.display="none";
		document.getElementById('loading').style.display="none";
	}
console.log(user);
})
