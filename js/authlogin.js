//sign in
const loginForm = document.querySelector("#loginForm");
const loader = document.querySelector("#loading");

loginForm.addEventListener("submit", function(e) {
	e.preventDefault();
	const email = loginForm["login-email"].value;
	const password = loginForm["login-password"].value;
	loader.style.display="block";
		auth.signInWithEmailAndPassword(email, password)
			.then((cred) => {
				loader.style.display="none";
				window.location = "becometutor.html";
				console.log(cred);
			})
			.catch((err)=>{
				loader.style.display="none";
				console.log(err);
			});
	 
	console.log(email, password);
});
