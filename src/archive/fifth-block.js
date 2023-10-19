import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

const MY_TEMPLATE = [
	["core/image", {}],
	["core/heading", { placeholder: "Giveaway Title" }],
	["core/paragraph", { placeholder: "Giveaway description" }],
	["create-block/alecaddd-giveaway-social-row"],
	["core/button", { placeholder: "Call to Action" }],
];

import '../editor.scss';


registerBlockType( 'alecadd-giveaway/my-fifth-block', {
    title: 'My Fifth Block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },

    edit: function( props ) {
	return (
		<div {...useBlockProps}>
			<InnerBlocks
				template={MY_TEMPLATE}
				allowedBlocks={["create-block/alecaddd-giveaway-social-row"]}
			/>
            
		</div>
        );
    },
    save: function ( props ) {
        return (
            <div {...useBlockProps}>
                <InnerBlocks.Content />
            </div>
        );},
} );