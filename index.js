// klik kanan
document.addEventListener('contextmenu', (e) => e.preventDefault());

function disable(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode == keyCode.charCodeAt(0);
}

// f12, ctrl+u, ctrl+shift+i, console, shift + f5

document.onkeydown = (e) => {
    if (event.keyCode === 123 || disable(e, 'I') || disable(e, 'J') || disable(e, 'C') || disable(e, 'K') || e.shiftKey === 116 || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)))

        return false;
}