
import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../../src/form/Form';

describe('<Form/>', ()=> {
    it('is alive at application start', () =>{
        let app = shallow(<Form />);
        expect(app.find('main').exists()).toBeTruthy();
    });

    // it('changes state on click', ()=> {
    //     let method = 'post';
    //     let url = 'localhost:3000/categories'
    //     let app = mount(<Form />);
    //     let button = app.find('button');
    //     button.simulate('click');
    //     expect(app.state({method: method, url: url})).toBe({method: 'post', url: 'localhost:3000/categories'});
    //     expect(app.find('.result').text()).toContain('post localhost:3000/categories');
    // });

    it('renders correctly', ()=> {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });


});