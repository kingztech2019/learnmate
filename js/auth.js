//sign up
const signupForm = document.querySelector("#signupForm");
const loader = document.querySelector("#loading");
const warning = document.querySelector("#warning");

signupForm.addEventListener("submit", function(e) {
	e.preventDefault();
	const email = signupForm["signup-email"].value;
	const password = signupForm["signup-password"].value;
	const cpassword = signupForm["signup-cpassword"].value;
	if (password != cpassword) {
		warning.innerHTML="password not match"
		 
		return;
	 
	} else {
		loader.style.display="block";
		warning.innerHTML=""
		auth.createUserWithEmailAndPassword(email, password)
			.then((cred) => {
				var user = firebase.auth().currentUser;

				user.sendEmailVerification()
					.then(function() {
						window.location = "becometutorpage.html";
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
				if (err.code=="auth/email-already-in-use") {
					warning.innerHTML="The email address is already in use."
				}else if(err.code=="auth/invalid-email"){
					warning.innerHTML="Invalid email Address"
				}else if (err.code=="auth/network-request-failed") {
					warning.innerHTML="Check your Internet connection."
				}
				

				console.log(err)
			});
	}
	 
});

