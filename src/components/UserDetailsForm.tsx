import { useState } from "react"

export default function UserDetailsForm() {
  interface User {
    name: string,
    email: string,
    age: number
  }
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [userList, setUserList] = useState<Array<User>>([])
  const formListToShowUserInput = () : void => {
    const newUser: User = {
      name, email, age
    }
     setUserList([...userList, newUser])
     setName('')
     setEmail('')
     setAge(0)
  }
  const resetUserDetails = () : void => {
    setName('')
    setEmail('')
    setAge(0)
    setUserList([])
  }
  return (
    <div>
      <h1>User Details Form</h1>
      <form onSubmit={(e) => {e.preventDefault(); formListToShowUserInput()}}>
        <label>
          Name:
          <input type="text" value={name} name="name"  onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>Email:
          <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Age:
        <input type="number" value={age} name="age" onChange={(e) => setAge(Number(e.target.value))} />
      </label>
      <button type="submit">Submit</button>
      <ul>
          {
            userList.map((item, index) => (
              <li key={index}>{item.name} - {item.email} - {item.age}</li>
            )
          )
          }
      </ul>
      </form>
      { userList.length && <button onClick={() => resetUserDetails()}>reset UserDetails</button>}
      </div>
    ) 
}
