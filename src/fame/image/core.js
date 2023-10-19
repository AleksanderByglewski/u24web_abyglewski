


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
// const MY_TEMPLATE = [
//     ["u24web/random", { src: "/assets/img/landing/software-company/about-img.jpg" }]
// ];


registerBlockType('u24web/core', {
    title: 'Core image',
    attributes: {
        textContent: {
            type: 'string',
            value: ''
        },
        textDescription: {
            type: 'string',
            value: ''
        },
        textAwards: {
            type: 'string',
            value: ''
        },
        image: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img',
            default: '/assets/img/finish/27.jpg',
          },

    },
    edit: function (props) {
        function onSelectImage(media) {
            props.setAttributes({ image: media.url });
          } 
      

        return (
                    <MediaUpload
                        onSelect={onSelectImage}
                        type="image"
                        value={props.attributes.image}
                        render={({ open }) => (
                            <img
                                src={props.attributes.image}
                                onClick={open}
                            />
                        )}
                    />
        );
    },
    save: function (props) {
        return (
            <img 
            src={props.attributes.image}  
          />
        );
    },
});