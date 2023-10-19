


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
    
	["u24web/swiper-1-1"],
    ["u24web/swiper-1-1"]
];


registerBlockType( 'u24web/swiper-1', {
    title: 'swiper-1',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
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