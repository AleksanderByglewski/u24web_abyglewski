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
        },
        columnType: {
            type: 'string',
            default: 'full'
        }
    },

    edit: function (props) {
        const { attributes: { name, placeholder, inputType, columnType }, setAttributes } = props;
        
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

                    <PanelBody title="Layout Settings">
                        <SelectControl
                            label="Column Type"
                            value={columnType}
                            options={[
                                { label: 'Half Width Left', value: 'half-left' },
                                { label: 'Half Width Right', value: 'half-right' },
                                { label: 'Full Width', value: 'full' },
                            ]}
                            onChange={(newType) => setAttributes({ columnType: newType })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className={`mb-3 ps-3 pe-3 pe-md-1 ps-md-0 ${columnType === 'full' ? "col-12" : "col-12 col-md-6"}`}>
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

        
        const { attributes: { name, placeholder, inputType, columnType } } = props;
        //half-left
        //wp-block-u24web-contact-input col-12 col-md-6 col-12 mb-3 ps-3 pe-3 pe-md-1 ps-md-0 

        //half-rigth
        //wp-block-u24web-contact-input col-12 col-md-6 mb-3 ps-md-1 ps-3 pe-3 pe-md-0

        let additionalClasses;
        switch(columnType) {
            case 'full':
                additionalClasses = 'col-12 mb-3 ps-3 pe-3 pe-md-1 ps-md-0';
                break;
            case 'half-left':
                additionalClasses = 'col-12 col-md-6  mb-3 ps-3 pe-3 pe-md-1 ps-md-0 ';
                break;
            case 'half-right':
                additionalClasses = 'col-12 col-md-6 mb-3 ps-3 pe-3 pe-md-0 ps-md-1 ';
                break;
            default:
                additionalClasses = '';
        }

        return (
            <div className={additionalClasses}>
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
