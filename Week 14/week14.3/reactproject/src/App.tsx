import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

interface User {
  name: string;
  email: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User>();

  useEffect(() => {
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
      .then(res => {
        setLoading(false);
        setData(res.data)
      })

  }, [])

  if (loading) {
    return "Loading..."
  }

  return (
    <>
      <div>
        Name: {data?.name}
        Email:{data?.email}
      </div>
    </>
  )
}

export default App
