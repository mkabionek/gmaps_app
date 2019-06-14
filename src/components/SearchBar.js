import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SuggestionItem from './SuggestionItem'
/* global google */

export class SearchBar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      selectedIndex: -1,
      input: '',
      suggestions: []
    }
    this.autocomplete = null;
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.AutocompleteService();
  }
  
  onChange(e){
    const input = e.target.value;
    this.setState({input})
    if(input.length > 0){
      this.autocomplete.getPlacePredictions({input}, this.displaySuggestions.bind(this));
    }else {
      this.setState({suggestions: []})
    }
  }

  clickSuggestion(id){
    let selected = this.state.suggestions.find(s => s.id === id)
    this.setState({suggestions: [], input: selected.description})
  }

  displaySuggestions(suggestions, status){
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      this.setState({suggestions: []});
      return;
    }
    this.setState({suggestions});
  }

  onArrowPress(e){
    let selectedIndex = this.state.selectedIndex;
    switch (e.which) {
      case 40:
        selectedIndex = ++selectedIndex % this.state.suggestions.length;
        break;
      case 38:
        selectedIndex = selectedIndex > 0 ? --selectedIndex : this.state.suggestions.length-1; 
        break;
      case 13:
        this.clickSuggestion(this.state.suggestions[this.state.selectedIndex].id)
        break;
      default:
        break;
    }
    this.setState({selectedIndex})
  }

  render() {
    let suggestions = this.state.suggestions.map((s,index) => 
      <SuggestionItem 
        key={s.id}
        id={s.id}
        selected={this.state.selectedIndex === index ? true : false}
        description={s.description}
        clickSuggestion={this.clickSuggestion.bind(this)}
      />
    );

    return (
      <div className="search-bar">
        <input
          onKeyDown={this.onArrowPress.bind(this)}
          value={this.state.input}
          onChange={this.onChange.bind(this)}
          type="text" 
          placeholder="Search"
        />
        <ul className="suggestions">
          {suggestions}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
