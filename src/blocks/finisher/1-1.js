/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { PlainText, RichText } from '@wordpress/block-editor';

registerBlockType( 'u24web/finisher-1-1', {
    title: 'Finisher-1-1',

    attributes: {
        textContent1: {
            type: 'string',
            value: '',
            default: 'Custom Software Development'
        },
        textContent2: {
          type: 'string',
          value: '',
          default: 'Ids eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam'
      },
      textContent3: {
        type: 'string',
        value: '',
        default: 'Zobacz naszą ofertę'
    },
    },
    edit: function(props) {
        return (
          <div className="dark-mode bg-dark">
          <section className="container pt-5 mb-md-0 mb-lg-0 mb-xl-0">
            <div className="row pb-1 mb-md-2 mb-lg-4 mb-xl-3">
              <div className="col-lg-12 d-flex align-items-center">
                  <RichText
                
                tagName="div"
                className="h3 mb-0  flex-grow-0"
                placeholder="     Custom Software Development"
                value={props.attributes.textContent1}
                onChange={ (value) => props.setAttributes({ textContent1: value }) }
                />
                <div className="ms-2 flex-grow-1 border-top border-light" />
              </div>
              <div className="col-lg-9 col-xl-9 pt-3 pt-sm-4 pt-lg-3 d-flex">
              
                <RichText
                
                tagName="p"
                className="mb-0"
                placeholder="       Ids eget blandit sapien cras massa lectus lorem placerat. Quam dolor
                commodo fermentum bibendum dictumst. Risus pretium eget at viverra
                eget. Sit neque adipiscing malesuada blandit justo, quam."
                value={props.attributes.textContent2}
                onChange={ (value) => props.setAttributes({ textContent2: value }) }
                />
              </div>
              <div className="col-lg-3 col-xl-3 pt-3 pt-sm-4 pt-lg-3 d-flex align-items-end justify-content-md-end">
                <a
                  href="/category/oferta"
                  className="d-none d-md-flex justify-content-end btn btn-outline-primary rounded-pill"
                >
                        <RichText
                
                tagName="div"
                className="h3 mb-0  flex-grow-0"
                placeholder="     Zobacz naszą ofertę"
                value={props.attributes.textContent3}
                onChange={ (value) => props.setAttributes({ textContent3: value }) }
                /> 
                </a>
              </div>
            </div>
            <hr />
          </section>
        </div>
        
        );
    },
    save: function(props) {
        return (
          <div className="">
          <section className="container pt-5 mb-md-0 mb-lg-0 mb-xl-0">
            <div className="row pb-1 mb-md-2 mb-lg-4 mb-xl-3">
              <div className="col-lg-12 d-flex align-items-center">
                  <RichText.Content
                
                tagName="div"
                className="h3 mb-0  flex-grow-0"
              
                value={props.attributes.textContent1}
             
                />
                <div className="ms-2 flex-grow-1 border-top border-light" />
              </div>
              <div className="col-lg-9 col-xl-9 pt-3 pt-sm-4 pt-lg-3 d-flex">
              
                <RichText.Content
                
                tagName="p"
                className="mb-0"
            
                value={props.attributes.textContent2}
          
                />
              </div>
              <div className="col-lg-3 col-xl-3 pt-3 pt-sm-4 pt-lg-3 d-flex align-items-end justify-content-md-end">
                <a
                  href="/category/oferta"
                  className="d-none d-md-flex justify-content-end btn btn-outline-primary rounded-pill"
                >
                        <RichText.Content
                
                tagName="div"
                className=""
              
                value={props.attributes.textContent3}
             
                /> 
                </a>
              </div>
            </div>
            <hr />
          </section>
        </div>
        
        

        );
    },
} );