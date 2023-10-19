<?php
/**
 * Plugin Name:     U24web_abyglewski
 * Description:     Blocks for the theme created by Abyglewski
 * Version:         1.0.0
 * Author:          U24web
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     Alex's elements
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_alex_giveaway_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/alecaddd-giveaway" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-alex-giveaway-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'create-block-alex-giveaway-block-editor', 'alex-giveaway' );

	$editor_css = 'build/style-index.css';
	wp_register_style(
		'create-block-alex-giveaway-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-alex-giveaway-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/alex-giveaway', array(
		'editor_script' => 'create-block-alex-giveaway-block-editor',
		'editor_style'  => 'create-block-alex-giveaway-block-editor',
		'style'         => 'create-block-alex-giveaway-block',
	) );
}
add_action( 'init', 'create_block_alex_giveaway_block_init' );




// u24webplugin/main.php

require_once plugin_dir_path( __FILE__ ) . 'src/blocks/testing/card/card-footer.php';
// require_once plugin_dir_path( __FILE__ ) . 'src/blocks/testing/card/card-image.php';
require_once plugin_dir_path( __FILE__ ) . 'src/blocks/testing/card/card-body.php';
require_once plugin_dir_path( __FILE__ ) . 'src/blocks/finisher/1-2.php';

function u24webplugin_setup() {
	add_action( 'init', 'u24web_register_finisher_1_2_block' );

	add_action( 'init', 'u24web_register_card_footer_block' );
    // add_action( 'init', 'u24web_register_card_image_block' );
	add_action( 'init', 'u24web_register_card_body_block' );

	

}

u24webplugin_setup();