$(document).ready(function() {
  $('.gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {enabled:true},
								image: {titleSrc: 'title'}
        });
    });
});