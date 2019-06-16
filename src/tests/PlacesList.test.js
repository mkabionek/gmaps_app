import React from 'react';
import { shallow, render } from 'enzyme';
import PlacesList from '../components/PlacesList';

it(`shows message when there is no places selected`, () => {
  const placesList = shallow(<PlacesList places={[]} />);
  expect(placesList.containsMatchingElement(<p className="info">No places selected</p>)).toEqual(true)
});

it(`shows list of places`, () => {
  const places = [{id: 1}, {id: 2}];
  const placesList = render(<PlacesList places={places} />);
  expect(placesList.find('li').length).toEqual(2);
});