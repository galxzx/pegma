import React from 'react'
import { Link } from 'react-router'

const TeacherNotifications = () => {

  return (
    <section className="panel notifications">
      <div className="panel-header">Notifications</div>
      <ul className="notifications-list">
        <li>Luke Cookie's Assignment X is late.<span className="icon icon-external-link-sqaure"></span></li>
        <li>Jane Pizza completed Assignment Y.<span className="icon icon-external-link-square"></span></li>
        <li>Pam Pancake completed Assignment X.<span className="icon icon-external-link-square"></span></li>
        <li>Carl Chocolate completed Assignment Z.<span className="icon icon-external-link-square"></span></li>
        <li>Cody the Dog completed Assignment X.<span className="icon icon-external-link-square"></span></li>
        <li>Laquisha Lasagna completed Assignment Z.<span className="icon icon-external-link-square"></span></li>
      </ul>
    </section>
  )
}

export default TeacherNotifications
