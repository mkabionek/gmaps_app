import React from 'react';
import { shallow, render } from 'enzyme';
import PlaceItem from '../components/PlaceItem';

it(`shows selected place list element`, () => {
  const place = {
    id: 1
  }
  const placeItem = shallow(<PlaceItem id={place.id} />);
  expect(placeItem.find('li').text()).toEqual('1')
});

it(`doesn't show selected place list element`, () => {
  const placeItem = shallow(<PlaceItem />);
  expect(placeItem.find('li').length).toEqual(0)
});