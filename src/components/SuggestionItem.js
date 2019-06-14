import React from 'react'

const SuggestionItem = ({description, id, clickSuggestion, selected}) => {
  return (
    <li className={`suggestions-item ${selected && 'active'}`} onClick={() => {clickSuggestion(id)}}>
      {description}
    </li>
  )
}

export default SuggestionItem
