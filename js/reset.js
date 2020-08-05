const loginForm = document.querySelector("#loginForm");
const loader = document.querySelector("#loading");
const Warning = document.querySelector("#warning");

loginForm.addEventListener("submit", (e)=>{
	e.preventDefault();
	const email = loginForm["login-email"].value;
	loader.style.display="block";
	if(!email){
		loader.style.display="none";
		
	}

	auth.sendPasswordResetEmail(email)
		.then(()=>{
			   Swal.fire(`Email has been sent, Please Check and verify`)
			console.log("")
			loader.style.display="none";
			window.location="login.html"
			 
		})
		.catch((error)=>{
			Warning.innerHTML=error.code
			loader.style.display="none";
			 
		})

})