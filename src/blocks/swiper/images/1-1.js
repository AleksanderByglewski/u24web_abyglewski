/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { PlainText, RichText,InnerBlocks } from '@wordpress/block-editor';
const MY_TEMPLATE = [
  ["u24web/house-item"]
];

registerBlockType('u24web/swiper-1-1', {
  title: 'swiper',

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
  edit: function (props) {
    return (

      <>
        <div className="swiper-slide  u24swiper-top__slide h-auto pb-3">
          <article className="card h-100 border-0 shadow-sm ">
            <div className="position-relative rounded-2 overflow-hidden w-100 h-100">
            <InnerBlocks
                                template={MY_TEMPLATE}
                            /> 
            </div>
          </article>
        </div>

      </>

    );
  },
  save: function (props) {
    return (
      <>
        <div className="swiper-slide  u24swiper-top__slide h-auto pb-3">
          <article className="card h-100 border-0 shadow-sm ">
            <div className="position-relative rounded-2 overflow-hidden w-100 h-100">
            <InnerBlocks.Content />
            </div>
          </article>
        </div>

      </>

    );
  },
});