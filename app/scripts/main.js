'use strict';


(function($) {
  $(document).ready(function() {
    // Add your jQuery code here


    $('.float_username').floatlabel();
    $('.float_password').floatlabel();	

    $(function(){
    	$('#menu').slicknav({
    		duration: 750,
    		label: '',
    	});
    });
    
   
    $('#clinician_search_field').floatlabel();
    

   
}); 

})(jQuery);
