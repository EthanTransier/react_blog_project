import { useState } from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  const navigate = useNavigate();

  async function fetchFunction(e) {
    e.preventDefault();

    try {
      const getData = await fetch('http://localhost:5000/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ...form }),
      });

      if (!getData.ok) {
        throw new Error(`HTTP error! Status: ${getData.status}`);
      }

      const pass = await getData.json();

      if (pass.success) {
        updateForm({user_name:'', email: '', password: '',  password2: ''});

        navigate('/login');
      } else {
        console.log('failed to register');
        alert('Uh Oh! Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error');
    }
  }


  return (
    <form onSubmit={fetchFunction} className="mt-2">
      <input
        type="text"
        className="form-control"
        id="user_name"
        value={form.user_name}
        placeholder="Enter Username"
        onChange={(e) => updateForm({ user_name: e.target.value })}
      />
      <br />
      <input
        type="text"
        className="form-control"
        id="email"
        value={form.email}
        placeholder="Enter email"
        onChange={(e) => updateForm({ email: e.target.value })}
      />
      <br />
      <input
        type="password"
        className="form-control"
        id="password"
        value={form.password}
        placeholder="Enter password"
        onChange={(e) => updateForm({ password: e.target.value })}
      />
      <br />
      <input
        type="password"
        className="form-control"
        id="password2"
        value={form.password2}
        placeholder="Re-Enter password"
        onChange={(e) => updateForm({ password2: e.target.value })}
      />
      <div className="d-flex justify-content-center w-100 mt-2 flex-col">
        <button type="submit">Register</button>
        <br />
      </div>
    </form>
  );
}
export default Register