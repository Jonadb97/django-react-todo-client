import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage.jsx";
import { TaskFormPage } from "./pages/TaskFormPage.jsx";
import { Navigation } from "./components/Navigation.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPage />}></Route>
          <Route path="/tasks-create" element={<TaskFormPage />}></Route>
          <Route path="/tasks/:id" element={<TaskFormPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
