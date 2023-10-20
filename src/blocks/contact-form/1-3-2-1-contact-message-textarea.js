//Please tell me why this doesn't render the proper classes
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextareaControl } from '@wordpress/components';

/* Registering the block type */
registerBlockType('u24web/contact-message-textarea', {
    title: 'Contact Message Textarea',

    attributes: {
        messageContent: {
            type: 'string',
            default: ''
        },
    },

    edit: function (props) {
        const blockProps = useBlockProps();
        return (
            <div {...blockProps} className={`${blockProps.className} col-12 col-md-12 mb-3 px-3 px-md-0`}>
                <TextareaControl
                    value={ props.attributes.messageContent }
                    onChange={(messageContent) => props.setAttributes({ messageContent })}
                    placeholder="Type your message here"
                />
                <InnerBlocks />
            </div>
        );
    },
    
    save: function (props) {
        const blockProps = useBlockProps.save();
        return (
            <div {...blockProps} className={`${blockProps.className} col-12 col-md-12 mb-3 px-3 px-md-0`}>
                <textarea class="form-control bg-transparent" style={{height: '200px',borderColor: "var(--light-brown-color)", color:"#fff"}}  name="message">
                    {props.attributes.messageContent}
                </textarea>
                <InnerBlocks.Content />
            </div>
        );
    },
});
