


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { PlainText } from '@wordpress/block-editor';
const MY_TEMPLATE = [
    ["core/image", { placeholder: "Call to Action" }]
];


registerBlockType('u24web/breadcrumb-child', {
    title: 'Breadcrumb-child',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
        },
    },
    edit: function (props) {
        return (
            < >


                <li className="breadcrumb-item active" aria-current="page">
                    <PlainText
                        value={props.attributes.textContent}
                        onChange={(value) => props.setAttributes({ textContent: value })}
                    />
                </li>


            </>
        );
    },
    save: function (props) {
        return (
            <>
                <li className="breadcrumb-item active" aria-current="page">
                    {props.attributes.textContent}
                </li>
            </>

        );
    },
});