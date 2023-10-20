import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

// Define a template for the InnerBlocks
const MY_TEMPLATE = [
    ['u24web/contact-title', {}],
    ['u24web/contact-description', {}],
    ['u24web/contact-form', {}]
];

registerBlockType('u24web/contact-section', {
    title: 'Contact Section',

    attributes: {
        sectionTitle: {
            type: 'string',
            default: 'Contact Us'
        },
    },

    edit: function (props) {
        return (
            <section className="container py-xl-5 py-3">
                <RichText
                    tagName="h2"
                    className="section-title"
                    value={props.attributes.sectionTitle}
                    onChange={(value) => props.setAttributes({ sectionTitle: value })}
                />
                <InnerBlocks
                    template={MY_TEMPLATE}
                    //templateLock="all"  // This line locks the template, users can't add or remove blocks, remove if not needed
                />
            </section>
        );
    },

    save: function (props) {
        return (
            <section className="container py-xl-5 py-3">
                <RichText.Content
                    tagName="h2"
                    className="section-title"
                    value={props.attributes.sectionTitle}
                />
                <InnerBlocks.Content />
            </section>
        );
    },
});