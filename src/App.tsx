import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const App: React.FC = () => {


  interface userInterface {
    name: string;
    age: string;
    job: string;
  }

  const [usersState, setUsersState] = useState<{ currentUser: userInterface }>({
    currentUser: {
      name: "",
      age: "",
      job: ""
    }
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(usersState)

    setUsersState({
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value
      }
    })
    console.log(usersState)


  }

  const submitHandler= (e: React.SyntheticEvent): void =>{
e.preventDefault()
  }

  return (
    <div className="container">
      <h1>React with typescript</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username" >Name</label>
        <input
          id="username"
          type="text"
          value={usersState.currentUser.name}
          name="name"
          onChange={changeHandler}
        />

        <label htmlFor="userjob" >Job</label>
        <input
          id="userjob"
          type="text"
          value={usersState.currentUser.job}
          name="job"
          onChange={changeHandler}
        />
        <label htmlFor="userage" >Age</label>

        <input
          id="userage"
          type="number"
          value={usersState.currentUser.age}
          name="age"
          onChange={changeHandler}
        />
        <button type='submit'>Add user</button>
      </form>
    </div>
  )
}

export default App
