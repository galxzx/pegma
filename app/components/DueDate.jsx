import React from 'react'
import 'moment/locale/en-ca'

const DueDate = (props) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);  
  return (
    <div>
      <DatePickerInput
        displayFormat='DD/MM/YYYY'
        returnFormat='YYYY-MM-DD'
        className='my-react-component'
        showOnInputClick
        placeholder='placeholder'
        locale='en-ca'
      />
    </div>
  )
}

export default DueDate