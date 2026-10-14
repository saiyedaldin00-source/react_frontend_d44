import {lazy,suspense} from "react";
import { Routes, Route } from 'react-router-dom';

import authRoute from './authRoute';
import './App.css';
const Login= lazy(()=>import('./components/Login'))
const Dashboard= lazy(()=>import('./components/Dashboard'))
const AddUser= lazy(()=>import('./components/AddUser'))
const EditUser= lazy(()=>import('./components/EditUser'))


function App() {
  return (
    <suspense fallback={<div classname='loading'>..loading</div>}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<authRoute><Dashboard /></authRoute>} />
      <Route path="/addUser" element={<authRoute><AddUser /></authRoute>} />
      <Route path="/edit-user/:id" element={<authRoute><EditUser /></authRoute>} />
    </Routes>
    </suspense>
  );
}

export default App;
