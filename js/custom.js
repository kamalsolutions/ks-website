    //flexslider
     $(window).load(function() {
              $('.flexslider').flexslider({
                animation: "slide"
              });
            });

     //adding more for form
     var input = document.getElementById('uploadedfile');
var list = document.getElementById('fileList');

//empty list for now...
while (list.hasChildNodes()) {
	list.removeChild(ul.firstChild);
}

//for every file...
for (var x = 0; x < input.files.length; x++) {
	//add to list
	var li = document.createElement('li');
	li.innerHTML = 'File ' + (x + 1) + ':  ' + input.files[x].name;
	list.append(li);
}