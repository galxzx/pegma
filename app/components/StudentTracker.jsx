import React from 'react'

import {Board} from 'APP/react-trello'


const Tracker = (props) => {
  return (
    <div>
      <div className="container panel-container">
        <section className="flex-child panel">
          <div className="panel-header">{`${props.currentStudent.name}'s Tracker Board`}</div> 

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
        </section>
      </div>
    </div>
  )
}

export default Tracker