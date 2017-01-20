/* Open when someone clicks on the span element */
function openNav(project) {
    document.getElementById(project).style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav(project) {
    document.getElementById(project).style.width = "0%";
}	

//Scroll smooth

$(document).ready(function(){
	$('a').on('click', function(e){
		if(this.hash !== ""){
			e.preventDefault();
			let hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				window.location.hash = hash;
			});
		}
	});
});