<?php
// src/card/card-image.php

function u24web_register_finisher_1_2_block() {
    register_block_type( 'u24web/finisher-1-2', array(
        'render_callback' => 'u24web_render_finisher_1_2_block',
    ) );
}

function u24web_render_finisher_1_2_block( $attributes, $content ) {
    // Here you'll fetch the post's thumbnail URL and render the HTML accordingly.
    $post = get_post();
    $thumbnail_url = get_the_post_thumbnail_url( $post, 'full' );


    $args = array(
        'category_name' => 'aktualnosci', // Use category slug
        'posts_per_page' => 5, // Number of latest posts
        'order' => 'DESC', // Latest posts
        'orderby' => 'date' // Order by date
    );
    
    $the_query = new WP_Query($args);
    $body='';
     while (  $the_query ->have_posts() ) :  $the_query ->the_post(); 
    $body.= '
    <div class="swiper-slide  u24swiper-top__slide h-auto pb-3" >
        <article class="card h-100 border-0 shadow-sm ">
            <div class="position-relative rounded-2 overflow-hidden w-100 h-100">
                <a href="'.get_the_permalink().'" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                <a href="#" class="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left">
                    <i class="bx bx-bookmark"></i>
                </a>';
                if ( has_post_thumbnail() ) {
                    $body .= '<img src="'.get_the_post_thumbnail_url().'" class="w-100 h-100 card-img-top object-fit-cover" alt="Image">';
                }
                $body .= '
                <div class="position-absolute w-100 bottom-0">
                    <div class="card-body pb-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">';
                            $posttags = get_the_tags();
                            if ($posttags) {
                                foreach($posttags as $tag) {
                                    $body .= '<a href="'.get_tag_link($tag->term_id).'" class="border border-secondary badge fs-sm text-white text-decoration-none">'.$tag->name.'</a>';
                                }
                            }
                            $body .= '
                        </div>
                        <h3 class="h5 mb-0 d-flex justify-content-between">
                            <a class="text-light " href="'.get_the_permalink().'">'.get_the_title().'</a>
                            <span class="fs-sm text-muted align-self-end font-weight-light fs-sm text-muted" style="font-weight:200">'.get_the_time('g:i a').'</span>
                        </h3>
                    </div>
                    <div class="card-footer py-4 d-none d-md-block">
                        <a href="#" class="d-flex align-items-center text-decoration-none">
                            <img src="/assets/img/avatar/40.jpg" class="rounded-circle" width="48" alt="Avatar">
                            <div class="ps-3">
          
                                <h6 class="fs-base fw-semibold mb-0 text-light">Dawid Szczepański</h6>
                                <span class="fs-sm text-muted">Deputy Director, Capital Department</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    </div>';
    endwhile; ?>

    <?php
    $output = 
    ' <section class=" container-fluid pe-0 l20 overflow-hidden py-5 pb-2">
        <div class="position-relative pe-0">
            <div class="px-xl-2">
                <div class="swiper mx-n2 overflow-visible" data-swiper-options=\'{
          "slidesPerView": 1,
          "loop": false,
          "spaceBetween": 16,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "navigation": {
            "prevEl": "#prev-news",
            "nextEl": "#next-news"
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 2
            },
            "1000": {
              "slidesPerView": 2.25
            }
          }
          }\'>
    
                    <div class="swiper-wrapper">'.
                    $body
                    .'</div>
    
                    <div class="neql20 swiper-pagination position-relative bottom-0 mt-0 mb-3"></div>
    
                    <div class="d-flex d-md-none justify-content-center">
                        <a href="/category/oferta" class="  btn btn-outline-primary rounded-pill">Zobacz naszą ofertę</a>
                    </div>
                </div>
            </div>
        </div>
    </section>';




    return $output;
}

add_action( 'init', 'u24web_register_finisher_1_2_block' );?>