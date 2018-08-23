<?php
/**
 * Setup Timber.
 *
 * @package Timber
 */

// Setup views directory.
Timber::$dirname = 'resources/views';

/**
 * Timber Init Class.
 */
class StarterSite extends TimberSite {
    /**
     * Constructor
     */
    public function __construct() {
        add_filter( 'timber_context', array( $this, 'add_to_context' ) );
        add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
        parent::__construct();
    }
    /**
     * Add to Gloabl Context
     *
     * @param [type] $context
     * @return void
     */
    public function add_to_context( $context ) {
        $context['text_domain'] = 'monkeytail';
        $context['home']        = is_front_page() || is_home();
        $context['preview']     = is_customize_preview();
        $context['menu']        = new TimberMenu( 'primary-menu' );
        $context['site']        = $this;
        $context['comments']    = get_theme_mod( 'comments_options', 0 );
        $context['footer']      = wp_footer();
        return $context;
    }

    /**
     * Random Filter Function.
     *
     * @param [type] $text
     * @return void
     */
    public function myfoo( $text ) {
        $text .= ' bar!';
        return $text;
    }
    /**
     * Add to teig
     *
     * @param [type] $twig
     * @return void
     */
    public function add_to_twig( $twig ) {
        /* this is where you can add your own functions to twig */
        $twig->addExtension( new Twig_Extension_StringLoader() );
        $twig->addFilter( 'myfoo', new Twig_SimpleFilter( 'myfoo', array( $this, 'myfoo' ) ) );
        return $twig;
    }

}

new StarterSite();
