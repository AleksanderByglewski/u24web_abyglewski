/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { Editable } from '@wordpress/block-editor';
const MY_TEMPLATE = [
	["core/image", { placeholder: "Call to Action" }],
];

registerBlockType( 'u24web/welcome-tag', {
    title: 'Image snip',
    category: 'common',
    attributes: {
        mediaURL: {
            type: 'string',
            value: ''
        },
 
        
    },
    edit: function(props) {
        return (
            <section class="container pt-5 mt-2 mt-md-4 mt-lg-5">
                     <InnerBlocks
                    template={MY_TEMPLATE}
                    allowedBlocks={false}
                />
            
          </section>
        );
    },
    save: function(props) {
        return (
            <section class="container pt-5 mt-2 mt-md-4 mt-lg-5">
                     <InnerBlocks.Content />
     
          </section>
        );
    },
} );