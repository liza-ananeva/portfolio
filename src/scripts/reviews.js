import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el: '#reviews-component',
    template: '#reviews-slider',
    components: {
        Flickity
    },
    data() {
        return {
            reviews: [ ],
            state: 'begin',
            flickityOptions: {
                draggable: false,
                groupCells: true,
                cellAlign: 'left',
                prevNextButtons: false,
                pageDots: false
            }
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        },
        requireReviewPhoto() {
            this.reviews = this.reviews.map(review => {
                const requiredPhoto = require(`../images/content/${review.photo}`).default;
                review.photo = requiredPhoto;

                return review;
            });
        }
    },
    mounted() {
        this.requireReviewPhoto();

        const self = this;

        this.$refs.flickity.on('change', function(position) {
            if (position === this.slides.length - 1) {
                self.state = 'end';
            } else if (position === 0) {
                self.state = 'begin';
            } else {
                self.state = 'middle';
            }
        });
    },
    created() {
        this.reviews = require('../data/reviews.json'); 
    }
});
