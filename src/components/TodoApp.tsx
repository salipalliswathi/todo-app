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
      <form onSubmit={addTaskToList}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
        <button type="submit">+ Add Task</button>
      </form>
      <div className="todo__list">
        Task List for Today {todayDate.toLocaleDateString()}
      {taskList.length ? taskList.map((item, index) => (
        <div key={index}>
          <input type="checkbox" checked={item.isDone} onChange={() => markItAsDone(index)}/>
          <span className={item.isDone ? 'stike': ''}>{item.task}</span>
        </div>
      )): 'please add your tasks'}
      </div>
      {taskList.length ? <button onClick={() => clearAllTasks()}>Clear All Tasks</button>: ''}
    </div>
  )
}
