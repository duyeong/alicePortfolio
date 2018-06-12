
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src="pic/allFood.png";
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
    img.src = this.src = "pic/cooking3.jpeg";
}


$(function() {
    var form = $('#form');

	$(form).submit(function(event) {
		event.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function(response) {
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
	});
});