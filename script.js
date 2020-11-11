$('#submit-answer-btn').click(function() {
    event.preventDefault();
    console.log('btn clicked');
    console.log($('input:checked').val());
})