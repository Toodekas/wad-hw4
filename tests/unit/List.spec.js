
import { mount } from '@vue/test-utils'
import List from "../../src/components/Footer.vue";

describe('List is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(List);
    const vm = wrapper.vm;

    // Test to test when an item in the list is marked as done  item is updated correctly
    it('Test to test when an item in the list is marked as done  item is updated correctly', () => {
        let itemList = vm.props().list;
        expect
    });

});
