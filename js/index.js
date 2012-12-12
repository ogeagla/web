$(function() {
    $(".image")
	.click(function() { 
	    $('#image').hide();
	    $('#image').fadeIn('slow');
	    var src = $(this).attr("rel");
	    $('#image').children().attr("src",src);


	});
 
    
});



function update(newTag) {

    var active = $('ul.tabNav li.current a');


    var h = $(newTag).attr('href');
    location.hash = h;

    activeHash = $(active).attr('href');

    deactivate(activeHash);


    hash = $(newTag).attr('href');	

    activate(hash);

    updateTab(newTag);

    active = newTag;
}

function deactivate(tag) {
    $(tag).slideUp('fast', function () {
	$(tag).removeClass('current');
    });
}

function activate(tag) {
    $(tag).slideDown('normal', function () {
	$(tag).addClass('current');
    });
}

function updateTab(newTag) {

    $(newTag).parent().parent().children('.current').removeClass('current');
    $(newTag).parent().addClass('current');
}



$(document).ready(function(){

    var param = document.URL.split('#')[1];
    if((param != '') && (param != undefined)) {

	var d = $('a[href="'+window.location.hash+'"]');
	var e = $("a").filter(function() { return this.hash == location.hash; });
	update(d);

    } else {
	var a = $('ul.tabNav li.current a');

	location.hash = $(a).attr('href');

    }


    $('ul.tabNav a').click(function() {

	update(this);

	return false;
    });
}); 
