


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, PlainText, InspectorControls, InnerBlocks, MediaUpload } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
    // ["u24web/sponsorzy-card-body-title"]
];


registerBlockType('u24web/gallery-card-full', {
    title: 'Gallery card full',

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
        






            <div >
                <div className="card card-portfolio">
                <div className="card-img">
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
                </div>
                <div className="card-body">
                    
                    <div>
                        <RichText
                        tagName="span"
                        className="text-muted"
                        placeholder="3D Render / Graphic Design / Motion Design."
                        value={props.attributes.textContent}
                        onChange={(value) => props.setAttributes({ textContent: value })}
                        />
                    </div>
                </div>
                </div>
          </div>
        );
    },
    save: function (props) {
        return (
        
            <div >
                <div className="card card-portfolio">
                <div className="card-img">
                <a href={props.attributes.imageUrl} className="glightbox w-100 h-100">
                <img
                        
                        className=""
                        src={props.attributes.imageUrl}
                    />
                     </a>
                </div>
               
                {/* <div className="card-body">
                    
                    <div>
                        <RichText.Content
                        tagName="span"
                        className="text-muted"
                        placeholder="3D Render / Graphic Design / Motion Design."
                        value={props.attributes.textContent}
                    />
                    </div>
                </div> */}
                </div>
            </div>





    
    
        );
    },
});