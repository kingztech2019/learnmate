var page = 1;
window.showPage = function(page) {
    $('.wrapper_course .post:not(#page'+page+')').hide();
    $('.wrapper_course .post#page'+page).show();
}

function prevPage() {
    if (page == 1) {
    	 
        page = $('.wrapper_course .post').length;
    } else {

        page--;
    }
    showPage(page);
}

function nextPage() {
	
    if (page == $('.wrapper_course .post').length) {

        page = 1;
    } else {
        page++;

    }
    showPage(page);
}

function categoryOne(){
	if (document.querySelector("#category").value=="computer") {
		 
		 showPage(4);
	}else if(document.querySelector("#category").value=="mathematics"){
		showPage(5);

	}else if(document.querySelector("#category").value=="language"){
		showPage(6);

	}else if(document.querySelector("#category").value=="beauty"){
		showPage(7);

	}else if(document.querySelector("#category").value=="exams"){
		showPage(8);

	}else if(document.querySelector("#category").value=="business"){
		showPage(9);

	}
}

$(document).ready(function() {
		 
    showPage(1);
         	
    $('#prev').click(prevPage);
    $('#next').click(nextPage);
});