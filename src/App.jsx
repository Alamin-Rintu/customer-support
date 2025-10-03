
import { Suspense, useState } from 'react'
import Banner from './Banner/Banner'
import Tickets from './Components/Tickets/Tickets'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const fetchTickets = fetch('/tickets.json')
  .then(res => res.json())

function App() {

  const [inProgress, setInProgress] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);

  const handleTicketClick = (ticket) => {
    alert(`Ticket "${ticket.title}" added to In-Progress`);
    setInProgress(inProgress+ 1);
    setTaskStatus(prev => [...prev, ticket]);
  }
  
  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={inProgress}></Banner>

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>
      }>
        <Tickets fetchTickets={fetchTickets}
         handleTicketClick={handleTicketClick}
         taskStatus={taskStatus} ></Tickets>
      </Suspense>



      <Footer></Footer>
    </>
  )
}

export default App
