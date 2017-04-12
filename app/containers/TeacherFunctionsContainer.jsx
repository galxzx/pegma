import {connect} from 'react-redux'
import React, {Component} from 'react'
import moment from 'moment'
import TeacherFunctions from '../components/TeacherFunctions'
import {addAssignmentsRequest} from '../reducers/teacher'

class TeacherFunctionsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      due_date: moment(),
      message: '',
      allTasks: [],
      allQuizzes: [],
      selectedTask: 0, 
      selectedQuiz: 0
    }
    this.handleSelectTask = this.handleSelectTask.bind(this)
    this.handleSelectQuiz = this.handleSelectQuiz.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // Remove duplicates from library based on titles
    this.setState({allTasks: _.uniqBy([...nextProps.library.tasks], 'title')})
    this.setState({allQuizzes: _.uniqBy([...nextProps.library.quizzes], 'title')})
  }

  componentDidMount () {
    window.scrollTo(0,0)   
  }

  componentWillUpdate () {
    window.scrollTo(0,0)
  }

  handleSelectTask (event) {
    let val = +event.target.value
    if (isNaN(val)) val = 0
    this.setState({ selectedTask: val })
  }

  handleSelectQuiz (event) {
    let val = +event.target.value
    if (isNaN(val)) val = 0
    this.setState({ selectedQuiz: val })
  }

  handleDateChange (date) {
    this.setState({ due_date: date })
  }

  handleSubmit (event) {
    event.preventDefault()

    // Check restrictions for at least one task or quiz being selected
    if (!this.state.selectedTask && !this.state.selectedQuiz) return this.setState({ message: 'You must select at least one task or one quiz' })

    // Get all selected students ids
    let selectedStudents = document.querySelectorAll(`#students tr.student td.select input[type="checkbox"]:checked`)
    selectedStudents = [...selectedStudents].map(input => +input.value)

    // Check restriction for at least one student being selected
    if (selectedStudents.length < 1) return this.setState({message: 'Please select at least one student'})

    let numCreated = 0
    const numStudents = selectedStudents.length
    const dueDate = this.state.due_date;

    if (this.state.selectedTask) {
      const thisTask = this.state.allTasks.find((el) => el.id === this.state.selectedTask)
      this.props.addAssignmentsRequest({type: 'task', task_id: thisTask.id, title: thisTask.title, due_date: dueDate}, selectedStudents)
      numCreated += selectedStudents.length
    }

    if (this.state.selectedQuiz) {
      const thisQuiz = this.state.allQuizzes.find((el) => el.id === this.state.selectedQuiz)
      this.props.addAssignmentsRequest({type: 'quiz', quiz_id: thisQuiz.id, title: thisQuiz.title, due_date: dueDate}, selectedStudents)
      numCreated += selectedStudents.length
    }

    this.setState({message: `${numCreated} assignments were created for ${numStudents} students`})

    // Clear forms and state
    clearForm()
    this.setState({
      selectedTask: 0, 
      selectedQuiz: 0
    })
  }

  render () {
    return (
      <TeacherFunctions {...this.props} {...this.state} handleSubmit={this.handleSubmit} handleSelectQuiz={this.handleSelectQuiz} handleSelectTask={this.handleSelectTask} handleDateChange={this.handleDateChange} due_date={this.state.due_date} />
    )
  }
}

const toggleCheckAll = (tbodyId, status) => (dispatch) => {
	let checkboxes = document.querySelectorAll(`${tbodyId} td.select input[type="checkbox"]`)
	checkboxes = [...checkboxes]
	checkboxes.forEach(checkbox => {
		checkbox.checked = status
	})
}

const clearForm = () => {
	let checkboxes = document.querySelectorAll('input[type="checkbox"]')
	checkboxes = [...checkboxes]
	checkboxes.forEach(checkbox => {
		checkbox.checked = false
	})
	let selects = document.querySelectorAll('select')
	selects = [...selects]
	selects.forEach(select => {
		select.selectedIndex = 0
	})
}

const displayMessage = (message) => {
	document.getElementById('message-box').innerHTML = message
}

const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students,
    library: state.library
  }
}

const mapDispatch = {addAssignmentsRequest, toggleCheckAll}

export default connect(mapState, mapDispatch)(TeacherFunctionsContainer)
