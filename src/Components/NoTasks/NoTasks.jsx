import React from 'react';
import noTasks from "../../assets/Group-41.png";

function NoTasks() {
  return (
    <div className='no-tasks'>
        <img src={noTasks} alt="tasksImage" />
        {/* <img src="/Images/Group-41.png" alt="" /> */}
        <h3>No Tasks Yet</h3>
        <p>You have no task created in your workspace yet.</p>
        <p>Get productive. Create a Task Now.</p>
    </div>
  )
}
//rfc sau rfce:
export default NoTasks;