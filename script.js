var jsload = Date.now();


$(function() {
    $.post('/result' + location.pathname.replace('.html','') + '/' + (jsload - start) + '/' + (bodyexec - start));
});
