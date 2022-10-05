import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const {data, theme} = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false
  return (
    <main className={isDarkMode ? "dark" : "light"} >
      <h1>Home</h1>
      <div className='card-grid'>
        {data.length ?
        data.map(dentist => <Card {...dentist} key={dentist.id} />)
        : null}
        </div>
    </main>
  )
}

export default Home