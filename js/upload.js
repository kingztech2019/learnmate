const changeImage = document.querySelector("#changeimage");
const changeImageTwo = document.querySelector("#changeimages");
 
changeImage.addEventListener("change", (e) => {
	document.querySelector(".progress-wrapone").style.display="block";
	selectedFile = e.target.files[0];
	//create a root reference
	var filename = selectedFile.name;
	var storageRef = firebase.storage().ref("/images/" + filename);
	var uploadTask = storageRef.put(selectedFile);

	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on(
		"state_changed",
		function(snapshot) {
			 
			// Observe state change events such as progress, pause, and resume
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			var progress =
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log("Upload is " + progress + "% done");
			 document.querySelector(".progress-wrapone").style.display="block";
              var bar = document.getElementById("pb-demoone");

               bar.style.width = progress + "%";

			switch (snapshot.state) {
				case firebase.storage.TaskState.PAUSED: // or 'paused'
					console.log("Upload is paused");
					break;
				case firebase.storage.TaskState.RUNNING: // or 'running'
					console.log("Upload is running");
			 	break;
			}
		},
		function(error) {
			// Handle unsuccessful uploads
			elem.innerHTML = "unable to upload your image";
		},
		function() {
			// Handle successful uploads on complete
			// For instance, get the download URL: https://firebasestorage.googleapis.com/...
		    document.querySelector(".progress-wrapone").style.display="none"; 
	document.getElementById("imgtextone").style.display="block";
	document.getElementById("imgtextone").innerHTML=`${filename}`
	document.getElementById("removeone").style.display="block";
			uploadTask.snapshot.ref
				.getDownloadURL()
				.then(function(downloadURL) {
					console.log("File available at", downloadURL);
					rootRef.child(autoId + "/" + "profilepic").set({
						url: downloadURL,
					});
				})
				.then(function() {
					console.log("save successfully");
				});
		}
	);
});

function deletemeOne(){
	event.preventDefault();
	const filename = document.querySelector("#imgtextone").textContent
	console.log(filename)
	var storageRef = firebase.storage() 
	var desertRef=storageRef.ref('/images/'+filename)
	desertRef.delete().then(()=>{
		document.getElementById("imgtextone").style.display="none";
		document.getElementById("removeone").style.display="none";
		document.getElementById("changeimage").value="";
		console.log("delete successfully")
	}).catch((error)=>{
		console.log(error)

	})

}
//---------------------------------second image upload--------

changeImageTwo.addEventListener("change", (e)=>{
	document.querySelector(".progress-wrap").style.display="block";
	 
	selectedFile = e.target.files[0];
	 //create a root reference
	 var filename = selectedFile.name;
	 var storageRef = firebase.storage().ref('/images/' + filename);
	 var uploadTask = storageRef.put(selectedFile);

	 // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
	 
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  document.querySelector(".progress-wrap").style.display="block";
  var bar = document.getElementById("pb-demo");

  bar.style.width = progress + "%";
   
  
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
   
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	document.querySelector(".progress-wrap").style.display="none"; 
	document.getElementById("imgtext").style.display="block";
	document.getElementById("imgtext").innerHTML=`${filename}`
	document.getElementById("remove").style.display="block";
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURLTwo) {
    console.log('File available at', downloadURLTwo);
     rootRef.child(autoId +"/"+"verifypics").set({
	     	urlIwo:downloadURLTwo,
	     	 
	     	 




	     	 
	     })

  }).then(function(){
  	console.log("save successfully")
  })
});


})

function deleteme(){
	event.preventDefault();
	const filename = document.querySelector("#imgtext").textContent
	console.log(filename)
	var storageRef = firebase.storage() 
	var desertRef=storageRef.ref('/images/'+filename)
	desertRef.delete().then(()=>{
		document.getElementById("imgtext").style.display="none";
		document.getElementById("remove").style.display="none";
		document.getElementById("changeimages").value="";
		console.log("delete successfully")
	}).catch((error)=>{
		console.log(error)

	})
}