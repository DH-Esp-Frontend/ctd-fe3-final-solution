import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  const [dentist, setDentist] = useState(undefined)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
    setDentist((data))})
  }, [id])


  return (
    <>
      <h1>Detail Dentist {id} </h1>
      { 
      dentist ? 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr> 
              <th>{dentist.name} </th>
              <th>{dentist.email} </th>
              <th>{dentist.phone} </th>
              <th>{dentist.website} </th>
          </tr>
        </tbody>
      </table>
      : null  
    }
    </>
  )
}

export default Detail