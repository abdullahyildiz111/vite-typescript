import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const App: React.FC = () => {


  interface UserInterface {
    name: string;
    age: string;
    job: string;
  }

  interface AllUsersInterface {
    currentUser: UserInterface
    allUsers: Array<UserInterface>
  }


  const [usersState, setUsersState] = useState<AllUsersInterface>({
    currentUser: {
      name: "",
      age: "",
      job: ""
    },
    allUsers: []
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(usersState)

    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value
      }
    })
    console.log(usersState)

  }

  const submitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    setUsersState({

      currentUser: {
        name: "",
        age: "",
        job: ""
      },
      allUsers: [...usersState.allUsers, usersState.currentUser]
    })

  }

  console.log(usersState)


  const userlist = usersState.allUsers.map((user, index) => (

    
      <div key={index}>
        <h2>{user.name}</h2>
        <h2>{user.job}</h2>
        <h2>{user.age}</h2>
      </div>
    )
  )

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
      {userlist}
    </div>
  )
}

export default App
