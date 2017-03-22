import 'moment/locale/fr.js';

import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { DatePicker, DatePickerInput } from 'rc-datepicker'

import DueDate from '../components/DueDate'


const toggleInput = () => this.setState({ showInput: !this.state.showInput })

const onClear = () => this.setState({ datePickerDate: null })

const log = (...x) => console.log(...x) 

const resetState = () => this.setState({ datePickerInputDate2: undefined })

const mapState = (state) => {
  return {
  datePickerDate: '2015-05-13',
  datePickerInputDate: null,
  datePickerInputDate2: null,
  showInput: true,
  disabled: false
}}

//const mapDispatch = {toggleInput, onClear, log, resetState}

export default connect(mapState)(DueDate)


