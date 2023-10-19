/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { PlainText } from '@wordpress/block-editor';

registerBlockType( 'u24web/swiper-1-2', {
    title: 'Swiper-1-2',

    attributes: {
        textContent: {
            type: 'string',
            value: '',
            default: 'OPERACJA FURIA'
        },
    },
    edit: function(props) {
        return (
            <section className=" container-fluid pe-0 l20 overflow-hidden py-5 pb-2 bg-gradient-finisher">
            {/* Multiple slides responsive slider with external Prev / Next buttons and bullets outside */}
            <div className="position-relative pe-0">
              {/* Slider prev/next buttons */}
              {/* <button type="button" id="prev-news" class="btn btn-prev btn-icon btn-sm position-absolute top-50 start-0 translate-middle-y d-none d-xl-inline-flex">
          <i class="bx bx-chevron-left"></i>
              </button>
              <button type="button" id="next-news" class="btn btn-next btn-icon btn-sm position-absolute top-50 end-0 translate-middle-y d-none d-xl-inline-flex">
          <i class="bx bx-chevron-right"></i>
              </button> */}
              {/* Slider */}
              <div className="px-xl-2">
                <div
                  className="swiper mx-n2 overflow-visible"
                  data-swiper-options='{
          "slidesPerView": 1,
          "loop": false,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "navigation": {
            "prevEl": "#prev-news",
            "nextEl": "#next-news"
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 2
            },
            "1000": {
              "slidesPerView": 2.25
            }
          }
          }'
                >
                  <div className="swiper-wrapper">
                  <div className="swiper-slide  u24swiper-top__slide h-auto pb-3">
  <article className="card h-100 border-0 shadow-sm ">
    <div className="position-relative rounded-2 overflow-hidden w-100 h-100">
      <a
        href="#"
        className="position-absolute top-0 start-0 w-100 h-100"
        aria-label="Read more"
      />
      <a
        href="#"
        className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
      >
        <i className="bx bx-bookmark" />
      </a>
      <img
        src="/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg"
        className="w-100 h-100 card-img-top object-fit-cover"
        alt="Image"
      />
      <div className="position-absolute w-100 bottom-0">
        <div className="card-body pb-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <a
              href="#"
              className="border border-secondary badge fs-sm text-white text-decoration-none"
            >
              Business
            </a>
          </div>
          <h3 className="h5 mb-0 d-flex  justify-content-between">
            <a className="text-light " href="#">
              How agile is your forecasting process?
            </a>
            <span
              className="fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted"
              style={{ fontWeight: 200 }}
            >
              12 hours ago
            </span>
          </h3>
        </div>
        <div className="card-footer py-4 d-none d-md-block">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src="/assets/img/avatar/40.jpg"
              className="rounded-circle"
              width={48}
              alt="Avatar"
            />
            <div className="ps-3">
              <h6 className="fs-base fw-semibold mb-0 text-light">
                Marvin McKinney
              </h6>
              <span className="fs-sm text-muted">
                Deputy Director, Capital Department
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </article>
</div>

<div className="swiper-slide  u24swiper-top__slide h-auto pb-3">
  <article className="card h-100 border-0 shadow-sm ">
    <div className="position-relative rounded-2 overflow-hidden w-100 h-100">
      <a
        href="#"
        className="position-absolute top-0 start-0 w-100 h-100"
        aria-label="Read more"
      />
      <a
        href="#"
        className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
      >
        <i className="bx bx-bookmark" />
      </a>
      <img
        src="/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg"
        className="w-100 h-100 card-img-top object-fit-cover"
        alt="Image"
      />
      <div className="position-absolute w-100 bottom-0">
        <div className="card-body pb-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <a
              href="#"
              className="border border-secondary badge fs-sm text-white text-decoration-none"
            >
              Business
            </a>
          </div>
          <h3 className="h5 mb-0 d-flex  justify-content-between">
            <a className="text-light " href="#">
              How agile is your forecasting process?
            </a>
            <span
              className="fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted"
              style={{ fontWeight: 200 }}
            >
              12 hours ago
            </span>
          </h3>
        </div>
        <div className="card-footer py-4 d-none d-md-block">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src="/assets/img/avatar/40.jpg"
              className="rounded-circle"
              width={48}
              alt="Avatar"
            />
            <div className="ps-3">
              <h6 className="fs-base fw-semibold mb-0 text-light">
                Marvin McKinney
              </h6>
              <span className="fs-sm text-muted">
                Deputy Director, Capital Department
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </article>
</div>

                  <div className="swiper-slide  u24swiper-top__slide h-auto pb-3">
  <article className="card h-100 border-0 shadow-sm ">
    <div className="position-relative rounded-2 overflow-hidden w-100 h-100">
      <a
        href="#"
        className="position-absolute top-0 start-0 w-100 h-100"
        aria-label="Read more"
      />
      <a
        href="#"
        className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
      >
        <i className="bx bx-bookmark" />
      </a>
      <img
        src="/wp-content/uploads/2023/06/wooden-pellets-and-thermostatic-valve-head-on-blac-2022-08-19-02-13-34-utc-1-scaled.jpg"
        className="w-100 h-100 card-img-top object-fit-cover"
        alt="Image"
      />
      <div className="position-absolute w-100 bottom-0">
        <div className="card-body pb-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <a
              href="#"
              className="border border-secondary badge fs-sm text-white text-decoration-none"
            >
              Business
            </a>
          </div>
          <h3 className="h5 mb-0 d-flex  justify-content-between">
            <a className="text-light " href="#">
              How agile is your forecasting process?
            </a>
            <span
              className="fs-sm text-muted  align-self-end font-weight-light fs-sm text-muted"
              style={{ fontWeight: 200 }}
            >
              12 hours ago
            </span>
          </h3>
        </div>
        <div className="card-footer py-4 d-none d-md-block">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src="/assets/img/avatar/40.jpg"
              className="rounded-circle"
              width={48}
              alt="Avatar"
            />
            <div className="ps-3">
              <h6 className="fs-base fw-semibold mb-0 text-light">
                Marvin McKinney
              </h6>
              <span className="fs-sm text-muted">
                Deputy Director, Capital Department
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </article>
</div>


                  </div>
                  {/* Pagination (bullets) */}
                  <div className="swiper-pagination position-relative bottom-0 mt-0 mb-3" />
                  <div className="d-flex d-md-none justify-content-center">
                    <a
                      href="/category/oferta"
                      className="  btn btn-outline-primary rounded-pill"
                    >
                      Zobacz naszą ofertę
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        );
    },
    save: function(props) {
        return null;
    },
} );