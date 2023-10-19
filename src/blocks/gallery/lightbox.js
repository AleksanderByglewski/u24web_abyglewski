


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, PlainText, InspectorControls, InnerBlocks, MediaUpload } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
    // ["u24web/sponsorzy-card-body-title"]
];


registerBlockType('u24web/lightbox', {
    title: 'lightbox',

    attributes: {

        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
        },
        textTitle: {
            type: 'string',
            value: 'missing',
            default: 'OPERACJA FURIA'
        },
        imageUrl: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img',
            default: 'https://dummyimage.com/120x40'
        },
        imageUrl2: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img',
            default: 'https://dummyimage.com/120x40'
        },
    },
    edit: function (props) {
        const { setAttributes, attributes } = props;

        function onSelectImage(media) {
            setAttributes({ imageUrl: media.url });
        }
        
        function onSelectImage2(media) {
            setAttributes({ imageUrl2: media.url });
        }
        return (
        




            <div className="card-img">
                  <a  className="glightbox w-100 h-100">
                    
                  <MediaUpload
                            onSelect={onSelectImage}
                            type="image"
                            value={props.attributes.imageUrl}
                            render={({ open }) => (
                                <img
                                   
                                    className="d-block m-1"
                                    src={props.attributes.imageUrl}
                                    onClick={open}
                                />
                            )}
                        />
                      </a>
           
              </div>


           
        );
    },
    save: function (props) {
        return (
        
            <div className="card-img">
            <a href={props.attributes.imageUrl} className="glightbox w-100 h-100">
              
                    <img
                        
                        className=""
                        src={props.attributes.imageUrl}
                    />
                </a>
     
        </div>

       





    
    
        );
    },
});