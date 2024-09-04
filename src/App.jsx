import { useEffect, useState } from 'react'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
      fetch('/api')
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

  return (
    <>
        { data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <div>Loading...</div> }
    </>
  )
}

export default App
