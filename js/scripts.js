// scripts.js

var span = $("span");
    span.each(function(index, element) {

      $("span:even").css('color', 'red');
      $("p:odd").css('color', 'green');
});

var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
