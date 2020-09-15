import Vue from 'vue';

const skill = {
    props: ['skill'],
    template: '#skill',
    methods: {
        drawCircle() {
            const circle = this.$refs['colored-circle'];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
            const progress = (dashArray / 100) * (100 - this.skill.progress);
    
            circle.style.strokeDashoffset = progress;
        }
    },
    mounted() {
        this.drawCircle();
    }
}

const category = {
    props: ['category'],
    template: '#category',
    components: {
        skill
    }
}

new Vue({
    el: '#skills-component',
    template: '#skills-widget',
    components: {
        category
    },
    data() {
        return {
            skills: []
        }
    },
    created() {
        this.skills = require("../data/skills.json");
    }
});
