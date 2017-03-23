import React from 'react'

const StudentReportCard = ({user, assignments, teacher}) => {

  return (
    <div className="dashboard">
      <div className="container panel-container">

        <section className="flex-child panel reportcard">
          <div className="panel-header">Report Card</div>
          <div className="panel-subheader"><strong>Teacher:</strong> {' '+teacher.user.firstName + ' ' + teacher.user.lastName} </div>
          <div className="reportcard-content">
            <div className="card">
              <h2>Student: {user.name}</h2>
              <table>
                <tbody>
                  <tr>
                    <th className="text">Subject</th>
                    <th>Graded Assignments</th>
                    <th>Total Assignments</th>
                    <th>Partial Grade</th>
                    <th>Final Grade</th>
                  </tr>
                  <tr>
                    <td className="text">English</td>
                    <td>80</td>
                    <td>4</td>
                    <td>5</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td className="text">Math</td>
                    <td>80</td>
                    <td>4</td>
                    <td>5</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td className="text">Science</td>
                    <td>80</td>
                    <td>4</td>
                    <td>5</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td className="text">Astrology</td>
                    <td>80</td>
                    <td>4</td>
                    <td>5</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td className="text">Cooking</td>
                    <td>80</td>
                    <td>4</td>
                    <td>5</td>
                    <td>80</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default StudentReportCard
