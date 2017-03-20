import React from 'react'

const StudentSettings = ({user, teacher}) => {


  return (
    <div className="dashboard">
      <div className="container panel-container">

        <div className="flex-container">

          <section className="flex-child panel settings">
            <div className="panel-header">Settings</div>
            <div className="settings-content">
              <form>
                <fieldset>
                  <div className="form-group">
                    <label>Name</label><br/>
                    <input type="text" name="name" value={ user.name }/><br/>
                    <label>E-mail</label><br/>
                    <input type="text" name="email" value={ user.email }/><br/>
                    <label>Teacher</label><br/>
                    <span className="alert-inline">You are not allowed to change your teacher.</span><br/>
                    <input type="text" name="teacher" value="unknown" disabled/><br/>
                    <button type="submit" className="btn">Update Information</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>
          
        </div> 
      </div> 
    </div> 
  )
}

export default StudentSettings
