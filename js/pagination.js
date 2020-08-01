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

$(document).ready(function() {
    showPage(1);
         	
    $('#prev').click(prevPage);
    $('#next').click(nextPage);
});