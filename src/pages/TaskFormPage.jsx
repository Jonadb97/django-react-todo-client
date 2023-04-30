import { React, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createTask,
  deleteTask,
  updateTask,
  getTask,
} from "../api/tasks.api.js";
import { useNavigate, useParams } from "react-router-dom";
import { TaskCard } from "../components/TaskCard.jsx";

export function TaskFormPage() {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    data.done = true;
    const res = await createTask(data);
    navigate("/tasks");
    if (params.id) {
      console.log("Updating...");
      updateTask();
    } else {
      await createTask(data);
    }
  });

  useEffect( () => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue('title', res.data.title);
        setValue('description', res.data.description)
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <h2>Task Form Page</h2>
      <form id="task-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Your title here"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          name="description"
          id="task-description"
          cols="30"
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button>Save</button>
      </form>
      {params && (
        <button
          className="delete-button"
          onClick={async () => {
            const accepted = window.confirm(
              "Are you 100% sure you want to do this?"
            );
            if (accepted) {
              await deleteTask(params.id);
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
