//sign in
const warning = document.querySelector("#warning");
const loginForm = document.querySelector("#loginForm");
const loader = document.querySelector("#loading");
const makeAdmin = document.querySelector("#makeadmin")
loginForm.addEventListener("submit", function(e) {
	e.preventDefault();
	const email = loginForm["login-email"].value;
	const password = loginForm["login-password"].value;
	loader.style.display="block";
		auth.signInWithEmailAndPassword(email, password)
			.then((cred) => {
				loader.style.display="none";
				window.location = "becometutorpage.html";
				console.log(cred);
			})
			.catch((err)=>{
				loader.style.display="none";
				if (err.code=="auth/user-not-found") {
					warning.innerHTML="Incorrect email address"
				}else if(err.code=="auth/invalid-email"){
					warning.innerHTML="Invalid email Address"
				}else if (err.code=="auth/network-request-failed") {
					warning.innerHTML="Check your Internet connection."
				}else if(err.code== "auth/wrong-password"){
					warning.innerHTML="Incorrect password."
				}
				console.log(err);
			});
	 
	 
});

