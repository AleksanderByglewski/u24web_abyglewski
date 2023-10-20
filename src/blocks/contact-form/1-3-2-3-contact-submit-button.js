/* Importing necessary components */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/* Registering the block type */
registerBlockType('u24web/contact-submit-button', {
    title: 'Contact Submit Button',

    attributes: {
        buttonText: {
            type: 'string',
            source: 'html',
            selector: '.contact-us-btn',
            default: 'Contact Us'
        },
    },

    edit: function (props) {
        const blockProps = useBlockProps({ className: 'col-12 col-md-12 mb-3 px-3 px-md-0' });

        return (
            <div {...blockProps}>
                <Button
                    className="bg-transparent border-0"
                    style={{ color: 'var(--light-brown-color)' }}
                    onClick={() => console.log('Button clicked!')}
                >
                    <RichText
                        tagName="span"
                        className="contact-us-btn"
                        value={props.attributes.buttonText}
                        onChange={(newButtonText) => props.setAttributes({ buttonText: newButtonText })}
                        placeholder="Enter button text..."
                    />
                </Button>
            </div>
        );
    },

    save: function (props) {
        const blockProps = useBlockProps.save({ className: 'col-12 col-md-12 mb-3 px-3 px-md-0' });

        return (
            <div {...blockProps}>
                <a style={{ color: 'var(--light-brown-color)' }} className="btn btn-transparent w-100 py-3 fs-3 mb-3 fw-normal">
                    <button style={{ color: 'var(--light-brown-color)' }} className="bg-transparent border-0" type="submit">
                        <RichText.Content tagName="span" value={props.attributes.buttonText} className="contact-us-btn"/>
                    </button>
                </a>
            </div>
        );
    },
});
