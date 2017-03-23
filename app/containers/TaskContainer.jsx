import { connect } from 'react-redux'
import Task from '../components/Task'

const mapState = (state) => {
  return {
    task: state.student.task,
  }
}

export default connect(mapState)(Task)
