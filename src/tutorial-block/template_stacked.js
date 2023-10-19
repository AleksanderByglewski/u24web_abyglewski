


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
	["core/image", { placeholder: "Call to Action" }]
];


registerBlockType( 'u24web/template-text', {
    title: 'Template Text',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
        },
    },
    edit: function(props) {
        return (
            <div >   
                <RichText
                
                tagName="h1"
                className="mb-4"
                placeholder="OPERACJA FURIA"
                value={props.attributes.textContent}
                onChange={ (value) => props.setAttributes({ textContent: value }) }
                />
                <InnerBlocks
                        template={MY_TEMPLATE}
                        allowedBlocks={false}
                />
            </div>
        );
    },
    save: function(props) {
        return (
            <div>
                
                <RichText.Content
                tagName="h1"
                className="mb-4"
                value={props.attributes.textContent}
                />
                <InnerBlocks.Content/>
            </div>

        );
    },
} );