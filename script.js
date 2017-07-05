$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#shipD').animate({left: "-=30px"}, 1);
				break;
			// Up Arrow Pressed
			case 38:
				$('#shipD').animate({top: "-=30px"}, 1);
				break;
			// Right Arrow Pressed
			case 39:
				$('#shipD').animate({left: "+=30px"}, 1);
				break;
			// Down Arrow Pressed
			case 40:
				$('#shipD').animate({top: "+=30px"}, 1);
				break;
		}
	});
});
