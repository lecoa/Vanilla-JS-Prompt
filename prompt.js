function show_prompt(title, message, pribtnHide = false, pribtnLabel = "Close", secBtnLabel = '', secBtnAction = '') {
    document.getElementById("modal-alert-title").innerHTML = title;
    document.getElementById("modal-alert-content").innerHTML = message;
    if (pribtnHide) {
        document.getElementById("modal-button-primary").style.display = "none";
    } else {
        document.getElementById("modal-button-primary").style.display = "inline-block";
    }
    document.getElementById("modal-button-primary").innerText = pribtnLabel;
    if (secBtnLabel != '' && secBtnAction != '') {
        document.getElementById("modal-button-secondary").innerText = secBtnLabel;
        document.getElementById("modal-button-secondary").setAttribute('onclick', secBtnAction);
        document.getElementById("modal-button-secondary").style.display = "inline-block";
        document.getElementById("modal-button-primary").classList.add("default");
    } else {
        document.getElementById("modal-button-secondary").style.display = "none";
        document.getElementById("modal-button-primary").classList.remove("default");
    }
    document.getElementById("modal-alert").style.display = "block";
}

function prompt_visible() {
    return document.getElementById("modal-alert").style.display === 'block';
}

function close_prompt() {
    document.getElementById('modal-alert').style.display = 'none';
}
