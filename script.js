//your JS code here. If required.
function saveToCookies(){
	let font_size = document.getElementById("fontsize").value;
	let font_color = document.getElementById("fontcolor").value;
	if(font_size<=8 || font_size>=120)
	{
		alert("Please enter Font Size range between 8 - 72");
	}else{
		setCookie("Font_Size",font_size,7);
		setCookie("Font_Color",font_color,7);
	}

}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function applyPreferences() {
    var fontSize = getCookie('Font_Size');
    var fontColor = getCookie('Font_Color');

    if (fontSize) {
        document.getElementById('fontsize').value = fontSize;
		document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    }
    if (fontColor) {
        document.getElementById('fontcolor').value = fontColor;
		document.documentElement.style.setProperty('--fontcolor', fontColor);
    }
}

window.onload = function() {
    applyPreferences();
};