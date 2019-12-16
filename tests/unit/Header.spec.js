
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

Date.shortMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
Date.weekdayer = ['SUNDAY','MONDAY', 'TUESDAY','WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY' ];


describe('Header is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header);
    it('Test to test when an item in the list is marked as done  item is updated correctly', () => {

    })
    // Check that this component properly displays today's date

    it('Renders the correct date', () => {
        let today = new Date();
        let date = today.getDate() ;
        let year = today.getFullYear();
        let month = today.getMonth();
        let weekday = today.getDay() ;
        expect(wrapper.html()).toContain(date);
        expect(wrapper.html()).toContain(year);
        expect(wrapper.html()).toContain(Date.shortMonths[month]);
        expect(wrapper.html()).toContain(Date.weekdayer[weekday]); //Currently this does not work (it should spout out a number and that should be used on a list to find the corresponding day
    })
});
