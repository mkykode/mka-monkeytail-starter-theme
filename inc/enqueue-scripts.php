<?php
/**
 * Enqueues styles and scripts.
 *
 * @package Scripts
 */

add_action(
    'wp_enqueue_scripts', function () {

        // wp_enqueue_script( 'jquery-3', '//code.jquery.com/jquery-3.3.1.min.js', [], '3.3.1', true );
        // wp_enqueue_script('jquery');
        
        wp_enqueue_style( 'monkeytail-style', monkeytail_get_assets_folder() . '/styles/main.css' );

        wp_enqueue_script( 'main-js', monkeytail_get_assets_folder() . '/scripts/main.js', [], '1.0.0', true );
    }
);
