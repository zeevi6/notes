document.addEventListener('keydown',function (event) {
	 /* This will happen in IE */
	if (!event) {
		event = window.event;
	}
	
	if (event.keyCode === 8 &&
		((event.target || event.srcElement).tagName !== "TEXTAREA") && 
		((event.target || event.srcElement).tagName !== "INPUT")) { 
		
		if (navigator.userAgent.toLowerCase().indexOf("msie") === -1) {
			event.stopPropagation();
		} else {
			alert("prevented");
			event.returnValue = false;
		}
		
		return false;
	}
});	
