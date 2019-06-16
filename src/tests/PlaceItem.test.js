import React from 'react';
import { shallow, render } from 'enzyme';
import PlaceItem from '../components/PlaceItem';

it(`shows selected place list element`, () => {
  const place = {
    id: 0
  }
  const placeItem = shallow(<PlaceItem place={place} />);
  expect(placeItem.find('li').text()).toEqual('0')
});

it(`doesn't show selected place list element`, () => {
  const placeItem = shallow(<PlaceItem />);
  expect(placeItem.find('li').length).toEqual(0)
});