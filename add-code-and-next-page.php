<?php
/**
 * Plugin Name: Add Code and Next Page Button
 * Plugin URI: https://dev.daanvandenbergh.com/wordpress-plugins/
 * Description: Adds 'code' and 'next page' buttons to visual editor.
 * Author: Daan van den Bergh
 * Version: 1.0.0
 * Author URI: https://dev.daanvandenbergh.com
 * License: GPL2v2 or later
 */

function acnp_enqueue_plugin_scripts($plugin_array)
{
	$plugin_array["acnp_buttons"] = plugin_dir_url(__FILE__) . "js/add-buttons.js";

	return $plugin_array;
}
add_filter("mce_external_plugins", "acnp_enqueue_plugin_scripts");

function acnp_register_buttons_editor($buttons)
{
	//register buttons with their id.
	array_push($buttons, "acnp_code");
	array_push($buttons, "acnp_nextpage");

	return $buttons;
}
add_filter("mce_buttons", "acnp_register_buttons_editor");