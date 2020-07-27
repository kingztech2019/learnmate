document.addEventListener("DOMContentLoaded", () => {
 class MultiStep {
  constructor(formId) {
 const userName = document.querySelector("#user_name");
 const userLast = document.querySelector("#lastname");
 const userPhone = document.querySelector("#user_phone");
 const userAddress = document.querySelector("#user_address");
 const userGender = document.querySelector("#user_gender");
 const userState = document.querySelector("#user_state");
 const userDate = document.querySelector("#mydate");
 const userEmail = document.querySelector("#user_email");
 const userLga = document.querySelector("#lga");
 const userId = Math.floor((Math.random() * 100000) + 1)
 //------------------------------------------------
 const schoolName = document.querySelector("#user_school");
 const userCourse = document.querySelector("#user_course");
 const userDegree = document.querySelector("#user_grade");
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
 const saveEdu = document.querySelector("#save_edu");

 // const changeImage = document.querySelector("#changeimage");
 // const changeImageTwo = document.querySelector("#changeimages");
 const userAboutSummary = document.querySelector("#user_aboutsummary");
  
  
 //------------------------------------------------
   let myForm = document.querySelector(formId),
    steps = myForm.querySelectorAll(".steps"),
    btnPrev = myForm.querySelector(".btnPrev"),
    btnNext = myForm.querySelector(".btnNext"),
    indicators = myForm.querySelectorAll(".rounded-circle"),
    inputClasses = ".form-control",
    currentTab = 0;
    //------------------------------------------------------------
    firebase.auth().onAuthStateChanged(function(user){
       if(user){
         userEmail.value=user.email

       }

});

    //------------------------------------------------------------

  
   // we'll need 4 different functions to do this
   showTab(currentTab);

   function showTab(n) {
    steps[n].classList.add("active");
    if (n == 0) {
     btnPrev.classList.add("hidden");
     btnPrev.classList.remove("show");
    } else {
     btnPrev.classList.add("show");
     btnPrev.classList.remove("hidden");
    }
     
    if (n == steps.length - 1) {
     btnNext.textContent = "Submit";

    } else {
     btnNext.textContent = "Next";
    }
    showIndicators(n);
   }

   function showIndicators(n) {
    for (let i = 0; i < indicators.length; i++) {
     indicators[i].classList.replace("bg-warning", "bg-success");
    }
    indicators[n].className += " bg-warning";
   }
  function submit(){
    event.preventDefault();
  }
   function clickerBtn(n) {
    // if (n == 1 && !validateForm()) return false;
    steps[currentTab].classList.remove("active");
    currentTab = currentTab + n;
    if (currentTab >= steps.length) {
      Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Submit'
}).then((result) => {
  if (result.value) {
    document.querySelector("#loading").style.display="block";
      rootRef.child(autoId +"/"+"personal").set({
         userId:userId,
         userName:userName.value,
         userLast:userName.value,
         userPhone:userPhone.value,
         userAddress:userAddress.value,
         userGender:userGender.value,
         userState:userState.value,
         userDate:userDate.value,
         userEmail:userEmail.value,
         userLga:userLga.value
       }).then(()=>{
          console.log("submit successfully")

       }).catch((err)=>{
         console.log('err')
          

       });
       //----------------------------------------
       rootRef.child(autoId +"/"+"education").set({
         schoolName:schoolName.value,
         userCourse:userCourse.value,
         userDegree:userDegree.value,
         userCompany:userCompany.value,
         userRole:userRole.value,
         userCurrent:userCurrent.value,
         userExp:userExp.value,
         userClass:userClass.value,
         userCurriculum:userCurriculum.value,
         userLesson:userLesson.value,
         userAboutSummary:userAboutSummary.value,
         userAbout:userAbout.value,
         userFb:userFb.value,
         userTwitter:userTwitter.value,
         userLink:userLink.value 
         




          
       }).then(()=>{
         document.querySelector("#loading").style.display="none";
         console.log("save successfully")
       }).catch((err)=>{
         console.log(err)

       })
     
  }
})
      
       
     
     return false;
    }
    showTab(currentTab);
   }
// Do whatever validation you want
   // function validateForm() {
   //  let input = steps[currentTab].querySelectorAll(inputClasses),
   //   valid = true;
   //  for (let i = 0; i < input.length; i++) {
   //   if (input[i].value == "") {
   //    if (!input[i].classList.contains("invalid")) {
   //     input[i].classList.add("invalid");
   //    }
   //    valid = false;
   //   }
   //   if (!input[i].value == "") {
   //    if (input[i].classList.contains("invalid")) {
   //     input[i].classList.remove("invalid");
   //    }
   //   }
   //  }
   //  return valid;
   // }
   btnPrev.addEventListener("click", () => {
    clickerBtn(-1);
   });
   btnNext.addEventListener("click", () => {
    clickerBtn(1);
   });
  }
 }
 let MS = new MultiStep("#stepped");
});
