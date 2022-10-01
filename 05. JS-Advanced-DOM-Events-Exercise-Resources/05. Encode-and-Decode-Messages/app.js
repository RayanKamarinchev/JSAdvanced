function encodeAndDecodeMessages() {
    let first = document.querySelectorAll('#main div textarea')[0];
    let second = document.querySelectorAll('#main div textarea')[1];
    let encode = document.querySelectorAll('#main div button')[0];
    let decode = document.querySelectorAll('#main div button')[1];
    encode.addEventListener('click', () => {
        second.value = Array.from(first.value).map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('');
        first.value = "";
    })
    decode.addEventListener('click', () => {
        second.value = Array.from(second.value).map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join('');
    })
}