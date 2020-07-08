//personnal profile
 const schoolName = document.querySelector("#user_school");
 const userCourse = document.querySelector("#user_course");
 const schoolNameTwo = document.querySelector("#user_schooltwo");
 const userDegree = document.querySelector("#user_grade");
 const userDegreeTwo = document.querySelector("#user_gradetwo");
 const userCourseTwo = document.querySelector("#user_coursetwo");
 const userCompany = document.querySelector("#user_company");
 const userRole = document.querySelector("#user_role");
 const userCurrent = document.querySelector("#user_current");
 const userExp = document.querySelector("#user_teaching");
 const userClass = document.querySelector("#user_class");
 const userCurriculum = document.querySelector("#user_curriculum");
 const userLesson = document.querySelector("#user_lesson");
 const userAbout = document.querySelector("#user_about");
 const userFb = document.querySelector("#fb_id");
 const userTwitter = document.querySelector("#tw_id");
 const userLink = document.querySelector("#lk_id");
 const userSkill= document.querySelector("#user_skill");
 const saveEdu = document.querySelector("#save_edu");
 const changeImage = document.querySelector("#changeimage");
 const changeImageTwo = document.querySelector("#changeimages");
  
 

   
  
//save user in our database
saveEdu.addEventListener("click", function(){
	     rootRef.child(autoId +"/"+"education").set({
	     	schoolName:schoolName.value,
	     	userCourse:userCourse.value,
	     	userDegree:userDegree.value,
	     	schoolNameTwo:schoolNameTwo.value,
	     	userDegreeTwo:userDegreeTwo.value,
	     	userCourseTwo:userCourseTwo.value,
	     	userCompany:userCompany.value,
	     	userRole:userRole.value,
	     	userCurrent:userCurrent.value,
	     	userExp:userExp.value,
	     	userClass:userClass.value,
	     	userCurriculum:userCurriculum.value,
	     	userLesson:userLesson.value,
	     	userAbout:userAbout.value




	     	 
	     })

});

// function userPhoto(){
// 	selectedFile = event.target.files[0];
// 	submitBtn(selectedFile)
	
	
// }

changeImage.addEventListener("change", (e)=>{
	selectedFile = e.target.files[0];

})

changeImageTwo.addEventListener("change", (e)=>{
	selectedFile = e.target.files[0];

})

function submitBtn(){
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
  console.log('Upload is ' + progress + '% done');
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

  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
     rootRef.child(autoId +"/"+"verify").set({
	     	url:downloadURL,
	     	userFb:userFb.value,
	     	userTwitter:userTwitter.value,
	     	userLink:userLink.value,
	     	userSkill:userSkill.value
	     	 




	     	 
	     })

  });
});

}





