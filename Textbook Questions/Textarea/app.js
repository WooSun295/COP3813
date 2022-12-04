let $textareaElement = $("#userName");

function textSize(event) {
   $("#stringLength").text($textareaElement.val().length);
}

/* Your solution goes here */
$textareaElement.change(textSize);
