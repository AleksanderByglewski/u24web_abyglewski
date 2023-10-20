
//I would like to render out my options in the save 
/* Importing necessary components */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl, SelectControl, PanelBody  } from '@wordpress/components';

/* Registering the block type */
registerBlockType('u24web/contact-preference-select', {
    title: 'Contact Select',

    attributes: {
        selectedOption: {
            type: 'array',
            default: ['How would you prefer we contact you?', 'Email', 'Phone Call', 'Text Message']
        },
        options: {
            type: 'array',
            default: [
                { label: 'How would you prefer we contact you?', value: 'default' },
                { label: 'Email', value: 'Email' },
                { label: 'Phone Call', value: 'Phone Call' },
                { label: 'Text Message', value: 'Text Message' }
            ]
        },
        columnType: {
            type: 'string',
            default: 'full'
        },
    },

    edit: function (props) {
        const { attributes: { selectedOption, columnType, options }, setAttributes } = props;
        const blockProps = useBlockProps();
        let className = `${blockProps.className} col-12 mb-3 px-3 px-md-0`;
    
        return (
            <div {...useBlockProps({ className: 'col-12 col-md-12 mb-3 px-3 px-md-0' })}>
                <InspectorControls>
                    <PanelBody title="Layout Settings">
                        <SelectControl
                            label="Column Type"
                            value={columnType}
                            options={[
                                { label: 'Half Width left (ol-md-6)', value: 'half-left' },
                                { label: 'Half Width right (col-md-6)', value: 'half-right' },
                                { label: 'Full Width (col-12)', value: 'full' },
                            ]}
                            onChange={(newType) => setAttributes({ columnType: newType })}
                        />
                    </PanelBody>
                </InspectorControls>
    
                <SelectControl
                    multiple
                    value={selectedOption}
                    options={options}
                    onChange={(newOptions) => setAttributes({ selectedOption: newOptions })}
                />
    
                {options.map((option, index) => (
                    <TextControl
                        key={index}
                        value={option.label}
                        onChange={(newLabel) => {
                            const newOptions = [...options];
                            newOptions[index].label = newLabel;
                            setAttributes({ options: newOptions });
                        }}
                    />
                ))}
    
                <button
                    type="button"
                    onClick={() => setAttributes({ options: [...options, { label: '', value: '' }] })}
                >
                    Add Option
                </button>
    
                <button
                    type="button"
                    onClick={() => setAttributes({ options: options.slice(0, -1) })}
                >
                    Remove Last Option
                </button>
    
                <InnerBlocks />
            </div>
        );
    },
    

    save: function (props) {
        const { attributes: { selectedOption, columnType, options } } = props;
        const blockProps = useBlockProps.save();
        let className = `${blockProps.className} `;
    
        if (columnType === 'half-left') {
            className += '  col-md-6  mb-3 ps-3 pe-3 pe-md-1 ps-md-0';
        }
        else if(columnType === 'half-right'){
            className += ' col-md-6 mb-3 ps-3 pe-3 pe-md-0 ps-md-1';
        }
        else {
            className += ' col-12 col-md-12 mb-3 px-3 px-md-0';
        }
    
        return (
            <div {...useBlockProps.save({ className })}>
                <select name="contact form" class="form-select bg-transparent py-2 py-md-3" style={{borderColor: "var(--light-brown-color)", color:"#fff"}} >
                    {options.map((option, index) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <InnerBlocks.Content />
            </div>
        );
    },
});
