import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('u24web/simple-block', {
    title: 'Simplest Block',
    category: 'common',
    edit: function (props) {
        return (
            <div {...useBlockProps()}>
                <InnerBlocks />
            </div>
        );
    },
    save: function (props) {
        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    },
});
