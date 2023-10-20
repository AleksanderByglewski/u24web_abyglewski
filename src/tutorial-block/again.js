import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload } from '@wordpress/block-editor';

registerBlockType('u24web/again', {
  title: 'Again',
  attributes: {
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
                            className="" 
                            style={{opacity: 1.0}} 
                            onClick={open}
                        />
                    )}
                />
 



    );
  },



  save: function (props) {
    return (
 
        <a href={props.attributes.image} className="glightbox w-100 h-100">
                        <img 
                          src={props.attributes.image} 
                          className="" 
                          style={{opacity: 1.0}} 
                        />
                       
          </a>
    );
  },
});
