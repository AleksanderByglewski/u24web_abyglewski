


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
    
	["u24web/finisher-1-1"],
    ["u24web/finisher-1-2"]
];


registerBlockType( 'u24web/finisher-1', {
    title: 'finisher-1',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
        },
    },
    edit: function(props) {
        return (
            <div>   
          
                <InnerBlocks
                 template={MY_TEMPLATE}
                     
                />
            </div>
        );
    },
    save: function(props) {
        return (
            <div>
                <InnerBlocks.Content/>
            </div>

        );
    },
} );