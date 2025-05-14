import { Link } from "react-router-dom"
import './css/HomePage.css';

export default function HomePage() {
  return (
    <div>
      <h1>Hi, Welcome to Todo App Web Application</h1>
      <p>
        You can start creating your daily tasks in this and you can mark it whatever is Done and what ever is pending, so that it will be easy for you to track your daily tasks.
      </p>
      <nav>
        <button className="todo-button"><Link to="/todo" className="link-reset">Click Here To Start your tracker</Link></button>
      </nav>
    </div>
  )
}