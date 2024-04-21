import Voice from "../Voice";
import NavBar from "../navBar/NavBar";
import { Sparkles } from "lucide-react";

export default function Input() {
  return (
    <main className="main">
      <div>
        <NavBar />
      </div>
      
      <div className="main-page">
        {/* <a href="/api/auth/login">Login</a>
        <br />
        <a href="/api/auth/logout">Logout</a>

        <Voice /> */}
        <div className = "main-text">
          <h1 className="text-4xl font-bold">Teach me</h1>
          <input type="text" placeholder="name a topic..." className="large-input" />
        </div>

        <button className="primary">
        {" "}
        <Sparkles /> Make magic
        </button>
      </div>
    </main>
  );
}
