<?php
/**
 * UCHCBronx Theme Customizer
 *
 * @package Customizer
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */

add_action(
    'customize_register', function ( $wp_customize ) {
        $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
        $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
        $wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

        if ( isset( $wp_customize->selective_refresh ) ) {
            $wp_customize->selective_refresh->add_partial(
                'blogname', array(
                    'selector'        => '.site-title a',
                    'render_callback' => 'uchcbronx_customize_partial_blogname',
                )
            );
            $wp_customize->selective_refresh->add_partial(
                'blogdescription', array(
                    'selector'        => '.site-description',
                    'render_callback' => 'uchcbronx_customize_partial_blogdescription',
                )
            );
        }

        $wp_customize->add_section(
            'comments', array(
                'title'    => __( 'Comments', 'uchcbronx' ),
                'priority' => 300,
            )
        );
        $wp_customize->add_setting(
            'comments_options', array(
                'default'   => 0,
                'transport' => 'refresh',
            )
        );
        $wp_customize->add_control(
            'comments_options', array(
                'label'       => __( 'Hide Comments' ),
                'description' => __( 'This hides all comments from the templates.' ),
                'section'     => 'comments',
                'type'        => 'checkbox',
            )
        );
    }
);

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function uchcbronx_customize_partial_blogname() {
    bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function uchcbronx_customize_partial_blogdescription() {
    bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */

add_action(
    'customize_preview_init', function () {

        wp_enqueue_script( 'uchcbronx-customizer', uchcbronx_get_assets_folder() . '/scripts/customizer.js', array( 'customize-preview' ), time(), true );
    }
);
