import {connect} from 'react-redux'

import GradeView from '../components/GradeView'
import {getGrades, GPA, letterSpread} from '../utils'

const mapState = (state) => {
	
	let studentName = state.teacher.currentStudent.user.firstName + ' ' + state.teacher.currentStudent.user.lastName

	let studentId = state.teacher.currentStudent.id  

 	let studentReport = getGrades(state.teacher.currentStudent.assignments)
 	console.log(studentReport, 'studentReport')
  return {
    GPA: GPA(studentReport),
    studentReport: studentReport,
    studentName: studentName,
    studentId: studentId
  }
}
export default connect (mapState) (GradeView)
