var tape = require("tape"),
    isNewline = require("..");


var alphabet = "abcdefghijklmnopqrstuvwxyz",
    chars = (alphabet + alphabet.toUpperCase()).split(""),
    numbers = "0123456789".split(""),
    punctuation = "`~!@#$%^&*()_-+={}[]|\\:;\"'<,>.?/".split(""),
    spaces = [' ', '\t', '\u00A0', '\u2028', '\u2029', '\f', '\v'],
    newlines = ['\n', '\r'];


function testChars(assert, chars, result, name) {
    var i = -1,
        il = chars.length - 1,
        ch;

    while (i++ < il) {
        ch = chars[i];
        assert.equal(isNewline(ch), result, name);
    }
}


tape("isNewline(ch: Character) should return true if character is newline", function(assert) {

    testChars(assert, numbers, false, "should be false for numeric");
    testChars(assert, chars, false, "should be false for alphabetic");
    testChars(assert, punctuation, false, "should be false for punctuation");
    testChars(assert, spaces, false, "should be false for white space");
    testChars(assert, newlines, true, "should be true for newlines");

    assert.end();
});
