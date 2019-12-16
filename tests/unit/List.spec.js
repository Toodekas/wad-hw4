
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Item from "../../src/models/Item";

describe('List is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    //Adding items to array. V-if statement also needs this.
    let testItem = new Item('Test item #1');
    let testItem2 = new Item('Test item #2');
    //const wrapper = mount(List);
    const wrapper = mount(List, {
        propsData: {
            list: [testItem, testItem2]
        }
    });



    // Test to test when an item in the list is marked as done  item is updated correctly
    it('Test to test when an item in the list is marked as done  item is updated correctly', () => {
        //checking inital values to be sure.
        expect(testItem.done).toBe(false);
        expect(testItem2.done).toBe(false);
        //finding the needed list-items
        let listItem = wrapper.find('.list-item:first-of-type span');
        let listItem2 = wrapper.find('.list-item:last-of-type span');
        //clicking on test item #1 span.
        listItem.trigger('click');
        //checking done values after first click
        expect(testItem.done).toBe(true);
        expect(testItem2.done).toBe(false);
        //clicking on test item #2 span.
        listItem2.trigger('click');
        //checking values after click.
        expect(testItem.done).toBe(true);
        expect(testItem2.done).toBe(true);
        //re-triggering list item #1 to be sure and checking the values.
        listItem.trigger('click');
        expect(testItem.done).toBe(false);
        expect(testItem2.done).toBe(true);

    });

});
