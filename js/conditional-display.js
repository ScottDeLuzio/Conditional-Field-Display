jQuery(document).ready(function() {
	checkToggleFields();
	//radioToggleFields();
	//selectToggleFields();
	
	/* Uncomment if using the radio or select functions */
	/*jQuery( "#conditional_field_5-1" ).click(function() {
		radioToggleFields();
	});*/

	/*jQuery( "#conditional_field_5-1" ).change(function() {
		selectToggleFields();
	});*/
});

function checkToggleFields() {
	jQuery( "#conditional_checkout_field_pro_8" ).hide();
	jQuery('#conditional_field_5-1').click(function() {
		if( jQuery(this).is(":checked")){
			jQuery("#conditional_checkout_field_pro_8").show();
		} else {
			jQuery("#conditional_checkout_field_pro_8").hide();
		}
	})
}

/*function radioToggleFields() {
	jQuery( "#conditional_checkout_field_pro_8" ).hide();
	jQuery( 'input[name=conditional_field_5-1]' ).change( function() {
		var value = jQuery('input[name=conditional_field_5-1]:checked').val();
		if( value == "25MB" ) {
			jQuery( "#conditional_checkout_field_pro_8" ).show();
		} else {
			jQuery( "#conditional_checkout_field_pro_8" ).hide();
		}
	})
}*/

/*function selectToggleFields() {
	jQuery( "#conditional_checkout_field_pro_8" ).hide();
	if( jQuery( "#conditional_field_5-1" ).val() == "25MB" ) {
		jQuery( "#conditional_checkout_field_pro_8" ).show();
	} else {
		jQuery( "#conditional_checkout_field_pro_8" ).hide();
	}
}*/