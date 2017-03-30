/**
* @description Calculates grades from array of assignments
* @param {array} array of objects (assignments) 
* @returns {array} array of objects with grades per subject
*/
export const getGrades = (array) => {
	const report = []

	array.forEach(assignment => {
    let instance;
    // Determine if instance is a quiz or task
    if (assignment.quiz) instance = assignment.quiz
    else if (assignment.task) instance = assignment.task
    let subject = instance.subject
    // If subject object doesn't exist in Report Card, create a new one
    let subjectIndex = report.findIndex((obj) => {
      return obj.subject == subject     
    })
    if (subjectIndex === -1) {
      let newSubject = {
        subject: subject,
        totalAssigments: 0,
        gradedAssignments: 0,
        partialGrade: 0,
        finalGrade: 0,
        totalGrade: 0,
        spread: {numOfAs: 0, numOfBs: 0, numOfCs: 0, numOfFs: 0, incomplete: 0}
      }
      report.push(newSubject)
      // Reassign index
      subjectIndex = report.length - 1
    }
    // Calculate numbers
    report[subjectIndex].totalAssigments++
   
    if (assignment.grade) {

      report[subjectIndex].totalGrade += +assignment.grade
      report[subjectIndex].gradedAssignments++

      report[subjectIndex].partialGrade = Math.round(report[subjectIndex].totalGrade / report[subjectIndex].gradedAssignments)
      if (isNaN(report[subjectIndex].partialGrade)) report[subjectIndex].partialGrade = 0
      report[subjectIndex].finalGrade = Math.round(report[subjectIndex].totalGrade / report[subjectIndex].totalAssigments)

      if(assignment.grade >= 90) report[subjectIndex].spread.numOfAs ++
      else if(assignment.grade >= 80 && assignment.grade < 90) report[subjectIndex].spread.numOfBs ++
      else if(assignment.grade >= 70 && assignment.grade < 80) report[subjectIndex].spread.numOfCs ++
      else if(assignment.grade < 70) report[subjectIndex].spread.numOfFs ++      
    }

    else {
      report[subjectIndex].spread.incomplete ++    
    }
  })
  return report
}

// Calculates the overall GPA
export const GPA = (report) => {
  let count = 0
  let result = report.reduce((total, subject) => {
    if(subject.gradedAssignments > 0) {
      count ++
      return subject.partialGrade + total
    }
    else return total
  }, 0) / count
  return (result > 0) ? result : null
}

// Used for calculating the spread of the overal GPA only
export const letterSpread = (report) => {
  let spread = {numOfAs: 0, numOfBs: 0, numOfCs: 0, numOfFs: 0}
  report.forEach(subject => {
    spread.numOfAs += subject.spread.numOfAs
    spread.numOfBs += subject.spread.numOfBs
    spread.numOfCs += subject.spread.numOfCs
    spread.numOfFs += subject.spread.numOfFs
  })
  return spread  
}

