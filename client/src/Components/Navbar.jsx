import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
export default function Navbar() {
 return (
    <ul className="flex border-b">
      <li className="-mb-px mr-1">
        <button className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" onClick={() => nav("landing")}>Landing</button>
      </li>
      <li className="mr-1">
        <button className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={() => nav("home")}>Home</button>
      </li>
      <li className="mr-1">
        <button className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={() => nav("about")}>About</button>
      </li>
      <li className="mr-1">
        <button className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" onClick={() => nav("edit")}>Edit</button>
      </li>
    </ul>
 );
}