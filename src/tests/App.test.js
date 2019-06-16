import React from 'react';
import { shallow, render } from 'enzyme';
import {App} from '../App';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';
import PlacesList from '../components/PlacesList';

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes Map', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Map />)).toEqual(true);
});

it('includes SearchBar', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<SearchBar />)).toEqual(true);
});

it('includes PlacesList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<PlacesList />)).toEqual(true);
});