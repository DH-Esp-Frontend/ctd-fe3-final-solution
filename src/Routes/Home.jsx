import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const {state} = useContext(ContextGlobal)
  return (
    <div>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.length ?
        state.data.map(dentist => <Card props={dentist} key={dentist.name} />)
        : null}
        </div>
    </div>
  )
}

export default Home