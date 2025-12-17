import { useEffect, useState } from 'react'

// Main component
function App() {
  // State to track which tab is active (1 = notifications, 2 = message, etc.)
  const [currenttab, setcurrenttab] = useState(1)

  // State to hold the data fetched from API for the current tab
  const [Tabdata, setTabData] = useState({})

  const [loading,setloading] = useState(true)

  // useEffect runs whenever `currenttab` changes
  useEffect(function () {
     setloading(true)
    // Fetch data from JSONPlaceholder API (public demo API)
    // Example: if currenttab = 1 → fetches `/todos/1`
    fetch("https://jsonplaceholder.typicode.com/todos/" + currenttab)
      .then(async res => {
        // Convert raw HTTP response into usable JSON
        const json = await res.json()
        // Save the JSON into React state (this triggers re-render)
        setTabData(json)
        setloading(false)
      })
  }, [currenttab]) 
  // 👆 Dependency array: effect runs whenever `currenttab` changes

  return (
    <div>
      {/* Each button changes the current tab.
          The button's text color turns red if it’s the active tab, black otherwise. */}
      
      <button
        onClick={function () { setcurrenttab(1) }}
        style={{ color: currenttab == 1 ? "red" : "black" }}
      >
        notifications
      </button>

      <button
        onClick={function () { setcurrenttab(2) }}
        style={{ color: currenttab == 2 ? "red" : "black" }}
      >
        message
      </button>

      <button
        onClick={function () { setcurrenttab(3) }}
        style={{ color: currenttab == 3 ? "red" : "black" }}
      >
        home
      </button>

      <button
        onClick={function () { setcurrenttab(4) }}
        style={{ color: currenttab == 4 ? "red" : "black" }}
      >
        likes
      </button>

      <br />

      {/* Display the "title" field from the fetched JSON data */}
      { loading ? "loading... " :Tabdata.title}
    </div>
  )
}

export default App

