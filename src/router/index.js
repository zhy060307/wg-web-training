import Vue from 'vue'
import Router from 'vue-router'
import Navigation from "../homework/components/Navigation"
import FirstCourse from '../homework/components/FirstCourse'
import SecondCourse from "../homework/components/SecondCourse";

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
        },
        {
            path: '/secondCourse',
            name: 'SecondCourse',
            component: SecondCourse
        }
    ]
})
