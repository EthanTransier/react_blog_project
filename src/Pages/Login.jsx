import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
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
        const getData = await fetch('http://localhost:3000/login', {
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
          sessionStorage.setItem('user', JSON.stringify({ ...form }));
          sessionStorage.setItem('authenticated', true);

          updateForm({ email: '', password: '' });

          navigate('/');
        } else {
          console.log('failed to login');
          alert('Error');
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
            <div className="d-flex justify-content-center w-100 mt-2 flex-col">
                <button type="submit">Login</button>
                <br />
            </div>
        </form>
    );
}
export default Login