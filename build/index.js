/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/breadcrumb/child.js":
/*!****************************************!*\
  !*** ./src/blocks/breadcrumb/child.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */




var MY_TEMPLATE = [["core/image", {
  placeholder: "Call to Action"
}]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/breadcrumb-child', {
  title: 'Breadcrumb-child',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'OPERACJA FURIA'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "breadcrumb-item active",
      "aria-current": "page"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
      value: props.attributes.textContent,
      onChange: function onChange(value) {
        return props.setAttributes({
          textContent: value
        });
      }
    })));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "breadcrumb-item active",
      "aria-current": "page"
    }, props.attributes.textContent));
  }
});

/***/ }),

/***/ "./src/blocks/breadcrumb/parent.js":
/*!*****************************************!*\
  !*** ./src/blocks/breadcrumb/parent.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [["u24web/breadcrumb-child", {
  placeholder: "Call to Action"
}]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/breadcrumb-parent', {
  title: 'Breadcrumb parent',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'OPERACJA FURIA'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
      className: "container py-4 pb-0 mt-lg-3 mb-0",
      "aria-label": "breadcrumb"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
      className: "breadcrumb mb-0 mx-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "breadcrumb-item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-home-alt fs-lg me-1"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/"
    }, "Home")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE
      //I would like to allow just u24web/breadcrumb-child element insisde of my blocks
      ,
      allowedBlocks: ['u24web/breadcrumb-child']
    }))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
      className: "container py-4 pb-0 mt-lg-3 mb-0",
      "aria-label": "breadcrumb"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
      className: "breadcrumb mb-0 mx-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "breadcrumb-item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-home-alt fs-lg me-1"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/"
    }, "Home")), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/blocks/finisher/1-1.js":
/*!************************************!*\
  !*** ./src/blocks/finisher/1-1.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/*Rejestracja statycznego contentu */


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/finisher-1-1', {
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
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dark-mode bg-dark"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container pt-5 mb-md-0 mb-lg-0 mb-xl-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row pb-1 mb-md-2 mb-lg-4 mb-xl-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-lg-12 d-flex align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "div",
      className: "h3 mb-0  flex-grow-0",
      placeholder: "     Custom Software Development",
      value: props.attributes.textContent1,
      onChange: function onChange(value) {
        return props.setAttributes({
          textContent1: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ms-2 flex-grow-1 border-top border-light"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-lg-9 col-xl-9 pt-3 pt-sm-4 pt-lg-3 d-flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "p",
      className: "mb-0",
      placeholder: "       Ids eget blandit sapien cras massa lectus lorem placerat. Quam dolor\r commodo fermentum bibendum dictumst. Risus pretium eget at viverra\r eget. Sit neque adipiscing malesuada blandit justo, quam.",
      value: props.attributes.textContent2,
      onChange: function onChange(value) {
        return props.setAttributes({
          textContent2: value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-lg-3 col-xl-3 pt-3 pt-sm-4 pt-lg-3 d-flex align-items-end justify-content-md-end"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/category/oferta",
      className: "d-none d-md-flex justify-content-end btn btn-outline-primary rounded-pill"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "div",
      className: "h3 mb-0  flex-grow-0",
      placeholder: "     Zobacz nasz\u0105 ofert\u0119",
      value: props.attributes.textContent3,
      onChange: function onChange(value) {
        return props.setAttributes({
          textContent3: value
        });
      }
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null)));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container pt-5 mb-md-0 mb-lg-0 mb-xl-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row pb-1 mb-md-2 mb-lg-4 mb-xl-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-lg-12 d-flex align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "div",
      className: "h3 mb-0  flex-grow-0",
      value: props.attributes.textContent1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ms-2 flex-grow-1 border-top border-light"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-lg-9 col-xl-9 pt-3 pt-sm-4 pt-lg-3 d-flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      className: "mb-0",
      value: props.attributes.textContent2
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-lg-3 col-xl-3 pt-3 pt-sm-4 pt-lg-3 d-flex align-items-end justify-content-md-end"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/category/oferta",
      className: "d-none d-md-flex justify-content-end btn btn-outline-primary rounded-pill"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "div",
      className: "",
      value: props.attributes.textContent3
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null)));
  }
});

/***/ }),

/***/ "./src/blocks/finisher/1-2.js":
/*!************************************!*\
  !*** ./src/blocks/finisher/1-2.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/*Rejestracja statycznego contentu */


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/finisher-1-2', {
  title: 'Finisher-1-2',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'OPERACJA FURIA'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: " container-fluid pe-0 l20 overflow-hidden py-5 pb-2 bg-gradient-finisher"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative pe-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-xl-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper mx-n2 overflow-visible",
      "data-swiper-options": "{\r \"slidesPerView\": 1,\r \"loop\": false,\r \"pagination\": {\r \"el\": \".swiper-pagination\",\r \"clickable\": true\r },\r \"navigation\": {\r \"prevEl\": \"#prev-news\",\r \"nextEl\": \"#next-news\"\r },\r \"breakpoints\": {\r \"500\": {\r \"slidesPerView\": 2\r },\r \"1000\": {\r \"slidesPerView\": 2.25\r }\r }\r }"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "position-absolute top-0 start-0 w-100 h-100",
      "aria-label": "Read more"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-bookmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg",
      className: "w-100 h-100 card-img-top object-fit-cover",
      alt: "Image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute w-100 bottom-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex align-items-center justify-content-between mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "border border-secondary badge fs-sm text-white text-decoration-none"
    }, "Business")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h5 mb-0 d-flex  justify-content-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-light ",
      href: "#"
    }, "How agile is your forecasting process?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted",
      style: {
        fontWeight: 200
      }
    }, "12 hours ago"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-footer py-4 d-none d-md-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "d-flex align-items-center text-decoration-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/assets/img/avatar/40.jpg",
      className: "rounded-circle",
      width: 48,
      alt: "Avatar"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ps-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "fs-base fw-semibold mb-0 text-light"
    }, "Marvin McKinney"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted"
    }, "Deputy Director, Capital Department")))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "position-absolute top-0 start-0 w-100 h-100",
      "aria-label": "Read more"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-bookmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg",
      className: "w-100 h-100 card-img-top object-fit-cover",
      alt: "Image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute w-100 bottom-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex align-items-center justify-content-between mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "border border-secondary badge fs-sm text-white text-decoration-none"
    }, "Business")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h5 mb-0 d-flex  justify-content-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-light ",
      href: "#"
    }, "How agile is your forecasting process?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted",
      style: {
        fontWeight: 200
      }
    }, "12 hours ago"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-footer py-4 d-none d-md-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "d-flex align-items-center text-decoration-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/assets/img/avatar/40.jpg",
      className: "rounded-circle",
      width: 48,
      alt: "Avatar"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ps-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "fs-base fw-semibold mb-0 text-light"
    }, "Marvin McKinney"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted"
    }, "Deputy Director, Capital Department")))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "position-absolute top-0 start-0 w-100 h-100",
      "aria-label": "Read more"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-bookmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg",
      className: "w-100 h-100 card-img-top object-fit-cover",
      alt: "Image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute w-100 bottom-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex align-items-center justify-content-between mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "border border-secondary badge fs-sm text-white text-decoration-none"
    }, "Business")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h5 mb-0 d-flex  justify-content-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-light ",
      href: "#"
    }, "How agile is your forecasting process?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted",
      style: {
        fontWeight: 200
      }
    }, "12 hours ago"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-footer py-4 d-none d-md-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "d-flex align-items-center text-decoration-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/assets/img/avatar/40.jpg",
      className: "rounded-circle",
      width: 48,
      alt: "Avatar"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ps-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "fs-base fw-semibold mb-0 text-light"
    }, "Marvin McKinney"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted"
    }, "Deputy Director, Capital Department"))))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-pagination position-relative bottom-0 mt-0 mb-3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex d-md-none justify-content-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/category/oferta",
      className: "  btn btn-outline-primary rounded-pill"
    }, "Zobacz nasz\u0105 ofert\u0119"))))));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/finisher/1.js":
/*!**********************************!*\
  !*** ./src/blocks/finisher/1.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [["u24web/finisher-1-1"], ["u24web/finisher-1-2"]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/finisher-1', {
  title: 'finisher-1',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'OPERACJA FURIA'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE
    }));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/gallery/gallery-card--full.js":
/*!**************************************************!*\
  !*** ./src/blocks/gallery/gallery-card--full.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [
  // ["u24web/sponsorzy-card-body-title"]
];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/gallery-card-full', {
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
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
      attributes = props.attributes;
    function onSelectImage(media) {
      setAttributes({
        imageUrl: media.url
      });
    }
    function onSelectImage2(media) {
      setAttributes({
        imageUrl2: media.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card card-portfolio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: props.attributes.imageUrl,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: "d-block m-1",
          src: props.attributes.imageUrl,
          onClick: open
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "span",
      className: "text-muted",
      placeholder: "3D Render / Graphic Design / Motion Design.",
      value: props.attributes.textContent,
      onChange: function onChange(value) {
        return props.setAttributes({
          textContent: value
        });
      }
    })))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card card-portfolio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: props.attributes.imageUrl,
      className: "glightbox w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "",
      src: props.attributes.imageUrl
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/gallery/gallery-card--wide.js":
/*!**************************************************!*\
  !*** ./src/blocks/gallery/gallery-card--wide.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [
  // ["u24web/sponsorzy-card-body-title"]
];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/gallery-card-wide', {
  title: 'Gallery card wide',
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
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
      attributes = props.attributes;
    function onSelectImage(media) {
      setAttributes({
        imageUrl: media.url
      });
    }
    function onSelectImage2(media) {
      setAttributes({
        imageUrl2: media.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-7 mb-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card card-portfolio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: props.attributes.imageUrl,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: "d-block m-1",
          src: props.attributes.imageUrl,
          onClick: open
        });
      }
    }))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-7 mb-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card card-portfolio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: props.attributes.imageUrl,
      className: "glightbox w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "",
      src: props.attributes.imageUrl
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/gallery/gallery-card.js":
/*!********************************************!*\
  !*** ./src/blocks/gallery/gallery-card.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [
  // ["u24web/sponsorzy-card-body-title"]
];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/gallery-card', {
  title: 'Gallery card',
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
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
      attributes = props.attributes;
    function onSelectImage(media) {
      setAttributes({
        imageUrl: media.url
      });
    }
    function onSelectImage2(media) {
      setAttributes({
        imageUrl2: media.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-5 mb-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card card-portfolio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: props.attributes.imageUrl,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: "d-block m-1",
          src: props.attributes.imageUrl,
          onClick: open
        });
      }
    }))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-5 mb-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card card-portfolio"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: props.attributes.imageUrl,
      className: "glightbox w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "",
      src: props.attributes.imageUrl
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/gallery/gallery.js":
/*!***************************************!*\
  !*** ./src/blocks/gallery/gallery.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [["u24web/gallery-card"], ["u24web/gallery-card-wide"], ["u24web/gallery-card-full"]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/gallery-portfolio', {
  title: 'Gallery Portfolio',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'Portfolio Grid'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container d-md-flex align-items-center justify-content-between pb-3 pt-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h1",
      className: "text-nowrap mb-md-4 pe-md-5",
      placeholder: "Portfolio Grid",
      value: props.attributes.textContent,
      onChange: function onChange(value) {
        return props.setAttributes({
          textContent: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
      className: "overflow-auto"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE,
      allowedBlocks: ['u24web/gallery-card', "u24web/gallery-card-wide", "u24web/gallery-card-full"]
    }))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container d-md-flex align-items-center justify-content-between pb-3 pt-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h1",
      className: "text-nowrap mb-md-4 pe-md-5",
      value: props.attributes.textContent
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
      className: "overflow-auto"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/blocks/gallery/lightbox.js":
/*!****************************************!*\
  !*** ./src/blocks/gallery/lightbox.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [
  // ["u24web/sponsorzy-card-body-title"]
];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/lightbox', {
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
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
      attributes = props.attributes;
    function onSelectImage(media) {
      setAttributes({
        imageUrl: media.url
      });
    }
    function onSelectImage2(media) {
      setAttributes({
        imageUrl2: media.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "glightbox w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: props.attributes.imageUrl,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: "d-block m-1",
          src: props.attributes.imageUrl,
          onClick: open
        });
      }
    })));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: props.attributes.imageUrl,
      className: "glightbox w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "",
      src: props.attributes.imageUrl
    })));
  }
});

/***/ }),

/***/ "./src/blocks/slider/slide.js":
/*!************************************!*\
  !*** ./src/blocks/slider/slide.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */




var MY_TEMPLATE = [["u24web/random", {
  src: "/assets/img/landing/software-company/about-img.jpg"
}]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/slide', {
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
      default: '/assets/img/finish/27.jpg'
    }
  },
  edit: function edit(props) {
    function onSelectImage(media) {
      props.setAttributes({
        image: media.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ratio ratio-16x7 bg-secondary"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: props.attributes.image,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: props.attributes.image,
          className: "",
          style: {
            opacity: 1.0
          },
          onClick: open
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-start display-4"
    }, "3"));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ratio ratio-16x7 bg-secondary"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.image,
      className: "w-100 h-100 object-fit-cover",
      style: {
        opacity: 1.0
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-start display-4"
    }, "3"));
  }
});

/***/ }),

/***/ "./src/blocks/slider/wrapper.js":
/*!**************************************!*\
  !*** ./src/blocks/slider/wrapper.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [["u24web/slide", {
  src: "/assets/img/landing/software-company/about-img.jpg"
}]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/wrapper', {
  title: 'Wrapper',
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
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper swiper-nav-onhover",
      "data-swiper-options": "{\r \"spaceBetween\": 0,\r \"loop\": true,\r \"pagination\": {\r \"el\": \".swiper-pagination\",\r \"clickable\": true\r },\r \"navigation\": {\r \"prevEl\": \".btn-prev\",\r \"nextEl\": \".btn-next\"\r }\r }"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE
    }))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper swiper-nav-onhover",
      "data-swiper-options": "{\r \"spaceBetween\": 0,\r \"loop\": true,\r \"pagination\": {\r \"el\": \".swiper-pagination\",\r \"clickable\": true\r },\r \"navigation\": {\r \"prevEl\": \".btn-prev\",\r \"nextEl\": \".btn-next\"\r }\r }"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/blocks/steps/step_one.js":
/*!**************************************!*\
  !*** ./src/blocks/steps/step_one.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [["core/image", {
  src: "/assets/img/landing/software-company/about-img.jpg"
}]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/our-prizes-decoration', {
  title: 'Step one',
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
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE,
      allowedBlocks: false
    }));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/swiper/images/1-1.js":
/*!*****************************************!*\
  !*** ./src/blocks/swiper/images/1-1.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/*Rejestracja statycznego contentu */


var MY_TEMPLATE = [["u24web/house-item"]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/swiper-1-1', {
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
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE
    })))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)))));
  }
});

/***/ }),

/***/ "./src/blocks/swiper/images/1-2.js":
/*!*****************************************!*\
  !*** ./src/blocks/swiper/images/1-2.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/*Rejestracja statycznego contentu */


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/swiper-1-2', {
  title: 'Swiper-1-2',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'OPERACJA FURIA'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: " container-fluid pe-0 l20 overflow-hidden py-5 pb-2 bg-gradient-finisher"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative pe-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-xl-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper mx-n2 overflow-visible",
      "data-swiper-options": "{\r \"slidesPerView\": 1,\r \"loop\": false,\r \"pagination\": {\r \"el\": \".swiper-pagination\",\r \"clickable\": true\r },\r \"navigation\": {\r \"prevEl\": \"#prev-news\",\r \"nextEl\": \"#next-news\"\r },\r \"breakpoints\": {\r \"500\": {\r \"slidesPerView\": 2\r },\r \"1000\": {\r \"slidesPerView\": 2.25\r }\r }\r }"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "position-absolute top-0 start-0 w-100 h-100",
      "aria-label": "Read more"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-bookmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg",
      className: "w-100 h-100 card-img-top object-fit-cover",
      alt: "Image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute w-100 bottom-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex align-items-center justify-content-between mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "border border-secondary badge fs-sm text-white text-decoration-none"
    }, "Business")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h5 mb-0 d-flex  justify-content-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-light ",
      href: "#"
    }, "How agile is your forecasting process?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted",
      style: {
        fontWeight: 200
      }
    }, "12 hours ago"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-footer py-4 d-none d-md-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "d-flex align-items-center text-decoration-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/assets/img/avatar/40.jpg",
      className: "rounded-circle",
      width: 48,
      alt: "Avatar"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ps-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "fs-base fw-semibold mb-0 text-light"
    }, "Marvin McKinney"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted"
    }, "Deputy Director, Capital Department")))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "position-absolute top-0 start-0 w-100 h-100",
      "aria-label": "Read more"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-bookmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg",
      className: "w-100 h-100 card-img-top object-fit-cover",
      alt: "Image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute w-100 bottom-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex align-items-center justify-content-between mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "border border-secondary badge fs-sm text-white text-decoration-none"
    }, "Business")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h5 mb-0 d-flex  justify-content-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-light ",
      href: "#"
    }, "How agile is your forecasting process?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted",
      style: {
        fontWeight: 200
      }
    }, "12 hours ago"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-footer py-4 d-none d-md-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "d-flex align-items-center text-decoration-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/assets/img/avatar/40.jpg",
      className: "rounded-circle",
      width: 48,
      alt: "Avatar"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ps-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "fs-base fw-semibold mb-0 text-light"
    }, "Marvin McKinney"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted"
    }, "Deputy Director, Capital Department")))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-slide  u24swiper-top__slide h-auto pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card h-100 border-0 shadow-sm "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative rounded-2 overflow-hidden w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "position-absolute top-0 start-0 w-100 h-100",
      "aria-label": "Read more"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-bookmark"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg",
      className: "w-100 h-100 card-img-top object-fit-cover",
      alt: "Image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-absolute w-100 bottom-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex align-items-center justify-content-between mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "border border-secondary badge fs-sm text-white text-decoration-none"
    }, "Business")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h5 mb-0 d-flex  justify-content-between"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "text-light ",
      href: "#"
    }, "How agile is your forecasting process?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted",
      style: {
        fontWeight: 200
      }
    }, "12 hours ago"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-footer py-4 d-none d-md-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "d-flex align-items-center text-decoration-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/assets/img/avatar/40.jpg",
      className: "rounded-circle",
      width: 48,
      alt: "Avatar"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ps-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "fs-base fw-semibold mb-0 text-light"
    }, "Marvin McKinney"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted"
    }, "Deputy Director, Capital Department"))))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-pagination position-relative bottom-0 mt-0 mb-3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex d-md-none justify-content-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "/category/oferta",
      className: "  btn btn-outline-primary rounded-pill"
    }, "Zobacz nasz\u0105 ofert\u0119"))))));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/swiper/images/1.js":
/*!***************************************!*\
  !*** ./src/blocks/swiper/images/1.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [["u24web/swiper-1-1"], ["u24web/swiper-1-1"]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/swiper-1', {
  title: 'swiper-1',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'OPERACJA FURIA'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper swiper-nav-onhover",
      "data-swiper-options": "{\r \"spaceBetween\": 0,\r \"loop\": true,\r \"pagination\": {\r \"el\": \".swiper-pagination\",\r \"clickable\": true\r },\r \"navigation\": {\r \"prevEl\": \".btn-prev\",\r \"nextEl\": \".btn-next\"\r }\r }"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE
    }))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper swiper-nav-onhover",
      "data-swiper-options": "{\r \"spaceBetween\": 0,\r \"loop\": true,\r \"pagination\": {\r \"el\": \".swiper-pagination\",\r \"clickable\": true\r },\r \"navigation\": {\r \"prevEl\": \".btn-prev\",\r \"nextEl\": \".btn-next\"\r }\r }"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "swiper-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/blocks/testing/card.js":
/*!************************************!*\
  !*** ./src/blocks/testing/card.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

//I will have some questions concerning the change of static gutenberg to dynamic gutenberg values such as authour, title, tags, date

/*Rejestracja statycznego contentu */



var MY_TEMPLATE = [["u24web/card-image", {
  placeholder: "Call to Action"
}], ["u24web/card-body", {
  placeholder: "Call to Action"
}], ["u24web/card-footer", {
  placeholder: "Call to Action"
}]];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/card', {
  title: 'Card',
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card border-0 shadow-sm h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE
    })));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col pb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "card border-0 shadow-sm h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/testing/card/card-body.js":
/*!**********************************************!*\
  !*** ./src/blocks/testing/card/card-body.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);

/* Register the block */


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/card-body', {
  title: 'Card body',
  edit: function edit(props) {
    var postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select('core/editor').getCurrentPostId();
    }, []);
    var postData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select('core').getEntityRecord('postType', 'post', postId);
    }, [postId]);
    var postCategories = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select('core').getEntityRecords('taxonomy', 'category', {
        post: postId
      });
    }, [postId]);
    if (!postData || !postCategories) return null;
    var postDate = new Date(postData.date);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body pb-4"
    }, "Hello", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "d-flex align-items-center justify-content-between mb-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "badge fs-sm text-nav bg-secondary text-decoration-none"
    }, postCategories[0].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "fs-sm text-muted"
    }, postDate.toDateString(), "22")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "h5 mb-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "blog-single.html"
    }, postData.title.rendered)));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/testing/card/card-footer.js":
/*!************************************************!*\
  !*** ./src/blocks/testing/card/card-footer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);

//I will have some questions concerning the change of static gutenberg to dynamic gutenberg values such as authour, title, tags, date
//How can i query the author

/*Rejestracja statycznego contentu */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/card-footer', {
  title: 'Card footer',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'OPERACJA FURIA'
    }
  },
  edit: function edit(props) {
    var authorId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      return select('core/editor').getEditedPostAttribute('author');
    }, []);
    var authorData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      return select('core').getEntityRecord('root', 'user', authorId);
    }, [authorId]);
    if (!authorData) return null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-footer py-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "d-flex align-items-center fw-bold text-dark text-decoration-none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: authorData.avatar_urls[48],
      className: "rounded-circle me-3",
      width: 48,
      alt: "Avatar"
    }), authorData.name));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/testing/card/card-image.js":
/*!***********************************************!*\
  !*** ./src/blocks/testing/card/card-image.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);

/* Register the block */


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/card-image', {
  title: 'Card image',
  edit: function edit(props) {
    var featuredMediaId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select('core/editor').getEditedPostAttribute('featured_media');
    }, []);
    var featuredMedia = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select('core').getEntityRecord('root', 'media', featuredMediaId);
    }, [featuredMediaId]);
    if (!featuredMedia) return null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "position-relative"
    }, "herro", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "blog-single.html",
      className: "position-absolute top-0 start-0 w-100 h-100",
      "aria-label": "Read more"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3",
      "data-bs-toggle": "tooltip",
      "data-bs-placement": "left",
      title: "Read later"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "bx bx-bookmark"
    })), featuredMedia.source_url, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: featuredMedia.source_url,
      className: "card-img-top",
      alt: "Image"
    }));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/testing/loop.js":
/*!************************************!*\
  !*** ./src/blocks/testing/loop.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



var MY_TEMPLATE = [["core/query", {
  query: {
    per_page: 5,
    order: 'desc',
    orderby: 'date'
  },
  displayLayout: {
    type: 'list'
  }
}], ["core/image"]];
// const DEFAULT_QUERY = {
//     per_page: 3,
//     pages: 1,
//     offset: 0,
//     post_type: 'post',
//     order: 'desc',
//     orderby: 'date',
// };

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/loop', {
  title: 'loop Portfolio',
  attributes: {
    textContent: {
      type: 'string',
      value: '',
      default: 'Portfolioso Grid'
    }
  },
  edit: function edit(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h1",
      className: "text-nowrap mb-md-4 pe-md-5",
      placeholder: "Portfolios Grid",
      value: props.attributes.textContent,
      onChange: function onChange(value) {
        return props.setAttributes({
          textContent: value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: MY_TEMPLATE,
      allowedBlocks: ['core/query']
    }))));
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h1",
      className: "",
      value: props.attributes.textContent
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/fame/image/core.js":
/*!********************************!*\
  !*** ./src/fame/image/core.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

/*Rejestracja statycznego contentu */




// const MY_TEMPLATE = [
//     ["u24web/random", { src: "/assets/img/landing/software-company/about-img.jpg" }]
// ];

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/core', {
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
      default: '/assets/img/finish/27.jpg'
    }
  },
  edit: function edit(props) {
    function onSelectImage(media) {
      props.setAttributes({
        image: media.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: props.attributes.image,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: props.attributes.image,
          onClick: open
        });
      }
    });
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.image
    });
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_steps_step_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/steps/step_one */ "./src/blocks/steps/step_one.js");
/* harmony import */ var _blocks_breadcrumb_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/breadcrumb/parent */ "./src/blocks/breadcrumb/parent.js");
/* harmony import */ var _blocks_breadcrumb_child__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/breadcrumb/child */ "./src/blocks/breadcrumb/child.js");
/* harmony import */ var _blocks_gallery_gallery_card_full__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/gallery/gallery-card--full */ "./src/blocks/gallery/gallery-card--full.js");
/* harmony import */ var _blocks_gallery_gallery_card_wide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/gallery/gallery-card--wide */ "./src/blocks/gallery/gallery-card--wide.js");
/* harmony import */ var _blocks_gallery_gallery_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/gallery/gallery-card */ "./src/blocks/gallery/gallery-card.js");
/* harmony import */ var _blocks_gallery_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/gallery/gallery */ "./src/blocks/gallery/gallery.js");
/* harmony import */ var _blocks_gallery_lightbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/gallery/lightbox */ "./src/blocks/gallery/lightbox.js");
/* harmony import */ var _blocks_testing_loop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/testing/loop */ "./src/blocks/testing/loop.js");
/* harmony import */ var _blocks_testing_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/testing/card */ "./src/blocks/testing/card.js");
/* harmony import */ var _blocks_testing_card_card_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/testing/card/card-image */ "./src/blocks/testing/card/card-image.js");
/* harmony import */ var _blocks_testing_card_card_body__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/testing/card/card-body */ "./src/blocks/testing/card/card-body.js");
/* harmony import */ var _blocks_testing_card_card_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/testing/card/card-footer */ "./src/blocks/testing/card/card-footer.js");
/* harmony import */ var _blocks_slider_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/slider/wrapper */ "./src/blocks/slider/wrapper.js");
/* harmony import */ var _blocks_slider_slide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/slider/slide */ "./src/blocks/slider/slide.js");
/* harmony import */ var _fame_image_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fame/image/core */ "./src/fame/image/core.js");
/* harmony import */ var _blocks_finisher_1__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/finisher/1 */ "./src/blocks/finisher/1.js");
/* harmony import */ var _blocks_finisher_1_1__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/finisher/1-1 */ "./src/blocks/finisher/1-1.js");
/* harmony import */ var _blocks_finisher_1_2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/finisher/1-2 */ "./src/blocks/finisher/1-2.js");
/* harmony import */ var _blocks_swiper_images_1__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/swiper/images/1 */ "./src/blocks/swiper/images/1.js");
/* harmony import */ var _blocks_swiper_images_1_1__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/swiper/images/1-1 */ "./src/blocks/swiper/images/1-1.js");
/* harmony import */ var _blocks_swiper_images_1_2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/swiper/images/1-2 */ "./src/blocks/swiper/images/1-2.js");
/* harmony import */ var _tutorial_block_media_upload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tutorial-block/media-upload */ "./src/tutorial-block/media-upload.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");






























// import edit from "./edit";
// import save from './save';

/**
 * Child blocks
 */
// import { metadata, name, settings } from './blocks/steps/social-row';
// registerBlockType({ name, ...metadata }, settings);

/***/ }),

/***/ "./src/tutorial-block/media-upload.js":
/*!********************************************!*\
  !*** ./src/tutorial-block/media-upload.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('u24web/house-item', {
  title: 'House item',
  attributes: {
    image: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: 'img',
      default: '/assets/img/finish/27.jpg'
    }
  },
  edit: function edit(props) {
    function onSelectImage(media) {
      props.setAttributes({
        image: media.url
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: props.attributes.image,
      render: function render(_ref) {
        var open = _ref.open;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: props.attributes.image,
          className: "",
          style: {
            opacity: 1.0
          },
          onClick: open
        });
      }
    });
  },
  save: function save(props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: props.attributes.image,
      className: "glightbox w-100 h-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: props.attributes.image,
      className: "",
      style: {
        opacity: 1.0
      }
    }));
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkU24web_plugin"] = self["webpackChunkU24web_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map