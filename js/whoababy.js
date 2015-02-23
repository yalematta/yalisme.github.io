/**
 * I literally named this whoababy.js just so that a FOOL like you would come here.
 *
 * You should just email me if you want to borrow code or something.
 *
 * @author LayaleMatta
 */

/*global $, document, setInterval, verbage */
$(document).ready(function () {
    "use strict";
    var i = 0, looper;
    looper = setInterval(function () {
        verbage(i);
        i = i + 1;
        if (i === 8) {
            i = 0;
        }
    }, 3000);
});

function verbage(i) {
    "use strict";
    var words = ["made this website.", "likes mobile dev.", "has work experience.", "plays violin.", "commits to GitHub obsessively.", "will eat anything.", "loves hackathons."];
    $("#fillin").fadeOut(500, function () {
        $(this).text(words[i]).fadeIn(500);
    });
}

$(document).ready(verbage);
