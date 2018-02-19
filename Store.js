window.onload = function(){
	var $ul = $('ul');
	
	$('#save').click( function(){
		localStorage.setItem('list', $ul.html());
	});
		
	$('#clear').click( function(){
		localStorage.clear('list');
		location.reload();
	});
	
	if(localStorage.getItem('list')){
		$ul.html(localStorage.getItem('list'));
		var myNodelist = document.getElementsByTagName("LI");
		var i;
		for (i = 0; i < myNodelist.length; i++) {
			var span = document.createElement("SPAN");
			var txt = document.createTextNode("\u00D7");
			span.className = "close";
			span.appendChild(txt);
			myNodelist[i].appendChild(span);
			
		for (i = 0; i < close.length; i++) {
			close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
}
    }
  }
	}
}