import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl, PanelBody, SelectControl } from '@wordpress/components';

registerBlockType('u24web/contact-input', {
    title: 'Contact Input',

    attributes: {
        name: {
            type: 'string',
            default: 'phone'
        },
        placeholder: {
            type: 'string',
            default: 'Phone'
        },
        inputType: {
            type: 'string',
            default: 'number'
        }
    },

    edit: function (props) {
        const { attributes: { name, placeholder, inputType }, setAttributes } = props;
        
        return (
            <div>
                <InspectorControls>
                    <PanelBody title="Input Settings">
                        <TextControl
                            label="Name"
                            value={name}
                            onChange={(newName) => setAttributes({ name: newName })}
                        />
                        <TextControl
                            label="Placeholder"
                            value={placeholder}
                            onChange={(newPlaceholder) => setAttributes({ placeholder: newPlaceholder })}
                        />
                        <SelectControl
                            label="Input Type"
                            value={inputType}
                            options={[
                                { label: 'Number', value: 'number' },
                                { label: 'Email', value: 'email' },
                                { label: 'Text', value: 'text' },
                            ]}
                            onChange={(newType) => setAttributes({ inputType: newType })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="col-md-6 col-12 mb-3 ps-md-1 ps-3 pe-3 ps-md-1 pe-md-0">
                    <input 
                        style={{borderColor: "var(--light-brown-color)", color:"#fff"}} 
                        type={inputType} 
                        className="form-control bg-transparent py-2 py-md-3" 
                        name={name} 
                        placeholder={placeholder}
                    />
                </div>
            </div>
        );
    },

    save: function (props) {
        const { attributes: { name, placeholder, inputType } } = props;

        return (
            <div className="col-md-6 col-12 mb-3 ps-md-1 ps-3 pe-3 ps-md-1 pe-md-0">
                <input 
                    style={{borderColor: "var(--light-brown-color)", color:"#fff"}} 
                    type={inputType} 
                    className="form-control bg-transparent py-2 py-md-3" 
                    name={name} 
                    placeholder={placeholder}
                />
            </div>
        );
    },
});
