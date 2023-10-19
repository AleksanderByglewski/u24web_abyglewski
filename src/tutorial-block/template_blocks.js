


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
	["core/image",  { src: "/assets/img/landing/software-company/about-img.jpg" }]
];


registerBlockType( 'u24web/our-prizes-decoration', {
    title: 'Our Prizes',
    
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
    edit: function(props) {
        return (
            <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
                <InnerBlocks
                        template={MY_TEMPLATE}
                        allowedBlocks={false}
                />
            </div>
        );
    },
    save: function(props) {
        return (
            <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
                <InnerBlocks.Content />
            </div>

        );
    },
} );