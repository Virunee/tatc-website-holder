// wait for the DOM to be loaded
$(document).ready(function() {
    // bind 'myForm' and provide a simple callback function
    $('#myForm').ajaxForm(function() {
        alert("Thanks! We've received your message and will try to get back to you within 24 hours.");
        $( '#myForm' ).each(function(){
          this.reset();
        });
    });
});
