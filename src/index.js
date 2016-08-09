module.exports = isNewline;


function isNewline(ch) {
    return isNewlineCode(ch.charCodeAt(0));
}

isNewline.code = isNewlineCode;

function isNewlineCode(charCode) {
    return charCode === 10 || charCode === 13;
}
