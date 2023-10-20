/* Importing necessary components */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/* Defining a template for the inner blocks */
const MY_TEMPLATE = [];

/* Registering the block type */
registerBlockType('u24web/contact-description', {
    title: 'Contact Form description',

    attributes: {
        textContent: {
            type: 'string',
            default: 'Please, feel yourself comfortable to fill in our contact form'
        },
    },

    edit: function (props) {
        return (
            <div {...useBlockProps()}>
                <RichText
                    className="lead text-center gold-effect react-font"
                    tagName="p"
                    style={{color: "var(--light-brown-color)"}}
                    value={props.attributes.textContent}
                    onChange={(value) => props.setAttributes({ textContent: value })}
                />
                <InnerBlocks
                    template={MY_TEMPLATE}
                />
            </div>
        );
    },

    save: function (props) {
        return (
            <div {...useBlockProps.save()}>
                <RichText.Content
                    className="lead text-center gold-effect react-font"
                    tagName="p"
                    style={{color: "var(--light-brown-color)"}}
                    value={props.attributes.textContent}
                />
                <InnerBlocks.Content />
            </div>
        );
    },
});