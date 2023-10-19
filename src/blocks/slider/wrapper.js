


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
    ["u24web/slide", { src: "/assets/img/landing/software-company/about-img.jpg" }]
];


registerBlockType('u24web/wrapper', {
    title: 'Wrapper',
    attributes: {
        textContent: {
            type: 'string',
            value: ''
        },
        textDescription: {
            type: 'string',
            value: ''
        },
        textAwards: {
            type: 'string',
            value: ''
        },

    },
    edit: function (props) {
        return (

            <>
                <div
                    className="swiper swiper-nav-onhover"
                    data-swiper-options='{
                        "spaceBetween": 0,
                        "loop": true,
                        "pagination": {
                            "el": ".swiper-pagination",
                            "clickable": true
                        },
                        "navigation": {
                            "prevEl": ".btn-prev",
                            "nextEl": ".btn-next"
                        }
                        }'
                >
                    <div className="swiper-wrapper">
                            <InnerBlocks
                                template={MY_TEMPLATE}
                            /> 
                    </div>
                </div>
            </>

        );
    },
    save: function (props) {
        return (
            <>
                <div
                    className="swiper swiper-nav-onhover"
                    data-swiper-options='{
                    "spaceBetween": 0,
                    "loop": true,
                    "pagination": {
                        "el": ".swiper-pagination",
                        "clickable": true
                    },
                    "navigation": {
                        "prevEl": ".btn-prev",
                        "nextEl": ".btn-next"
                    }
                    }'
                >
                    <div className="swiper-wrapper">
                            <InnerBlocks.Content />
                    </div>
                </div>
            </>

        );
    },
});