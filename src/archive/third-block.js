import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType( 'alecadd-giveaway/my-third-block', {
    title: 'My Third Block',
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
            <div>
                <RichText
                    tagName="p"
                    value={ props.attributes.content }
                    onChange={ ( value ) => props.setAttributes( { content: value } ) }
                />
            </div>
        );
    },
    save: function( props ) {
        return (
            <div>
                <span className='text-primary'>{ props.attributes.content }</span>
            </div>
        );
    },
} );