import {useEffect, useState, useRef} from 'react'
import './css/TodoApp.css';
interface taskData {
  task: string,
  isDone: boolean
}
export default function TodoApp() {
  const [todayDate, setTodayDate] = useState<Date>(new Date())
  const [task, setTask] = useState<string>('')
  const [taskList, setTaskList] = useState<Array<taskData>>([])
  const firstRun = useRef(true)
  const addTaskToList =  (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
     if (task.length) {
      setTaskList(prev => [...prev, {task, isDone: false}])
      setTask('')
     }
  }
  const markItAsDone = (index: number): void => {
    const newList = taskList.map((item, i) => {
      if (i === index) {
         return {...item, isDone: true}
      }
      return item
    })
    setTaskList(newList)
  }
  const clearAllTasks = (): void =>{
    setTaskList([])
  }
  const deleteTask = (index: number): void => {
    const updatedList = taskList.filter((_, i) => i !== index)
    setTaskList(updatedList)
  }
  useEffect(() => {
    const taskData = localStorage.getItem('task-list')
    console.log('Loaded from localStorage on mount:', taskData);
    if (taskData) {
      const parsed: taskData[] = JSON.parse(taskData);
      console.log('Parsed data:', parsed);
      setTaskList(parsed)
    }
  }, [])
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    localStorage.setItem('task-list', JSON.stringify(taskList));
    console.log('Saved to localStorage:', localStorage.getItem('task-list'));
  }, [taskList])
  
  return (
    <div>
      <div className='todo-heading '>
        <div>
        <div className='todo-done'>Todo Done</div> 
        <div className='keep-it-up'> Keep It Up</div>
        </div>
        <div className='todo-count'>
          {taskList.filter(item => item.isDone).length} / {taskList.length}
        </div>
      </div>
      <form onSubmit={addTaskToList}>
        <input
          type="text"
          className="task-input"
          placeholder='write your next task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        >
        </input>
        <button type="submit" className="add-task">
          + Add
        </button>
      </form>
      <div className="todo__list">
      {taskList.length ? taskList.map((item, index) => (
        <div key={index} className="task-item">
          <div className='task-text'>
            <label className="custom-checkbox">
              <input type="checkbox" checked={item.isDone} onChange={() => markItAsDone(index)}/>
              <span className="checkmark"></span>
            </label>
            <span className={item.isDone ? 'stike': ''}>{item.task}</span>
          </div>
          <div>
            {/* <i className="fa fa-edit" style={{ fontSize: '26px', color: 'gray'}}></i> */}
            <span onClick={() => deleteTask(index)}>
              <i className="material-icons" style={{ fontSize: '26px', color: 'gray'  }}>delete</i>
            </span>
          </div>
        </div>
      )): 'please add your tasks'}
      </div>
      {taskList.length ? <button className="delete-all" onClick={() => clearAllTasks()}>Delete All Tasks</button>: ''}
    </div>
  )
}
