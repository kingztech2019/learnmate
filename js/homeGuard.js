const buttonLogout = document.querySelector("#buttonlogout")
firebase.auth().onAuthStateChanged(function(user){
	console.log(user)
	//const buttonChange = document.querySelector("#buttonchange")
	const buttonLogin = document.querySelector("#buttonlogin")
	
	if (user) {
		 $("#buttonchange").append(`
		 	<button style="margin-top: 0;" onclick="logoutBtn();" id="buttonlogout"> Tutor Logout</button>`)
		  
		 buttonLogin.style.display="none";


		
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
		 
		
 
	}

});

// function logoutBtn(){
// 	firebase.auth().signOut().then(function() {
//   window.location="login.html"
// }).catch(function(error) {
//   // An error happened.
// });
// }
 function logoutBtn(){
 	firebase.auth().signOut().then(function() {
  window.location="login.html"
 }).catch(function(error) {
    // An error happened.
  });
 	console.log("click me")
 }
// buttonLogout.addEventListener("click", ()=>{
// 	event.preventDefault()
//  console.log("click me")
//  })