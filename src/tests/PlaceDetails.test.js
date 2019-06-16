import React from 'react';
import { shallow, render } from 'enzyme';
import PlaceDetails from '../components/PlaceDetails';

it(`shows place details`, () => {
  const placeDetails = shallow(<PlaceDetails name="krakow" lat={50} lng={19} />);

  expect(placeDetails.containsMatchingElement(<h1>krakow</h1>)).toEqual(true);
  expect(placeDetails.containsMatchingElement(<p>50, 19</p>)).toEqual(true);
});

it(`doesn't show place details`, () => {
  const placeDetails = shallow(<PlaceDetails />);

  expect(placeDetails.containsMatchingElement(<h1></h1>)).toEqual(false);
});
