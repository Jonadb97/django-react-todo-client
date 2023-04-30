import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { TaskFormPage } from '../pages/TaskFormPage';

export function Navigation() {

  return (
     <div>
      <h1><Link className="link" to="/">Task App</Link></h1>
          <Link className="link" to="/tasks-create">Create Task</Link>
     </div>
  );
}