/**
 * @author LayaleMatta
*/

/*global $, document, nextBackground, setTimeout */
$(document).ready(function () {
    "use strict";
    var body = $('body'), backgrounds = new Array('url(image1.jpg)','url(image2.jpg)'), current = 0;

    function nextBackground() {
        body.css('background', backgrounds[current = ++current % backgrounds.length]);
		//body.style.backgroundSize = "100%";
        setTimeout(nextBackground, 10000);
    }
    setTimeout(nextBackground, 10000);
    body.css('background', backgrounds[0]);
});