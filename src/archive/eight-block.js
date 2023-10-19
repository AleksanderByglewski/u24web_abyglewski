import { __ } from '@wordpress/i18n';
import {InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { PlainText, RichText} from '@wordpress/block-editor';
const MY_TEMPLATE = [
	["core/button", { placeholder: "Call to Action" }],
];


import '../editor.scss';


registerBlockType( 'alecadd-giveaway/my-eight-block', {
    title: 'My eight block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        left_text: {
            type: 'string',
            default: 'Aha',
        },
        right_text: {
            type: 'string',
            default: 'Bhb',
        },
    },
    edit: function( { attributes, setAttributes } ) {
        return (
            <div {...useBlockProps()}>
                <div className="row">
                    <div className="col-6">
                        <PlainText
                            placeholder="Left column text"
                            value={attributes.left_text}
                            onChange={(value) => setAttributes({ left_text: value })}
                        />
                    </div>
                    {/* <div className="col-6">
                        <RichText
                            tagName="div"
                            placeholder="Right column text"
                            value={attributes.right_text}
                            onChange={(value) => setAttributes({ right_text: value })}
                        />
                    </div> */}
                    <div class="col-6">
                    
                    <InnerBlocks  defaultAttributes={ {
                        className: 'my-class',
                    } }
				        template={MY_TEMPLATE}
				        allowedBlocks={["core/button"]}
			        />
                    
                    </div>
                </div>
            </div>
        );
    },
    save: function( { attributes } ) {
        return (
            <div {...useBlockProps.save()}>
                <div className="row">
                    <div className="col-6">
                        {attributes.left_text}
                    </div>
                    {/* <div className="col-6">
                        <RichText.Content className="btn btn-outline-primary btn-lg" tagName="button" value={attributes.right_text} />
                    </div> */}
                    <div class="col-6">
                    <div {...useBlockProps}>
                        <InnerBlocks.Content />
                    </div>
                    </div>
                </div>
            </div>
        );
    },
} );