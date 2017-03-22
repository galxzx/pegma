import React from 'react'

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
        locale='de'
      />
    </div>
  )
}

export default DueDate