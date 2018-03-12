$('h1').filter('[id]').each(function () {
    $(this).html('<a class="h-link h-link-1" href="#'+$(this).attr('id')+'">' + '#' + '</a>' + ' ' + $(this).text());
});
$('h2').filter('[id]').each(function () {
    $(this).html('<a class="h-link h-link-2" href="#'+$(this).attr('id')+'">' + '##' + '</a>' + ' ' + $(this).text());
});
$('h3').filter('[id]').each(function () {
    $(this).html('<a class="h-link h-link-3" href="#'+$(this).attr('id')+'">' + '###' + '</a>' + ' ' + $(this).text());
});
$('h4').filter('[id]').each(function () {
    $(this).html('<a class="h-link h-link-4" href="#'+$(this).attr('id')+'">' + '####' + '</a>' + ' ' + $(this).text());
});
$('h5').filter('[id]').each(function () {
    $(this).html('<a class="h-link h-link-5" href="#'+$(this).attr('id')+'">' + '#####' + '</a>' + ' ' + $(this).text());
});