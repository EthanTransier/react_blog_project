import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SignIn() {
    const [form, setForm] = useState({ email: '', password: '' });

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const navigate = useNavigate();

    async function fetchFunction(e) {
        e.preventDefault();
        const getData = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({ ...form })
        });

        const pass = await getData.json();

        if (pass.success) {
            updateForm({ email: "", password: "" });
            navigate("/profile");
        } else {
            alert("Error");
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