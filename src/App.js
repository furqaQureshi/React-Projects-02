import React, { useState, useEffect } from 'react'
import Tours from './Components02/Tours'
import Loading from './Components02/Loding'
import './App.css'
function App() {
  const url = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours);
    } catch (error) {
      setLoading(false)
    }
  }
  const removeUser = (id) => {
    const news = tours.filter(x => x.id !== id);
    setTours(news)
  }
  if (loading) {
    <Loading />
  }
  useEffect(() => {
    fetchUser();
  }, [])

    if (tours.length === 0) {
    return (
      <main>
        <h1>No Tours</h1>
        <button onClick={() => setLoading(fetchUser)}>Refersh</button>
      </main>
    )
  }
  return (
    <div>
      <div className="container">
        <Tours tours={tours} removeUser={removeUser} />
      </div>
    </div>
  )
}

export default App