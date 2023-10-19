/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { Editable } from '@wordpress/block-editor';
// import MyCustomBlock from './MyCustomBlock'
const MY_TEMPLATE = [
	["core/image", { placeholder: "Call to Action" }],
    ["create-block/alecaddd-giveaway-social-row"],
];

import ReusableImage from './reusable/reusable_image.js';

registerBlockType( 'u24web/diff-snip', {
    title: 'Different snip',
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

