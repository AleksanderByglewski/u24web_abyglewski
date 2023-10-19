import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, PlainText} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

const MY_TEMPLATE = [
	// ["core/image", {}],
	["core/heading", { placeholder: "Giveaway Title" }],
	// ["core/paragraph", { placeholder: "Giveaway description" }],
	// ["create-block/alecaddd-giveaway-social-row"],
	["core/button", { placeholder: "Call to Action" }],
];

import '../editor.scss';


registerBlockType( 'alecadd-giveaway/my-sixth-block', {
    title: 'My line block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        left_text:{
            default: {
				
				content: "",
			},
        },
		right_text:{
			default: {
				
				content: "",
			},
			
		},
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
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
			  <div className="col-6">
				<PlainText
				  placeholder="Right column text"
				  value={attributes.right_text}
				  onChange={(value) => setAttributes({ right_text: value })}
				/>
			  </div>
			</div>
		  </div>
		);
	  },
	  save: function( props ) {
        return (
            <div {...useBlockProps.save()}>
                <div className="row">
                    <div className="col-6">

					{props.attributes.left_text}
               		</div>
                    <div className="col-6">
					{props.attributes.right_text}
                </div>
                </div>
            </div>
        );
    },
} );