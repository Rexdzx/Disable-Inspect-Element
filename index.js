// klik kanan
document.addEventListener('contextmenu', (e) => e.preventDefault());

function disable(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode == keyCode.charCodeAt(0);
}

// f12, ctrl+u, ctrl+shift+i, console

document.onkeydown = (e) => {
    if (event.keyCode === 123 || ctrlShiftKey(e, 'I') || ctrlShiftKey(e, 'J') || ctrlShiftKey(e, 'C') || ctrlShiftKey(e, 'K') || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)))

        return false;
}