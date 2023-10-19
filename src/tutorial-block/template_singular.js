


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { PlainText } from '@wordpress/block-editor';

registerBlockType( 'u24web/template-text-plain', {
    title: 'Template Text plain',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
        },
    },
    edit: function(props) {
        return (
            <div className="col-md-5 text-center text-md-start pb-5">   
                <PlainText
                
                value={props.attributes.textContent}
                onChange={ (value) => props.setAttributes({ textContent: value }) }
                />
        
            </div>
        );
    },
    save: function(props) {
        return (
            <div className="col-md-5 text-center text-md-start pb-5">
                
              {props.attributes.textContent}
            
        
            </div>

        );
    },
} );