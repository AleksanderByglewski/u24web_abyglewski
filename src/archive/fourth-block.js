import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

registerBlockType( 'alecadd-giveaway/my-fourth-block', {
    title: 'My Fourth Block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    edit: function( props ) {
        return (
            <div>
                  <InspectorControls>
                    <TextControl
                        label="Koncowy czas"
                        placeholder='2023-12-31'
                        value={props.attributes.myCustomString}
                        onChange={(value) =>
                        props.setAttributes({ myCustomString: value })
                        }
                    />
                </InspectorControls>
                <div class="container">
                    <div class="row">
                    <div id="clockdiv" class="py-4">
                    <div class="">
                        <span class="days display-4 text-light num">0</span>
                        <div class="smalltext fs-lg text-light opacity-70">Dni</div>
                    </div>
                    <div>
                        <span class="hours display-4 text-light num">0</span>
                        <div class="smalltext fs-lg text-light opacity-70">Godzin</div>
                    </div>
                    <div>
                        <span class="minutes display-4 text-light num">0</span>
                        <div class="smalltext fs-lg text-light opacity-70">Minut</div>
                    </div>
                    <div>
                        <span class="seconds display-4 text-light num">0</span>
                        <div class="smalltext fs-lg text-light opacity-70">Sekund</div>
                    </div>
                    </div>
                    </div>
                </div>

   
            </div>


            //     <RichText
            //         tagName="p"
            //         value={ props.attributes.content }
            //         onChange={ ( value ) => props.setAttributes( { content: value } ) }
            //     />
            // </div>
        );
    },
    save: function( props ) {
        return (
            <div>
              
                <div class="container">
                    <div class="row">
                    <div id="clockdiv" class="py-4">
                    <div class="">
                        <span class="days display-4 text-light num"></span>
                        <div class="smalltext fs-lg text-light opacity-70">Dni</div>
                    </div>
                    <div>
                        <span class="hours display-4 text-light num"></span>
                        <div class="smalltext fs-lg text-light opacity-70">Godzin</div>
                    </div>
                    <div>
                        <span class="minutes display-4 text-light num"></span>
                        <div class="smalltext fs-lg text-light opacity-70">Minut</div>
                    </div>
                    <div>
                        <span class="seconds display-4 text-light num"></span>
                        <div class="smalltext fs-lg text-light opacity-70">Sekund</div>
                    </div>
                    </div>
                    </div>
                </div>

                <script  dangerouslySetInnerHTML={{
                        __html: `
                            function getTimeRemaining(endtime) {
                                const total = Date.parse(endtime) - Date.parse(new Date());
                                const seconds = Math.floor((total / 1000) % 60);
                                const minutes = Math.floor((total / 1000 / 60) % 60);
                                const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
                                const days = Math.floor(total / (1000 * 60 * 60 * 24));
                                
                                return {
                                    total,
                                    days,
                                    hours,
                                    minutes,
                                    seconds
                                };
                            }
                            function initializeClock(id, endtime) {
                                const clock = document.getElementById(id);
                                const daysSpan = clock.querySelector('.days');
                                const hoursSpan = clock.querySelector('.hours');
                                const minutesSpan = clock.querySelector('.minutes');
                                const secondsSpan = clock.querySelector('.seconds');
                                
                                function updateClock() {
                                    const t = getTimeRemaining(endtime);
                                
                                    daysSpan.innerHTML = t.days;
                                    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                                    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                                    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                                
                                    if (t.total <= 0) {
                                        clearInterval(timeinterval);
                                    }
                                }
                                
                                updateClock();
                                const timeinterval = setInterval(updateClock, 1000);
                            }
                            
                            //const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
                            const deadline = new Date('${props.attributes.myCustomString}');
                            initializeClock('clockdiv', deadline);
                            
                            console.log('${props.attributes.myCustomString}');
                        `,
                    }}
                />
            </div>
            
            // <div>
            //     <span className='text-primary'>{ props.attributes.content }</span>
            // </div>
        );
    },
} );