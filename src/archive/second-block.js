import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'alecadd-giveaway/my-second-block', {
    title: 'My Second Block',
    icon: 'smiley',
    category: 'common',
    edit: function() {
        return (
            <div>
                <p>Gotów aby zacząć dołącz do operacji furia już dziś</p>
            </div>
        );
    },
    save: function() {
        return (
            <div>
                <p>Gotów aby zacząć dołącz do operacji furia już dziś</p>
            </div>
        );
    },
} );