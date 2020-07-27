window.onload = (function(){
	document.getElementById("loading").style.display="block"
	firebase.auth().onAuthStateChanged(function(user){


		 const key =  firebase.database().ref().child("users")
    key.on("child_added", snap=>{
     
    var email = snap.child("personal/"+"userEmail").val()
    var name = snap.child("personal/"+"userName").val()
    var lastname = snap.child("personal/"+"userLast").val()
     
    if (user.email==email) {
    	document.querySelector(".display-3").innerHTML=`Dear ${name} ${lastname},`
    	document.querySelector("#bodycontent").innerHTML=`<strong>Your application was successful! A copy of your responses will be sent to your registered email. Next steps would be communicated to you in due time.</strong>`
        document.getElementById("loading").style.display="none"
    } 
     
    
}) 	})
	
})()