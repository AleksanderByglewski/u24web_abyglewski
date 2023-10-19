


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
const MY_TEMPLATE = [
    ["u24web/random", { src: "/assets/img/landing/software-company/about-img.jpg" }]
];


registerBlockType('u24web/slide', {
    title: 'Slide',
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


            <div className="swiper-slide">
                <div className="ratio ratio-16x7 bg-secondary">
                    <MediaUpload
                        onSelect={onSelectImage}
                        type="image"
                        value={props.attributes.image}
                        render={({ open }) => (
                            <img
                                src={props.attributes.image}
                                className=""
                                style={{ opacity: 1.0 }}
                                onClick={open}
                            />
                        )}
                    />


                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-start display-4">
                    3
                </div>
            </div>


        );
    },
    save: function (props) {
        return (
            <div className="swiper-slide">
                <div className="ratio ratio-16x7 bg-secondary">
                <img 
                          src={props.attributes.image} 
                          className="w-100 h-100 object-fit-cover" 
                          style={{opacity: 1.0}} 
                        />

                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-start display-4">
                    3
                </div>
            </div>


        );
    },
});