/* Importing necessary components */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';


/* Registering the block type */
registerBlockType('u24web/contact-title', {
    title: 'Contact Form Title',

    attributes: {
        textContent: {
            type: 'string',
            default: 'Contact'
        },
    },

    edit: function (props) {
        return (
            <div {...useBlockProps()}>
                <RichText
                    className="text-center display-1 text-center fw-normal gold-effect"
                    tagName="p"
                    value={props.attributes.textContent}
                    onChange={(value) => props.setAttributes({ textContent: value })}
                />
      
            </div>
        );
    },

    save: function (props) {
        return (
            <div {...useBlockProps.save()}>
                <RichText.Content
                    className="text-center display-1 text-center fw-normal gold-effect"
                    tagName="p"
                    value={props.attributes.textContent}
                />
 
            </div>
        );
    },
});
