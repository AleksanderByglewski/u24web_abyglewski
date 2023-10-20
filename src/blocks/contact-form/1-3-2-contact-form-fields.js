//HI chat make me a simplest block that just allows to add all inner blocks like this one below name 
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InnerBlocks,  useBlockProps } from '@wordpress/block-editor';

const CONTACT_FORM_TEMPLATE = [
    ['u24web/contact-preference-select', {}],
    ['u24web/contact-input', {}],
    ['u24web/contact-input', {}],
    ['u24web/contact-message-textarea', {}],
    ['u24web/contact-submit-button', {}],
    
];

registerBlockType('u24web/contact-form-fields', {
    title: 'Contact Form Fields',
    category: 'common',
    attributes: {
        textContent: {
            type: 'string',
            source: 'html',
            selector: 'h1',
            default: 'OPERACJA FURIA'
        },
    },
    edit: function (props) {
        return (
            <div {...useBlockProps()}>
          
           
                <div className="row">
                    <div className="col-12 col-lg-8 px-0 offset-lg-2">
                        <div className="row justify-content-center">
                            <InnerBlocks
                                template={CONTACT_FORM_TEMPLATE}
                          
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    save: function (props) {
        return (
            <div>
                
             
                <div className="row">
                    <div className="col-12 col-lg-8 px-0 offset-lg-2">
                        <div className="row justify-content-center">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});
