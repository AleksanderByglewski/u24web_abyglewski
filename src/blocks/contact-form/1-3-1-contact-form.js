/* Importing necessary components */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/* Defining a template for the inner blocks */
const MY_TEMPLATE = [['u24web/contact-form-fields', {}],];

/* Registering the block type */
registerBlockType('u24web/contact-form', {
    title: 'Contact Form',

    attributes: {
        formAction: {
            type: 'string',
            default: 'https://formsubmit.co/latreluxury@u24web.com'
        },
        captchaValue: {
            type: 'boolean',
            default: false
        }
    },

    edit: function (props) {
        return (
            <div {...useBlockProps()}>
                <form action={props.attributes.formAction} method="POST" >
               
                    <input type="hidden" name="_captcha" value="false"/>
                    <InnerBlocks
                        template={MY_TEMPLATE}
                    />
                </form>
            </div>
        );
    },

    save: function (props) {
        return (
            <div {...useBlockProps.save()}>
                <form action={props.attributes.formAction} method="POST" >
                    <input type="hidden" name="_captcha" value="false"/>
                    <InnerBlocks.Content />
                </form>
            </div>
        );
    },
});
