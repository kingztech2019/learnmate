//sign in
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
				window.location = "profile.html";
				console.log(cred);
			})
			.catch((err)=>{
				loader.style.display="none";
				console.log(err);
			});
	 
	 
});

