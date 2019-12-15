
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

Date.shortMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
Date.weekdayer = ['Sunday','Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday' ];


describe('Header is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)

    // Check that this component properly displays today's date

    it('Renders the correct date', () => {
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        let year = today.getFullYear() < 10 ?  `0${today.getFullYear()}` : today.getFullYear();
        let month = today.getMonth() < 10 ?  `0${today.getMonth()}` : today.getMonth();
        let weekday = today.getDay() < 10 ?  `0${today.getDay()}` : today.getDay();
        expect(wrapper.html()).toContain(date);
        expect(wrapper.html()).toContain(year);
        expect(wrapper.html()).toContain(Date.shortMonths[month]);
        expect(wrapper.html()).toContain(Date.weekdayer[weekday]); //Currently this does not work (it should spout out a number and that should be used on a list to find the corresponding day
    })
});
