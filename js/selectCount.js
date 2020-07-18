function AddBtn(){
	event.preventDefault();
	const FirstForm = document.querySelector("#f2")
	FirstForm.innerHTML=` 
  	<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">What is the class group of the learner*</label>

     <select name="date"onchange="toggleSubject(this);"  name="state" id="clientgroup" class="form-control clientstate">
        <option value="Day" disabled selected>What is the class group of the learner*</option>
										<option value="Mathematics">Mathematics</option>
                  <option value="English"> English</option>
                  <option value="Exam">Exam Preparation</option>
                  <option value="Science">Science</option>
                  <option value="Business">Business &amp; Commercial</option>
                  <option value="Music">Music</option>
                  <option value="Languages">Languages</option>
                  <option value="Computer">Computer &amp; Software</option>
                  <option value="Arts">Arts &amp; Religion</option>
                   
                  <option value="Film">Film and photography</option>
                  <option value="Agro-allied">Agro-allied</option>
                  <option value="BEAUTY">BEAUTY & LIFESTYLE</option>
                   
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Professional Exams">COOKING</option>
                  <option value="Extracurricular Activity and Skill">Extracurricular Activity and Skill</option>
                   
                  <option value="Adult Learning">Adult Learning</option>
      </select>
      
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Class Type*</label>
      <select name="date" name="lga" id="clientcourse" class="form-control select-course" required="required"></select>
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
     <label for="mydate">What is the class group of the learner*:</label>
	    <select name="date" name="lga" id="groupone" class="form-control select-course" required="required">
	    	<option disabled selected>What is the class group of the learner*</option>
				 <option value="Nursery_one">Nursery</option>
                  <option value="Primary_one">Primary</option>
                  <option value="Secondary_one">Secondary</option>
                  <option value="Extracurricular_one">Extracurricular Activity  </option>
                  <option value="Skill_one"> Skill</option>
                  <option value="Exams_one">Professional Exams</option>
	    </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Hours per day*</label>
      <select id="timingone" class="form-control">
        <option value="Day" disabled selected>Hours per day*</option>
				 <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                  <option value="5">5 hours</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">For how long?*</label>
     <select id="monthlyone" class="form-control clientduration">
        <option value="Day" disabled selected>For how long?*</option>
				 <option value="1">1 week</option>
                  <option value="2">2 weeks</option>
                  <option value="3">3 weeks</option>
                  <option value="4">1 month</option>
                  <option value="8">2 months</option>
                  <option value="12">3 months</option>
                  <option value="24">6 months</option>
                  <option value="52">1 year</option>
      </select>
    </div>
  </div>
  	
   `
}