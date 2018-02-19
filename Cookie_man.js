		function setListCookie () {
			var selectedValue = document.getElementById("myUL");
			var i;

			
			for (i = 0; i < 1; i++) {
				document.cookie = "cookie=" + selectedValue + "; expires=Thu, 18 May 2017 12:00:00 UTC"; 
				// needs to be in proper cookie format aka blah = blah }
			}
			}
			
		setListCookie()
		
		//alert(document.cookie)
		//console.log(document.cookie);
		
		
		
		
		
		function readListCookie () {
			var ca = document.cookie.split("=");
			alert(ca);
			var i;
			for (i = 0; i < ca.length; i++) {
				var saved_val = ca[1].value; /* this is a list item...it should be li = value...or something */
				var t = document.createTextNode(saved_val);
				var li = document.createElement("li");
				li.appendChild(t);
			}
			
		}
		readListCookie()