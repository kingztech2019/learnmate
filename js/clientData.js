const clientName = document.querySelector("#client-name")
const clientLname = document.querySelector("#client_lname")
const clientType = document.querySelector("#classType")
const clientState = document.querySelector(".clientstate")
const clientLga = document.querySelector(".select-lga")
const clientEmail = document.querySelector("#email-address")
const clientPhone = document.querySelector("#clientphone")
const clientStart = document.querySelector("#mydate")
//
const clientHear = document.querySelector("#clienthear")
const clientGender = document.querySelector("#clientgender")
const clientCourse = document.querySelector(".select-course")
const clientGroup = document.querySelector("#group")
// const clientCourse = document.querySelector(".clientcat")
// const clientClass = document.querySelector("#clientclass")
const clientHour = document.querySelector("#timing")
const clientDuration = document.querySelector(".clientduration")
const clientCourseType = document.querySelector("#clientcoursetype")
//
const Monday = document.querySelector("#monday")
const Tuesday = document.querySelector("#tuesday")
const Wednesday = document.querySelector("#wednesday")
const Thursday = document.querySelector("#thursday")
const Friday = document.querySelector("#friday")
const Saturday = document.querySelector("#saturday")
const Sunday = document.querySelector("#sunday")
const clientBtn = document.querySelector('#clientbtn')
const clientForm = document.querySelector('#clientform')
const nextBtn = document.querySelector("#nextbtn")
const userId = Math.floor((Math.random() * 100000) + 1)

clientForm.addEventListener("input", ()=>{
	if(clientName.value.length>0 
 		&&clientLname.value.length>0
 		&&clientType.value.length>0
 		&&clientState.value.length>0
 		&&clientLga.value.length>0
 		&&clientPhone.value.length>0
 		&&clientEmail.value.length>0
 		 
 		&&clientHear.value.length>0
 		&&clientGender.value.length>0
 		&&clientStart.value.length>0
 		 ){
 		nextBtn.removeAttribute('disabled')

 	}else{
 		nextBtn.setAttribute('disabled', 'disabled')

 	}
})
//
  
clientForm.addEventListener("input", ()=>{
	if(clientCourse.value.length>0 
		&&clientGroup.value.length>0
 		&&clientHour.value.length>0
 		&&clientDuration.value.length>0
 		&&clientCourseType.value.length>0
 		
 		 
 		 ){
 		clientBtn.removeAttribute('disabled')

 	}else{
 		clientBtn.setAttribute('disabled', 'disabled')

 	}
})
clientForm.addEventListener("input", ()=>{
	valid=false;
 	if (document.getElementById("monday").checked) {
 		valid=true
 	}else if(document.getElementById("tuesday").checked){
 		valid=true
 	}else if(document.getElementById("wednesday").checked){
 		valid=true
 	}else if(document.getElementById("thursday").checked){
 		valid=true
 	}else if(document.getElementById("friday").checked){
 		valid=true
 	}else if(document.getElementById("saturday").checked){
 		valid=true
 	}else if(document.getElementById("sunday").checked){
 		valid=true
 	} if(valid){
 		//clientBtn.removeAttribute('disabled')
 	}
 	else {
 		clientBtn.setAttribute('disabled', 'disabled')
 		 
 	}
})

//final button function
clientBtn.addEventListener("click", function(){
	 
	var Checks=document.getElementsByClassName("form-check-input")
	var str = "";
	 
	for(i = 0; i < 7; i++)
		if(Checks[i].checked ===true){
		str+=Checks[i].value + " ";
		console.log(str)

		}

	// let checkBox = document.querySelector("input[type='checkbox']:checked")
	// console.log(checkBox.value);


	 rootRef.child(autoId +"/"+"clientinfo").set({
			userId:userId,
	     	ClientName:clientName.value,
	     	ClientLname:clientLname.value,
	     	ClientType:clientType.value,
	     	ClientState:clientState.value,
	     	ClientLga:clientLga.value,
	     	ClientEmail:clientEmail.value,
	     	clientPhone:clientPhone.value,
	     	clientHear:clientHear.value,
	     	clientGender:clientGender.value,
	     	 clientCourse:clientCourse.value,
	     	clientHour:clientHour.value,
	     	clientStart:clientStart.value,
	     	clientCourseType:clientCourseType.value,
	     	clientDuration:clientDuration.value,
	     	days:str

	     })
	console.log("click me");
})