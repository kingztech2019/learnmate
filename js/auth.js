//sign up
const signupForm = document.querySelector("#signupForm");
const loader = document.querySelector("#loading");

signupForm.addEventListener("submit", function(e) {
	e.preventDefault();
	const email = signupForm["signup-email"].value;
	const password = signupForm["signup-password"].value;
	const cpassword = signupForm["signup-cpassword"].value;
	if (password != cpassword) {
		console.log("password not match");
		return;
	} else {
		loader.style.display="block";
		auth.createUserWithEmailAndPassword(email, password)
			.then((cred) => {
				var user = firebase.auth().currentUser;

				user.sendEmailVerification()
					.then(function() {
						window.location = "becometutor.html";
						console.log("email verification sent");
						loader.style.display="none";
						// Email sent.
					})
					.catch(function(error) {
						// An error happened.
					});

				console.log(cred);
			})
			.catch((err)=>{
				loader.style.display="none";
				console.log(err)
			});
	}
	console.log(email, password);
});

