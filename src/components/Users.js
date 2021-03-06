import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const  Users = () =>  {

  const [searchParams, setSearchParams] = useSearchParams()
  
  const ShowActiveUsers = searchParams.get('filter') === 'active'

  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active'})}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>
          Reset Filter
        </button>
        {
          ShowActiveUsers ? (

            <h2>Showing Active Users</h2>
          ) :
            <h2>Showing All users </h2>
        }
      </div>
    </div>
  )
}

export default Users