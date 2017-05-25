# Conditional-Field-Display
This plugin requires a bit of manual setup to work correctly. It is intended to work with the [Conditional Woo Checkout Field Pro plugin](https://conditionalcheckoutfields.com/downloads/conditional-woo-checkout-field-pro/), although it is certainly not limited to work only with that plugin.

In the /js/conditional-display.js file, there are three main functions that you can use depending on what type of fields you want to edit.

1. checkToggleFields(): This allows a field to be displayed or hidden based on whether or not a checkbox has been checked.
2. radioToggleFields(): This allows a field to be displayed or hidden based on the option selected in a group of radio buttons.
3. selectToggleFields(): This allows a field to be displayed or hidden based on the option selected from a select drop-down menu.

You will want to uncomment the appropriate function at the top of the file, as well as the function itself. If using a radio or select input to determine the visibility of another field, also uncomment the click/change in lines 7-13 at the top.

Each function is called at the time the page loads. Each will automatically hide a certain field. In the example, the field to be hidden is wrapped in a `div` with the ID `#conditional_checkout_field_pro_8`. The 8 in the field's ID is equal to the field ID in the conditional field settings.

Each function is "listening" for field ID 5 to change to a certain value to determine whether or not field ID 8 should be displayed.

## Checkbox
In the case of field ID 5 being a checkbox, it is looking to see if field ID 5 is checked before displaying field ID 8. If you want the opposite functionality (i.e. only show field ID 8 if field ID 5 is not checked), then swap out the show/hide lines in the if statement in that function.

## Radio
In the case of field ID 5 being a group of radio buttons, it is looking to see if the customer selected the value "25MB" from the radio button group before displaying field ID 8.

## Select
In the case of field ID 5 being a select drop-down menu, it is looking to see if the customer selected the value "25MB" from the menu before displaying field ID 8.

### Modify for your fields
If you right click on a field on the checkout page, and select inspect element you will be shown the HTML code that makes up your checkout page. The highlighted field should be the one you right clicked.

"Hidden" fields: If the field you right clicked is the field you want to be hidden until the customer selects an option, look for the `div` just before the field. In the example, using field ID 8, we are looking for something like this: `<div id="conditional_checkout_field_pro_8">`. Copy the value in between the quotes after `id=`. In this case it would be `conditional_checkout_field_pro_8`.

"Trigger" fields: If the field you right clicked is the field you want to use to toggle another field, you will want to look for the input's ID (not the `div` that surrounds the input. For a select menu it would look something like this: `<select name="conditional_field_5-1" id="conditional_field_5-1">`. Again, copy the value in between the quotes after `id=`. In this case it would be `conditional_field_5-1`.

To set the value of a field that should trigger the display of another field, you will want to find the value of the "trigger" field. This value can be found in two different places:

* Select menus: Find the value in between the quotes after `value=` like in this example: `<option value="This is the value you want"></option>`
* Radio buttons: Find the value in between the quotes after `value=` like in this example: `<input type="radio" name="conditional_field_5-1" id="conditional_field_5-1" value="This is the value you want">`
