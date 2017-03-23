import React from 'react'

import {Board} from 'APP/react-trello'


const Tracker = (props) => {
  return (
    <div key="StudentTracker">
        <Board 
          data={props.board}
          draggable={true}
          handleDragStart={props.handleDragStart}
          handleDragEnd={props.handleDragEnd}
          onCardClick={props.handleCardClick}
          laneSortFunction={props.defineSortFunction}
        />
    </div>   
  )
}

export default Tracker