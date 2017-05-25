<?php
/*
   Plugin Name: Conditional Woo Checkout Field Pro Toggle Fields
   Plugin URI: https://conditionalcheckoutfields.com
   Description: Toggle fields based on previously selected inputs
   Version: 1.0
   Author: Scott DeLuzio
   Author URI: https://scottdeluzio.com
   Text Domain: conditional-toggle-fields
   */

	/*  Copyright 2015-2017  Scott DeLuzio  (email : support (at) conditionalcheckoutfields.com)	*/

	function conditional_display_fields() {
		wp_enqueue_script( 'conditional-display-field', plugins_url('/js/conditional-display.js', __FILE__ ), array( 'jquery' ) );
	}
	add_action( 'wp_enqueue_scripts', 'conditional_display_fields' );