


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
	["u24web/gallery-card"],
    ["u24web/gallery-card-wide"],
    ["u24web/gallery-card-full"]
];


registerBlockType( 'u24web/gallery-portfolio', {
    title: 'Gallery Portfolio',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'Portfolio Grid'
        },
    },
    edit: function(props) {
        return (
            <>
<section className="container d-md-flex align-items-center justify-content-between pb-3 pt-3">


<RichText
                    tagName="h1"
                    className="text-nowrap mb-md-4 pe-md-5"
                    placeholder="Portfolio Grid"
                    value={props.attributes.textContent}
                    onChange={(value) => props.setAttributes({ textContent: value })}
                />
 

<nav className="overflow-auto">
          {/* <ul className="nav nav-tabs-alt flex-nowrap border-0">
            <li className="nav-item">
              <a href="#" className="nav-link text-nowrap active">All Works</a>
            </li>
          
            <li className="nav-item">
              <a href="#" className="nav-link text-nowrap">UI / UX</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-nowrap">Motion Design</a>
            </li>
          </ul> */}
        </nav>
        </section>
<section className="container">

    <div className="row">
  
  


         
                <InnerBlocks
                        template={MY_TEMPLATE}
                        allowedBlocks={['u24web/gallery-card', "u24web/gallery-card-wide","u24web/gallery-card-full"]}
                />
            </div>
          
           </section>
           </>
        );
    },
    save: function(props) {
        return (
            <>
            <section className="container d-md-flex align-items-center justify-content-between pb-3 pt-3">


        
            <RichText.Content
                    tagName="h1"
                    className="text-nowrap mb-md-4 pe-md-5"
                    value={props.attributes.textContent}

                />
       
            
            <nav className="overflow-auto">
          {/* <ul className="nav nav-tabs-alt flex-nowrap border-0">
            <li className="nav-item">
              <a href="#" className="nav-link text-nowrap active">All Works</a>
            </li>
          
            <li className="nav-item">
              <a href="#" className="nav-link text-nowrap">UI / UX</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-nowrap">Motion Design</a>
            </li>
          </ul> */}
        </nav>
        </section>
        <section className="container">
            
            <div className="row">
      
                <InnerBlocks.Content/>
         </div>
        
         </section>
         </>
        );
    },
} );


