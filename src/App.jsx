
import { Suspense } from 'react'
import Banner from './Banner/Banner'
import Tickets from './Components/Tickets/Tickets'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const fetchTickets = fetch('/tickets.json')
  .then(res => res.json())

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>
      }>
        <Tickets fetchTickets={fetchTickets}></Tickets>
      </Suspense>



      <Footer></Footer>
    </>
  )
}

export default App
