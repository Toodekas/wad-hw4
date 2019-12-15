
import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('Footer is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Footer);

    // Test to test when "+" button is clicked in Footer component "open" property in Footer component changes to true
    it('Test to test when "+" button is clicked in Footer component "open" property in Footer component changes to true', () => {
        //wrapper.setData({open : false});
        expect(wrapper.vm.open).toBe(false);
        const plusButton = wrapper.find({ ref : 'plusButton' });
        plusButton.trigger('click');
        expect(wrapper.vm.open).toBe(true);
    });

});
