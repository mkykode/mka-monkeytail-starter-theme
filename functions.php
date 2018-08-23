<?php
/**
 * UCHCBronx functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package UCHCBronx
 */

/**
 * Make sure Timber plugin is setup.
 */
require_once get_template_directory() . '/inc/timber-check.php';
/**
 * Helper Functions.
 */
require_once get_template_directory() . '/inc/helper-functions.php';

/**
 * Theme Setup.
 */
require_once get_template_directory() . '/inc/setup.php';
/**
 * Menus.
 */
require_once get_template_directory() . '/inc/menus.php';

/**
 * Enqueue scripts and styles.
 */
require_once get_template_directory() . '/inc/enqueue-scripts.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Timber setup.
 */
require get_template_directory() . '/inc/timber-setup.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
    require get_template_directory() . '/inc/jetpack.php';
}
