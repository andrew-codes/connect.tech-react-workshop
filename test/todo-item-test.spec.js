import React from 'react';
import {mount} from 'enzyme';
import TodoItem from '../Lab13/todo-item';

describe('Todo-item component', function() {
    describe('when rendering the component', () => {
        beforeEach(() => {
            this.actual = mount(
                <TodoItem done={false} name="Write Tutorial" />
            );
        });

        it('it should render an <input> should be of type "checkbox"', () => {
            this.actual.find('input').should.have.attr('type', 'checkbox');
        });

        it('it should render as unchecked', () => {
            this.actual.find('input').should.not.have.attr('checked', true);
        });
    });
});
