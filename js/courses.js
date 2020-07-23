  // $(document).ready(function() {
  //       $('#example-enableCollapsibleOptGroups-enableClickableOptGroups-enableFiltering-includeSelectAllOption').multiselect({
  //           enableClickableOptGroups: true,
  //           enableCollapsibleOptGroups: true,
  //           enableFiltering: true,
  //           includeSelectAllOption: true
  //       });
  //   });
//    $('#example-multiple-optgroups').multiselect();
// $(function() {
//     $('.multiselect-ui').multiselect({
//         includeSelectAllOption: true
//     });
// });
 function toggleSubject(){
  if (document.getElementById("clientcoursetype").value=="Mathematics") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="Mathematics" value="Basic Mathematics">
  <label class="form-check-label" for="inlineCheckbox2">Basic Mathematics</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="gmathematics" value="General Mathematics">
  <label class="form-check-label" for="inlineCheckbox2">General Mathematics</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="Quantitative" value="Quantitative Reasoning">
  <label class="form-check-label" for="inlineCheckbox2">Quantitative Reasoning</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="algebra" value="Algebra">
  <label class="form-check-label" for="inlineCheckbox2">Algebra</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="further" value="Further Mathematics">
  <label class="form-check-label" for="inlineCheckbox2">Further Mathematics</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="Calculus" value="Calculus">
  <label class="form-check-label" for="inlineCheckbox2">Calculus</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="trigonometry" value="Trigonometry">
  <label class="form-check-label" for="inlineCheckbox2">Trigonometry</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="SAT" value="SAT Math">
  <label class="form-check-label" for="inlineCheckbox2">SAT Math</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="Geometry" value="Geometry">
  <label class="form-check-label" for="inlineCheckbox2">Geometry</label>
 
                    </div>
     
         `)
  console.log("working")
}else if (document.getElementById("clientcoursetype").value=="English") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="english" value="English Language">
  <label class="form-check-label" for="inlineCheckbox2">English Language</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="verbal" value="Verbal Reasoning">
  <label class="form-check-label" for="inlineCheckbox2">Verbal Reasoning</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="englishgrammar" value="English Grammar">
  <label class="form-check-label" for="inlineCheckbox2">English Grammar</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="litineng" value="Lit in Eng">
  <label class="form-check-label" for="inlineCheckbox2">Lit in Eng </label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="spellings" value="Spellings">
  <label class="form-check-label" for="inlineCheckbox2">Spellings</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="reading" value="Reading Comprehension">
  <label class="form-check-label" for="inlineCheckbox2">Reading Comprehension</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="toefl" value="TOEFL">
  <label class="form-check-label" for="inlineCheckbox2">TOEFL</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="public" value="Public Speaking">
  <label class="form-check-label" for="inlineCheckbox2">Public Speaking</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="essay" value="Essay Writing">
  <label class="form-check-label" for="inlineCheckbox2">Essay Writing</label>
 
                    </div>
     
         `)
  console.log("working")
}
else if (document.getElementById("clientcoursetype").value=="Exam") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="ielts" value="IELTS">
  <label class="form-check-label" for="inlineCheckbox2">IELTS</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="satmath" value="SAT Math">
  <label class="form-check-label" for="inlineCheckbox2">SAT Math</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="gre" value="GRE">
  <label class="form-check-label" for="inlineCheckbox2">GRE</label>
 
                    </div>
                    <div class="col-lg">
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="toeflone" value="TOEFL">
  <label class="form-check-label" for="inlineCheckbox2">TOEFL</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="gmat" value="GMAT">
  <label class="form-check-label" for="inlineCheckbox2">GMAT</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="ican" value="ICAN">
  <label class="form-check-label" for="inlineCheckbox2">ICAN</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="satwriting" value="SAT Writing">
  <label class="form-check-label" for="inlineCheckbox2">SAT Writing</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="acca" value="ACCA">
  <label class="form-check-label" for="inlineCheckbox2">ACCA</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="satreading" value="SAT Reading">
  <label class="form-check-label" for="inlineCheckbox2">SAT Reading</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="pmp" value="PMP">
  <label class="form-check-label" for="inlineCheckbox2">PMP</label>
 
                    </div>
     
         `)
  console.log("working")
}else if (document.getElementById("clientcoursetype").value=="Business") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="economics" value="Economics">
  <label class="form-check-label" for="inlineCheckbox2">Economics</label>
 
                    </div>
                    <div class="col-lg">
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="accounting" value="Accounting">
  <label class="form-check-label" for="inlineCheckbox2">Accounting</label>
 
                    </div>
                    <div class="col-lg">
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="commerce" value="Commerce">
  <label class="form-check-label" for="inlineCheckbox2">Commerce</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="socialstudies" value="Social Studies">
  <label class="form-check-label" for="inlineCheckbox2">Social Studies</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="government" value="Government">
  <label class="form-check-label" for="inlineCheckbox2">Government</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="business" value="Business Studies">
  <label class="form-check-label" for="inlineCheckbox2">Business Studies</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="public" value="Public Speaking">
  <label class="form-check-label" for="inlineCheckbox2">Public Speaking</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="civic" value="Civic Education">
  <label class="form-check-label" for="inlineCheckbox2">Civic Education</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Career Counselling">
  <label class="form-check-label" for="inlineCheckbox2">Career Counselling</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="writingb" value="Writing Business">
  <label class="form-check-label" for="inlineCheckbox2">Writing Business Plan</label>
 
                    </div>
     
         `)
  console.log("working")
}else if (document.getElementById("clientcoursetype").value=="Music") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="piano" value="Piano">
  <label class="form-check-label" for="inlineCheckbox2">Piano</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="music" value="Music Theory">
  <label class="form-check-label" for="inlineCheckbox2">Music Theory</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="guitar" value="Guitar">
  <label class="form-check-label" for="inlineCheckbox2">Guitar</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="voice" value="Voice Training">
  <label class="form-check-label" for="inlineCheckbox2">Voice Training</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Singing">
  <label class="form-check-label" for="inlineCheckbox2">Singing</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Saxophone">
  <label class="form-check-label" for="inlineCheckbox2">Saxophone</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Violin">
  <label class="form-check-label" for="inlineCheckbox2">Violin</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Drums">
  <label class="form-check-label" for="inlineCheckbox2">Drums</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Trumpet">
  <label class="form-check-label" for="inlineCheckbox2">Trumpet</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Flute">
  <label class="form-check-label" for="inlineCheckbox2">Flute</label>
 
                    </div>
     
         `)
  console.log("working")
}else if (document.getElementById("clientcoursetype").value=="Languages") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="French">
  <label class="form-check-label" for="inlineCheckbox2">French</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Yoruba">
  <label class="form-check-label" for="inlineCheckbox2">Yoruba</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Igbo">
  <label class="form-check-label" for="inlineCheckbox2">Igbo</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="German">
  <label class="form-check-label" for="inlineCheckbox2">German</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Hausa">
  <label class="form-check-label" for="inlineCheckbox2">Hausa</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="arabic" value="Arabic">
  <label class="form-check-label" for="inlineCheckbox2">Arabic</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Spanish">
  <label class="form-check-label" for="inlineCheckbox2">Spanish</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Ibibio">
  <label class="form-check-label" for="inlineCheckbox2">Ibibio</label>
 
                    </div>
                    
     
         `)
  console.log("working")
}else if (document.getElementById("clientcoursetype").value=="Computer") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Computer Science">
  <label class="form-check-label" for="inlineCheckbox2">Computer Science</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Microsoft Excel">
  <label class="form-check-label" for="inlineCheckbox2">Microsoft Excel</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Microsoft Word">
  <label class="form-check-label" for="inlineCheckbox2">Microsoft Word</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Basic Computing">
  <label class="form-check-label" for="inlineCheckbox2">Basic Computing</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Microsoft PowerPoint">
  <label class="form-check-label" for="inlineCheckbox2">Microsoft PowerPoint</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="arabic" value="Web Design">
  <label class="form-check-label" for="inlineCheckbox2">Web Design</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Autodesk AutoCAD">
  <label class="form-check-label" for="inlineCheckbox2">Autodesk AutoCAD</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Graphic Design">
  <label class="form-check-label" for="inlineCheckbox2">Graphic Design</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Blog Management">
  <label class="form-check-label" for="inlineCheckbox2">Blog Management</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Video Editing">
  <label class="form-check-label" for="inlineCheckbox2">Video Editing</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Motion Graphics">
  <label class="form-check-label" for="inlineCheckbox2">Motion Graphics</label>
 
                    </div>
     
         `)
  console.log("working")
}else if (document.getElementById("clientcoursetype").value=="Arts") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Christian Religious Studies">
  <label class="form-check-label" for="inlineCheckbox2">Christian Religious Studies</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Fine Art">
  <label class="form-check-label" for="inlineCheckbox2">Fine Art</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Home Economics">
  <label class="form-check-label" for="inlineCheckbox2">Home Economics</label>
 
                    </div>
                    <div class="col-lg">
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Create Arts">
  <label class="form-check-label" for="inlineCheckbox2">Create Arts</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Food">
  <label class="form-check-label" for="inlineCheckbox2">Food &amp; Nutrition</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox" id="Drawing" value="Drawing">
  <label class="form-check-label" for="inlineCheckbox2">Drawing</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Political Science">
  <label class="form-check-label" for="inlineCheckbox2">Political Science</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Law">
  <label class="form-check-label" for="inlineCheckbox2">Law</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Nigerian History">
  <label class="form-check-label" for="inlineCheckbox2">Nigerian History</label>
 
                    </div>
                     
     
         `)
  console.log("working")
}else if (document.getElementById("clientcoursetype").value=="Beauty") {
  $("#subjectcourse")
  .html(`
            <div class="col-lg" >
    <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Makeup">
  <label class="form-check-label" for="inlineCheckbox2">Makeup</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Fashion Design">
  <label class="form-check-label" for="inlineCheckbox2">Fashion Design</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Beadmaking">
  <label class="form-check-label" for="inlineCheckbox2">Beadmaking</label>
 
                    </div>
                    <div class="col-lg">
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="Skin Care">
  <label class="form-check-label" for="inlineCheckbox2">Skin Care consultant</label>
 
                    </div>
                    <div class="col-lg" >
 
  <input class="form-check-input" style="float: left !important; margin:5px -13px !important;" type="checkbox"  value="makeup and makeover">
  <label class="form-check-label" for="inlineCheckbox2">makeup and makeover</label>
 
                    </div>
                     
                     
     
         `)
  console.log("working")
}

}

 // Get rid of small loading animation
 // [...document.querySelectorAll(".input-location-dependant")].forEach(element =>
  //  element.classList.toggle("d-none")
 // );

  // Function to set multiple attributes at once
  // const setAttributes = (el, attrs) => {
  //   for (var key in attrs) {
  //     el.setAttribute(key, attrs[key]);
  //   }
  // };

  // const toggleSubject = target => {
  //   let state = target.value,                                                         // Get value of state
  //     selectLGAOption = ["Select Courses..."],                                            // Define this once so as not to repeat it multiple times
  //     lgaList = {
  //       Mathematics: [
  //         "Basic Mathematics",
  //         "General Mathematics",
  //         "Quantitative Reasoning",
  //         "Algebra",
  //         "Further Mathematics",
  //         "Arithmetic",
  //         "Calculus",
  //         "Trigonometry",
  //         "SAT Math",
  //         "Geometry" 
  //       ],
  //       English: [
  //         "English Language",
  //         "Verbal Reasoning",
  //         "English Grammar",
  //         "Literature in English",
  //         "Spellings",
  //         "Reading Comprehension",
  //         "TOEFL",
  //         "Public Speaking",
  //         "Essay Writing" 
  //       ],
  //       Exam: [
  //         "IELTS",
  //         "SAT Math",
  //         "GRE",
  //         "TOEFL",
  //         "GMAT",
  //         "ICAN",
  //         "SAT Writing",
  //         "ACCA",
  //         "SAT Reading",
  //         "PMP" 
  //       ],
  //       Science: [
  //         "Basic Sciences",
  //         "Chemistry",
  //         "Biology",
  //         "Physics",
  //         "Basic Technology",
  //         "Agricultural Science",
  //         "Organic Chemistry",
  //         "Inorganic Chemistry",
  //         "Geography" 
  //       ],

  //       Business: [
  //         "Economics",
  //         "Principles of Accounting",
  //         "Commerce",
  //         "Social Studies",
  //         "Government",
  //         "Business Studies",
  //         "Public Speaking",
  //         "Civic Education",
  //         "Career Counselling",
  //         "Writing Business Plan" 
  //       ],
  //       Music: [
  //         "Piano",
  //         "Music Theory",
  //         "Guitar",
  //         "Voice Training",
  //         "Singing",
  //         "Saxophone",
  //         "Violin",
  //         "Drums",
  //         "Trumpet",
  //         "Flute" 
  //       ],

  //      Languages: [
  //         "French Language",
  //         "Yoruba Language",
  //         "Igbo Language",
  //         "German Language",
  //         "Hausa Language",
  //         "Arabic Language",
  //         "Spanish Language",
  //         "Ibibio Language"
  //       ],
  //       Computer: [
  //         "Computer Science",
  //         "Microsoft Excel",
  //         "Microsoft Word",
  //         "Basic Computing",
  //         "Microsoft PowerPoint",
  //         "Web Design",
  //         "Autodesk AutoCAD",
  //         "Graphic Design",
  //         "Blog Management" 
  //       ],
  //       Arts: [
  //         "Christian Religious Studies",
  //         "Fine Art",
  //         "Home Economics",
  //         "Creative Arts",
  //         "Food &amp; Nutrition",
  //         "History",
  //         "Drawing",
  //         "Political Science",
  //         "Law",
  //         "Nigerian History" 
  //       ],
  //       "BEAUTY": [
  //         "Makeup",
  //         "Sewing",
  //         "Beadmaking",
  //         "skin care consultant",
  //         "makeup and makeover" 
  //       ],

  //       Delta: [
  //         "Aniocha North",
  //         "Aniocha South",
  //         "Bomadi",
  //         "Burutu",
  //         "Ethiope East",
  //         "Ethiope West",
  //         "Ika North East",
  //         "Ika South",
  //         "Isoko North",
  //         "Isoko South",
  //         "Ndokwa East",
  //         "Ndokwa West",
  //         "Okpe",
  //         "Oshimili North",
  //         "Oshimili South",
  //         "Patani",
  //         "Sapele",
  //         "Udu",
  //         "Ughelli North",
  //         "Ughelli South",
  //         "Ukwuani",
  //         "Uvwie",
  //         "Warri North",
  //         "Warri South",
  //         "Warri South West"
  //       ],

  //       Ebonyi: [
  //         "Abakaliki",
  //         "Afikpo North",
  //         "Afikpo South",
  //         "Ebonyi",
  //         "Ezza North",
  //         "Ezza South",
  //         "Ikwo",
  //         "Ishielu",
  //         "Ivo",
  //         "Izzi",
  //         "Ohaozara",
  //         "Ohaukwu",
  //         "Onicha"
  //       ],
  //       Edo: [
  //         "Akoko-Edo",
  //         "Egor",
  //         "Esan Central",
  //         "Esan North-East",
  //         "Esan South-East",
  //         "Esan West",
  //         "Etsako Central",
  //         "Etsako East",
  //         "Etsako West",
  //         "Igueben",
  //         "Ikpoba Okha",
  //         "Orhionmwon",
  //         "Oredo",
  //         "Ovia North-East",
  //         "Ovia South-West",
  //         "Owan East",
  //         "Owan West",
  //         "Uhunmwonde"
  //       ],

  //       Ekiti: [
  //         "Ado Ekiti",
  //         "Efon",
  //         "Ekiti East",
  //         "Ekiti South-West",
  //         "Ekiti West",
  //         "Emure",
  //         "Gbonyin",
  //         "Ido Osi",
  //         "Ijero",
  //         "Ikere",
  //         "Ikole",
  //         "Ilejemeje",
  //         "Irepodun-Ifelodun",
  //         "Ise-Orun",
  //         "Moba",
  //         "Oye"
  //       ],
  //       Rivers: [
  //         "Port Harcourt",
  //         "Obio-Akpor",
  //         "Okrika",
  //         "Ogu–Bolo",
  //         "Eleme",
  //         "Tai",
  //         "Gokana",
  //         "Khana",
  //         "Oyigbo",
  //         "Opobo–Nkoro",
  //         "Andoni",
  //         "Bonny",
  //         "Degema",
  //         "Asari-Toru",
  //         "Akuku-Toru",
  //         "Abua–Odual",
  //         "Ahoada West",
  //         "Ahoada East",
  //         "Ogba–Egbema–Ndoni",
  //         "Emohua",
  //         "Ikwerre",
  //         "Etche",
  //         "Omuma"
  //       ],
  //       Enugu: [
  //         "Aninri",
  //         "Awgu",
  //         "Enugu East",
  //         "Enugu North",
  //         "Enugu South",
  //         "Ezeagu",
  //         "Igbo Etiti",
  //         "Igbo Eze North",
  //         "Igbo Eze South",
  //         "Isi Uzo",
  //         "Nkanu East",
  //         "Nkanu West",
  //         "Nsukka",
  //         "Oji River",
  //         "Udenu",
  //         "Udi",
  //         "Uzo Uwani"
  //       ],
  //       FCT: [
  //         "Abaji",
  //         "Bwari",
  //         "Gwagwalada",
  //         "Kuje",
  //         "Kwali",
  //         "Municipal Area Council"
  //       ],
  //       Gombe: [
  //         "Akko",
  //         "Balanga",
  //         "Billiri",
  //         "Dukku",
  //         "Funakaye",
  //         "Gombe",
  //         "Kaltungo",
  //         "Kwami",
  //         "Nafada",
  //         "Shongom",
  //         "Yamaltu-Deba"
  //       ],
  //       Imo: [
  //         "Aboh Mbaise",
  //         "Ahiazu Mbaise",
  //         "Ehime Mbano",
  //         "Ezinihitte",
  //         "Ideato North",
  //         "Ideato South",
  //         "Ihitte-Uboma",
  //         "Ikeduru",
  //         "Isiala Mbano",
  //         "Isu",
  //         "Mbaitoli",
  //         "Ngor Okpala",
  //         "Njaba",
  //         "Nkwerre",
  //         "Nwangele",
  //         "Obowo",
  //         "Oguta",
  //         "Ohaji-Egbema",
  //         "Okigwe",
  //         "Orlu",
  //         "Orsu",
  //         "Oru East",
  //         "Oru West",
  //         "Owerri Municipal",
  //         "Owerri North",
  //         "Owerri West",
  //         "Unuimo"
  //       ],
  //       Jigawa: [
  //         "Auyo",
  //         "Babura",
  //         "Biriniwa",
  //         "Birnin Kudu",
  //         "Buji",
  //         "Dutse",
  //         "Gagarawa",
  //         "Garki",
  //         "Gumel",
  //         "Guri",
  //         "Gwaram",
  //         "Gwiwa",
  //         "Hadejia",
  //         "Jahun",
  //         "Kafin Hausa",
  //         "Kazaure",
  //         "Kiri Kasama",
  //         "Kiyawa",
  //         "Kaugama",
  //         "Maigatari",
  //         "Malam Madori",
  //         "Miga",
  //         "Ringim",
  //         "Roni",
  //         "Sule Tankarkar",
  //         "Taura",
  //         "Yankwashi"
  //       ],
  //       Kaduna: [
  //         "Birnin Gwari",
  //         "Chikun",
  //         "Giwa",
  //         "Igabi",
  //         "Ikara",
  //         "Jaba",
  //         "Jema a",
  //         "Kachia",
  //         "Kaduna North",
  //         "Kaduna South",
  //         "Kagarko",
  //         "Kajuru",
  //         "Kaura",
  //         "Kauru",
  //         "Kubau",
  //         "Kudan",
  //         "Lere",
  //         "Makarfi",
  //         "Sabon Gari",
  //         "Sanga",
  //         "Soba",
  //         "Zangon Kataf",
  //         "Zaria"
  //       ],
  //       Kano: [
  //         "Ajingi",
  //         "Albasu",
  //         "Bagwai",
  //         "Bebeji",
  //         "Bichi",
  //         "Bunkure",
  //         "Dala",
  //         "Dambatta",
  //         "Dawakin Kudu",
  //         "Dawakin Tofa",
  //         "Doguwa",
  //         "Fagge",
  //         "Gabasawa",
  //         "Garko",
  //         "Garun Mallam",
  //         "Gaya",
  //         "Gezawa",
  //         "Gwale",
  //         "Gwarzo",
  //         "Kabo",
  //         "Kano Municipal",
  //         "Karaye",
  //         "Kibiya",
  //         "Kiru",
  //         "Kumbotso",
  //         "Kunchi",
  //         "Kura",
  //         "Madobi",
  //         "Makoda",
  //         "Minjibir",
  //         "Nasarawa",
  //         "Rano",
  //         "Rimin Gado",
  //         "Rogo",
  //         "Shanono",
  //         "Sumaila",
  //         "Takai",
  //         "Tarauni",
  //         "Tofa",
  //         "Tsanyawa",
  //         "Tudun Wada",
  //         "Ungogo",
  //         "Warawa",
  //         "Wudil"
  //       ],
  //       Katsina: [
  //         "Bakori",
  //         "Batagarawa",
  //         "Batsari",
  //         "Baure",
  //         "Bindawa",
  //         "Charanchi",
  //         "Dandume",
  //         "Danja",
  //         "Dan Musa",
  //         "Daura",
  //         "Dutsi",
  //         "Dutsin Ma",
  //         "Faskari",
  //         "Funtua",
  //         "Ingawa",
  //         "Jibia",
  //         "Kafur",
  //         "Kaita",
  //         "Kankara",
  //         "Kankia",
  //         "Katsina",
  //         "Kurfi",
  //         "Kusada",
  //         "Mai Adua",
  //         "Malumfashi",
  //         "Mani",
  //         "Mashi",
  //         "Matazu",
  //         "Musawa",
  //         "Rimi",
  //         "Sabuwa",
  //         "Safana",
  //         "Sandamu",
  //         "Zango"
  //       ],
  //       Kebbi: [
  //         "Aleiro",
  //         "Arewa Dandi",
  //         "Argungu",
  //         "Augie",
  //         "Bagudo",
  //         "Birnin Kebbi",
  //         "Bunza",
  //         "Dandi",
  //         "Fakai",
  //         "Gwandu",
  //         "Jega",
  //         "Kalgo",
  //         "Koko Besse",
  //         "Maiyama",
  //         "Ngaski",
  //         "Sakaba",
  //         "Shanga",
  //         "Suru",
  //         "Wasagu Danko",
  //         "Yauri",
  //         "Zuru"
  //       ],
  //       Kogi: [
  //         "Adavi",
  //         "Ajaokuta",
  //         "Ankpa",
  //         "Bassa",
  //         "Dekina",
  //         "Ibaji",
  //         "Idah",
  //         "Igalamela Odolu",
  //         "Ijumu",
  //         "Kabba Bunu",
  //         "Kogi",
  //         "Lokoja",
  //         "Mopa Muro",
  //         "Ofu",
  //         "Ogori Magongo",
  //         "Okehi",
  //         "Okene",
  //         "Olamaboro",
  //         "Omala",
  //         "Yagba East",
  //         "Yagba West"
  //       ],
  //       Kwara: [
  //         "Asa",
  //         "Baruten",
  //         "Edu",
  //         "Ekiti",
  //         "Ifelodun",
  //         "Ilorin East",
  //         "Ilorin South",
  //         "Ilorin West",
  //         "Irepodun",
  //         "Isin",
  //         "Kaiama",
  //         "Moro",
  //         "Offa",
  //         "Oke Ero",
  //         "Oyun",
  //         "Pategi"
  //       ],
  //       Lagos: [
  //         "Agege",
  //         "Ajeromi-Ifelodun",
  //         "Alimosho",
  //         "Amuwo-Odofin",
  //         "Apapa",
  //         "Badagry",
  //         "Epe",
  //         "Eti Osa",
  //         "Ibeju-Lekki",
  //         "Ifako-Ijaiye",
  //         "Ikeja",
  //         "Ikorodu",
  //         "Kosofe",
  //         "Lagos Island",
  //         "Lagos Mainland",
  //         "Mushin",
  //         "Ojo",
  //         "Oshodi-Isolo",
  //         "Shomolu",
  //         "Surulere"
  //       ],
  //       Nasarawa: [
  //         "Akwanga",
  //         "Awe",
  //         "Doma",
  //         "Karu",
  //         "Keana",
  //         "Keffi",
  //         "Kokona",
  //         "Lafia",
  //         "Nasarawa",
  //         "Nasarawa Egon",
  //         "Obi",
  //         "Toto",
  //         "Wamba"
  //       ],
  //       Niger: [
  //         "Agaie",
  //         "Agwara",
  //         "Bida",
  //         "Borgu",
  //         "Bosso",
  //         "Chanchaga",
  //         "Edati",
  //         "Gbako",
  //         "Gurara",
  //         "Katcha",
  //         "Kontagora",
  //         "Lapai",
  //         "Lavun",
  //         "Magama",
  //         "Mariga",
  //         "Mashegu",
  //         "Mokwa",
  //         "Moya",
  //         "Paikoro",
  //         "Rafi",
  //         "Rijau",
  //         "Shiroro",
  //         "Suleja",
  //         "Tafa",
  //         "Wushishi"
  //       ],
  //       Ogun: [
  //         "Abeokuta North",
  //         "Abeokuta South",
  //         "Ado-Odo Ota",
  //         "Egbado North",
  //         "Egbado South",
  //         "Ewekoro",
  //         "Ifo",
  //         "Ijebu East",
  //         "Ijebu North",
  //         "Ijebu North East",
  //         "Ijebu Ode",
  //         "Ikenne",
  //         "Imeko Afon",
  //         "Ipokia",
  //         "Obafemi Owode",
  //         "Odeda",
  //         "Odogbolu",
  //         "Ogun Waterside",
  //         "Remo North",
  //         "Shagamu"
  //       ],
  //       Ondo: [
  //         "Akoko North-East",
  //         "Akoko North-West",
  //         "Akoko South-West",
  //         "Akoko South-East",
  //         "Akure North",
  //         "Akure South",
  //         "Ese Odo",
  //         "Idanre",
  //         "Ifedore",
  //         "Ilaje",
  //         "Ile Oluji-Okeigbo",
  //         "Irele",
  //         "Odigbo",
  //         "Okitipupa",
  //         "Ondo East",
  //         "Ondo West",
  //         "Ose",
  //         "Owo"
  //       ],
  //       Osun: [
  //         "Atakunmosa East",
  //         "Atakunmosa West",
  //         "Aiyedaade",
  //         "Aiyedire",
  //         "Boluwaduro",
  //         "Boripe",
  //         "Ede North",
  //         "Ede South",
  //         "Ife Central",
  //         "Ife East",
  //         "Ife North",
  //         "Ife South",
  //         "Egbedore",
  //         "Ejigbo",
  //         "Ifedayo",
  //         "Ifelodun",
  //         "Ila",
  //         "Ilesa East",
  //         "Ilesa West",
  //         "Irepodun",
  //         "Irewole",
  //         "Isokan",
  //         "Iwo",
  //         "Obokun",
  //         "Odo Otin",
  //         "Ola Oluwa",
  //         "Olorunda",
  //         "Oriade",
  //         "Orolu",
  //         "Osogbo"
  //       ],
  //       Oyo: [
  //         "Afijio",
  //         "Akinyele",
  //         "Atiba",
  //         "Atisbo",
  //         "Egbeda",
  //         "Ibadan North",
  //         "Ibadan North-East",
  //         "Ibadan North-West",
  //         "Ibadan South-East",
  //         "Ibadan South-West",
  //         "Ibarapa Central",
  //         "Ibarapa East",
  //         "Ibarapa North",
  //         "Ido",
  //         "Irepo",
  //         "Iseyin",
  //         "Itesiwaju",
  //         "Iwajowa",
  //         "Kajola",
  //         "Lagelu",
  //         "Ogbomosho North",
  //         "Ogbomosho South",
  //         "Ogo Oluwa",
  //         "Olorunsogo",
  //         "Oluyole",
  //         "Ona Ara",
  //         "Orelope",
  //         "Ori Ire",
  //         "Oyo",
  //         "Oyo East",
  //         "Saki East",
  //         "Saki West",
  //         "Surulere"
  //       ],
  //       Plateau: [
  //         "Bokkos",
  //         "Barkin Ladi",
  //         "Bassa",
  //         "Jos East",
  //         "Jos North",
  //         "Jos South",
  //         "Kanam",
  //         "Kanke",
  //         "Langtang South",
  //         "Langtang North",
  //         "Mangu",
  //         "Mikang",
  //         "Pankshin",
  //         "Qua an Pan",
  //         "Riyom",
  //         "Shendam",
  //         "Wase"
  //       ],
  //       Sokoto: [
  //         "Binji",
  //         "Bodinga",
  //         "Dange Shuni",
  //         "Gada",
  //         "Goronyo",
  //         "Gudu",
  //         "Gwadabawa",
  //         "Illela",
  //         "Isa",
  //         "Kebbe",
  //         "Kware",
  //         "Rabah",
  //         "Sabon Birni",
  //         "Shagari",
  //         "Silame",
  //         "Sokoto North",
  //         "Sokoto South",
  //         "Tambuwal",
  //         "Tangaza",
  //         "Tureta",
  //         "Wamako",
  //         "Wurno",
  //         "Yabo"
  //       ],
  //       Taraba: [
  //         "Ardo Kola",
  //         "Bali",
  //         "Donga",
  //         "Gashaka",
  //         "Gassol",
  //         "Ibi",
  //         "Jalingo",
  //         "Karim Lamido",
  //         "Kumi",
  //         "Lau",
  //         "Sardauna",
  //         "Takum",
  //         "Ussa",
  //         "Wukari",
  //         "Yorro",
  //         "Zing"
  //       ],
  //       Yobe: [
  //         "Bade",
  //         "Bursari",
  //         "Damaturu",
  //         "Fika",
  //         "Fune",
  //         "Geidam",
  //         "Gujba",
  //         "Gulani",
  //         "Jakusko",
  //         "Karasuwa",
  //         "Machina",
  //         "Nangere",
  //         "Nguru",
  //         "Potiskum",
  //         "Tarmuwa",
  //         "Yunusari",
  //         "Yusufari"
  //       ],
  //       Zamfara: [
  //         "Anka",
  //         "Bakura",
  //         "Birnin Magaji Kiyaw",
  //         "Bukkuyum",
  //         "Bungudu",
  //         "Gummi",
  //         "Gusau",
  //         "Kaura Namoda",
  //         "Maradun",
  //         "Maru",
  //         "Shinkafi",
  //         "Talata Mafara",
  //         "Chafe",
  //         "Zurmi"
  //       ]
  //     }[state],                                                                       // Ternary switch operator to show list of LGAs based on chosen state
  //     lgas = [...selectLGAOption, ...Object.values(lgaList)],                         // Join select LGA option with list of LGAs
  //     form = target.parentElement.parentElement.parentElement.parentElement,          // Get parent up to the forth generation just in case LGA select element is deeply nested
  //     lgaSelect = form.querySelector(".select-course"),                                  // Get the LGA select element
  //     length = lgaSelect.options.length;                                              // Get number of options already existing in LGA select element

  //   // Clear LGS select element
  //   for (i = length - 1; i >= 0; i--) {
  //     lgaSelect.options[i] = null;
  //   }

  //   // Populate LGA select element
  //   lgas.forEach(lga => {
  //     let opt = document.createElement("option");                                     // Create option element
  //     opt.appendChild(document.createTextNode(lga));                                  // Append LGA to it
  //     opt.value = lga;                                                                // Set the value to LGA

  //     // Make option asking you to select unclickable
  //     lga.includes("elect")
  //       ? setAttributes(opt, { disabled: "disabled", selected: "selected" })
  //       : "";

  //     // Add this option element to LGA select element
  //     lgaSelect.appendChild(opt);
  //   });
  // };
