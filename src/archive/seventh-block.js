import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { PlainText} from '@wordpress/block-editor';

import '../editor.scss';


registerBlockType( 'alecadd-giveaway/my-seventh-block', {
    title: 'My upgraded block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        left_text:{
			type: 'string',
            default: "Aha"
        },
		right_text:{
			type: 'string',
			default: "Bhb"
			
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