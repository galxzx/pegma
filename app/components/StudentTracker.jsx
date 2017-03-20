import React from 'react'

//import {Board} from 'react-trello'


const Tracker = (props) => {
  return (
    <div>
      <Board data={props.board}
        draggable={true}
        onDataChange={props.shouldReceiveNewData}
        handleDragStart={props.handleDragStart}
        handleDragEnd={props.handleDragEnd}
      />
    </div>
  )
}

export default Tracker


  // <div className="flex-container" id="student-tracker">

  //     <div className="flex-child list-container">

  //       <section className="panel list">
  //         <div className="panel-header">To-Do</div>
  //         <ul className="notifications-list">
  //           <li className="overdue">Assignment X is overdue.<span className="icon icon-external-link-sqaure"></span></li>
  //         </ul>
  //       </section>

  //     </div>
  //     <div className="flex-child list-container">

  //       <section className="panel list">
  //         <div className="panel-header">Doing</div>
  //         <ul className="notifications-list">
  //         {
  //           assignments && assignments.map(assignment => (
  //             assignment.status === 'doing'
  //               ? <li>{assignment.title || 'Untitled'}</li>
  //               : ''
  //           ))
  //         }
  //         </ul>
  //       </section>

  //     </div>
  //     <div className="flex-child list-container">

  //       <section className="panel list">
  //         <div className="panel-header">Done</div>
  //         <ul className="notifications-list">
  //           <li>Task 2<span className="icon icon-external-link-sqaure"></span></li>
  //         </ul>
  //       </section>

  //     </div>
  //     <div className="flex-child list-container">

  //       <section className="panel list">
  //         <div className="panel-header">Archive</div>
  //         <ul className="notifications-list">
  //           <li className="overdue">Task 3<span className="icon icon-external-link-sqaure"></span></li>
  //         </ul>
  //       </section>

  //     </div>
  //   </div>
