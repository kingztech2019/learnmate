function Price() {
	const User_Group = document.querySelector("#group").value;
	const User_Total = document.querySelector("#total");
	const User_Client = document.querySelector(".client");
	const User_Time = parseInt(document.querySelector("#timing").value);
	const User_Month = parseInt(document.querySelector("#monthly").value);
	const User_Class = document.querySelector("#classType").value;
	var inputElems = document.getElementsByTagName("input");

	User_Client.style.display = "block";
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
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
		} else {
			console.log(DisplayResult / 2);
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult/2}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
		}
	}
	if (User_Group == "Primary") {
		const result = 2000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			console.log(DisplayResult);
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
		} else {
			User_Total.innerHTML = `Total Amount = N${DisplayResult / 2}`;
			console.log(DisplayResult / 2);
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult/2}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
		}
	}
	if (User_Group == "Secondary") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult);
		} else {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult/2}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult / 2);
		}
	}

	if (User_Group == "Extracurricular") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult);
		} else {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult/2}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult / 2);
		}
	}

	if (User_Group == "Skill") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult);
		} else {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult/2}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult / 2);
		}
	}
	if (User_Group == "Exams") {
		const result = 3000 * User_Time;
		const DResult = result * count;
		const DisplayResult = DResult * User_Month;
		if (User_Class == "offline") {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult);
		} else {
			User_Total.innerHTML = `<h4>Total Amount:N</h4>
			<label class="form-row-inner">
		 <input type="text" style="border: none !important; padding-top:10px !important; height:40px !important;" id="dprice" value="${DisplayResult/2}" class="form-control"  name="card" required>
		 <span class="border"></span>
		</label>`;
			document.getElementById("dprice").disabled = true;
			console.log(DisplayResult / 2);
		}
	}

	console.log("click");
}

const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack() {
	let handler = PaystackPop.setup({
		key: "pk_test_2142622923277f8881f439c84df532559b0270d6", // Replace with your public key
		email: document.getElementById("email-address").value,
		amount: parseInt(document.getElementById("dprice").value) * 100,
		firstname: document.getElementById("client-name").value,
		lastname: document.getElementById("client_lname").value,
		ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
		// label: "Optional string that replaces customer email"
		onClose: function() {
			alert("Window closed.");
		},
		callback: function(response) {
			let message = "Payment complete! Reference: " + response.reference;
			alert(message);
			window.location.href = `success.html =+${response.reference}`;
		},
	});
	handler.openIframe();
}
