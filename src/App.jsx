import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'



function App() {

  const [watches, setWatches] = useState([])

  useEffect( ()=>{
    fetch('Watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  } ,[])

//  const watches = [
//   {id:1, name: 'apple watch', price: 12000},
//   {id:2, name: 'Rolex watch', price: 12000},
//   {id:2, name: 'Oppo watch', price: 12000},
//   {id:3, name: 'Samsung watch', price: 12000},
//   {id:5, name: 'Mi watch', price: 12000},
//  ]


//fake data

// const watches = [
//   {
//     id: 1,
//     brand: "Apple",
//     model: "Apple Watch Series 6",
//     displaySize: "44mm",
//     operatingSystem: "watchOS",
//     price: 399,
//   },
//   {
//     id: 2,
//     brand: "Samsung",
//     model: "Galaxy Watch 4",
//     displaySize: "40mm",
//     operatingSystem: "Wear OS",
//     price: 249,
//   },
//   {
//     id: 3,
//     brand: "Fitbit",
//     model: "Fitbit Versa 3",
//     displaySize: "40mm",
//     operatingSystem: "Fitbit OS",
//     price: 229,
//   },
//   {
//     id: 4,
//     brand: "Garmin",
//     model: "Garmin Venu 2",
//     displaySize: "42mm",
//     operatingSystem: "Garmin OS",
//     price: 349,
//   },
//   {
//     id: 5,
//     brand: "Fossil",
//     model: "Fossil Gen 5",
//     displaySize: "44mm",
//     operatingSystem: "Wear OS",
//     price: 299,
//   },
// ];




//fake data

 
  return (
    <>
      
      <h1>Vite + React</h1>
    {
      watches.map(watch => <Watch key={watch.id} watch ={watch}></Watch>)
    }

      
    </>
  )
}

export default App
