import {connect} from 'react-redux'

import TeacherFunctions from '../components/TeacherFunctions'


const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students,
    library: state.library
  }
}

const handleSubmit = () => {}

const mapDispatch = {handleSubmit}

export default connect(mapState)(TeacherFunctions)
