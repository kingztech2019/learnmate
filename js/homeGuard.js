firebase.auth().onAuthStateChanged(function(user){
	console.log(user)
	//const buttonChange = document.querySelector("#buttonchange")
	const buttonLogin = document.querySelector("#buttonlogin")
	const buttonLogout = document.querySelector("#buttonlogout")
	if (!user) {
		 
		 


		
// 		user.getIdTokenResult().then(idTokenResult =>{
// 			if(idTokenResult.claims.admin){
// 				console.log("true")
// 				const key =  firebase.database().ref().child("users")
// key.on("child_added", snap=>{
// 	var name = snap.child("personal/"+"userName").val()
// 	console.log(name)
// 	console.log(snap.val());
// })
				 
// 			}
// 		})
	}else{
		buttonLogin.style.display="none";
		buttonLogout.style.display="block";
 
	}

});

function logoutBtn(){
	firebase.auth().signOut().then(function() {
  window.location="login.html"
}).catch(function(error) {
  // An error happened.
});
}
// const logoutBtn = document.querySelector("#logoutbtn")
// logoutBtn.addEventListener("click", ()=>{
 
//  })