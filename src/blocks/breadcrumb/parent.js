


/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import {useBlockProps, RichText,  InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
const MY_TEMPLATE = [
	["u24web/breadcrumb-child", { placeholder: "Call to Action" }]
];


registerBlockType( 'u24web/breadcrumb-parent', {
    title: 'Breadcrumb parent',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
        },
    },
    edit: function(props) {
        return (
            <div >   

<nav className="container py-4 pb-0 mt-lg-3 mb-0" aria-label="breadcrumb">
  <ol className="breadcrumb mb-0 mx-md-0">
    <li className="breadcrumb-item">
      <i className="bx bx-home-alt fs-lg me-1" />
      <a href="/">Home</a>
    </li>
    <InnerBlocks
                        template={MY_TEMPLATE}
                        //I would like to allow just u24web/breadcrumb-child element insisde of my blocks
                        allowedBlocks={['u24web/breadcrumb-child']}

                />
  </ol>
</nav>

           
            </div>
        );
    },
    save: function(props) {
        return (
            <div>
                
                <nav className="container py-4 pb-0 mt-lg-3 mb-0" aria-label="breadcrumb">
  <ol className="breadcrumb mb-0 mx-md-0">
    <li className="breadcrumb-item">
      <i className="bx bx-home-alt fs-lg me-1" />
      <a href="/">Home</a>
    </li> <InnerBlocks.Content/>

  </ol>
</nav>


            </div>

        );
    },
} );