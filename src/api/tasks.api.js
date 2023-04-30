import axios from 'axios';

const taskAPI = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/tasks'
});

export const getAllTasks = () => {
  return taskAPI.get('/');
}

// Different syntax
export const createTask = (task) => taskAPI.post('/', task);

export const getTask = (id) => taskAPI.get(`/${id}`);

export const deleteTask = (id) => taskAPI.delete(`/${id}`);

export const updateTask = (id, task) => taskAPI.put(`/${id}`, task);