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
        totalGrade: 0
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
    }
    report[subjectIndex].partialGrade = Math.round(report[subjectIndex].totalGrade / report[subjectIndex].gradedAssignments)
    if (isNaN(report[subjectIndex].partialGrade)) report[subjectIndex].partialGrade = 0
    report[subjectIndex].finalGrade = Math.round(report[subjectIndex].totalGrade / report[subjectIndex].totalAssigments)
  })

  return report
}