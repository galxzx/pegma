import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

import TeacherCalendar from '../components/TeacherCalendar'
import { updateCalendar } from '../reducers/teacher'

const mapState = (state) => {
  return {
    user: state.auth,
    calendar: state.teacher.calendar
  }
}
const mapDispatch = { updateCalendar }

const CalendarForm = reduxForm({
  form: 'calendar',
})(TeacherCalendar)

export default connect(mapState, mapDispatch)(CalendarForm)