import Vue from 'vue'
import Router from 'vue-router'
import Navigation from "../components/Navigation"
import FirstCourse from '../components/FirstCourse'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Navigation',
            component: Navigation
        },
        {
            path: '/firstCourse',
            name: 'FirstCourse',
            component: FirstCourse
        }
    ]
})
