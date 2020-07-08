 const Login = document.querySelector("#login-email")
const makeAdmin = document.querySelector("#makeadmin")
makeAdmin.addEventListener("click", (e)=>{
	e.preventDefault();
	
	const adminEmail = Login.value;
	const addAdminRole = functions.httpsCallable('addAdminRole');
	addAdminRole({email:adminEmail}).then(result=>{
		console.log(result)
	})
});
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
 //personnal profile
 const userName = document.querySelector("#user_name");
 const userPhone = document.querySelector("#user_phone");
 const userAddress = document.querySelector("#user_address");
 const userGender = document.querySelector("#user_gender");
 const userState = document.querySelector("#user_state");
 const userDate = document.querySelector("#date");
 const userEmail = document.querySelector("#user_email");
 const saveUser = document.querySelector("#saveuser");
 
 const userId = Math.floor((Math.random() * 1000) + 1)
 
 
 
//save user in our database
saveUser.addEventListener("click", function(){
	     rootRef.child(autoId +"/"+"personal").set({
			userId:userId,
	     	userName:userName.value,
	     	userPhone:userPhone.value,
	     	userAddress:userAddress.value,
	     	userGender:userGender.value,
	     	userState:userState.value,
	     	userDate:userDate.value,
	     	userEmail:userEmail.value,
	     })

});

//save user in our database
saveUser.addEventListener("click", function(){
	     rootRef.child(autoId +"/"+"personal").set({
			userId:userId,
	     	userName:userName.value,
	     	userPhone:userPhone.value,
	     	userAddress:userAddress.value,
	     	userGender:userGender.value,
	     	userState:userState.value,
	     	userDate:userDate.value,
	     	userEmail:userEmail.value,
	     })

});
 

firebase.auth().onAuthStateChanged(function(user){
	if (user) {
		
		user.getIdTokenResult().then(idTokenResult =>{
			if(idTokenResult.claims.admin){
				console.log("true")
				const key =  firebase.database().ref().child("users")
key.on("child_added", snap=>{
	var name = snap.child("personal/"+"userName").val()
	console.log(name)
	console.log(snap.val());
})
				 
			}
		})
	}

});
