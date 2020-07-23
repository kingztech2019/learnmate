 
function Price() {
	const User_Group = document.querySelector("#group").value;
	const User_Total = document.querySelector("#total");
	// const User_Client = document.querySelector(".client");
	const User_Time = parseInt(document.querySelector("#timing").value);
	const User_Month = parseInt(document.querySelector("#monthly").value);
	const User_Class = document.querySelector("#classType").value;
	var inputElems = document.getElementsByClassName("form-check");
	 

	// User_Client.style.display = "block";
	count = 0;

	for (var i = 0; i < inputElems.length; i++) {
		if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
			count++;
			 
		}
	}

	event.preventDefault();
	if (User_Group == "Nursery") {
		const result = 1000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			console.log(DisplayResult);
			document.getElementById("priceme").value=`${DisplayResult}`
			console.log(`1000 * ${User_Time} * ${User_Month}`)
			document.getElementById("totallesson").innerHTML=`&#8358;1000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
			 
		} else {
			console.log(DisplayResult / 2);
			document.getElementById("totallesson").innerHTML=`&#8358;1000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`

			document.getElementById("priceme").value=`${DisplayResult/2}`
			 
		}
	}
	if (User_Group == "Primary") {
		const result = 2000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			console.log(DisplayResult);
			document.getElementById("totallesson").innerHTML=`&#8358;2000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`

			document.getElementById("priceme").value=`${DisplayResult}`
			 
		} else {
			document.getElementById("totallesson").innerHTML=`&#8358;2000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`

			document.getElementById("priceme").value=`${DisplayResult/2}`
			 
	}
}
	if (User_Group == "Secondary") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			console.log(DisplayResult);
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
			document.getElementById("priceme").value=`${DisplayResult}`
			
			 
		} else {
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
			document.getElementById("priceme").value=`${DisplayResult/2}`
		}
	}

	if (User_Group == "Extracurricular") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
			document.getElementById("priceme").value=`${DisplayResult}`
		} else {
			document.getElementById("priceme").value=`${DisplayResult/2}`
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
		}
	}

	if (User_Group == "Skill") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			document.getElementById("priceme").value=`${DisplayResult}`
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
		} else {
			document.getElementById("priceme").value=`${DisplayResult/2}`
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
		}
	}
	if (User_Group == "Exams") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			document.getElementById("priceme").value=`${DisplayResult}`
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
		} else {
			document.getElementById("priceme").value=`${DisplayResult/2}`
			document.getElementById("totallesson").innerHTML=`&#8358;3000 &times; ${User_Time} hrs &times; ${User_Month} lesson(s); &times  ${count} day(s)`
		}
	}

	console.log("click");
}


//const paymentForm = document.getElementById("paymentForm");
//paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack() {
	 
	event.preventDefault();
	let handler = PaystackPop.setup({
		key: "pk_test_2142622923277f8881f439c84df532559b0270d6", // Replace with your public key
		email: document.getElementById("email-address").value,
		amount: document.getElementById("priceme").value * 100,
		firstname: document.getElementById("client-name").value,
		lastname: document.getElementById("client_lname").value,
		ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
		// label: "Optional string that replaces customer email"
		onClose: function() {
			alert("Window closed.");
		},
		callback: function(response) {
			let message = "Payment complete! Reference: " + response.reference;
			 
			rootRef.child(autoId +"/"+"payment").set({
	     	 reference:response.reference
	     }).then(()=>{
	     	//document.querySelector("#loading").style.display="none";
	     }).catch((err)=>{
	     	console.log(err)

	     })
			window.location.href = `success.html`;
		},
	});
	handler.openIframe();
}
 