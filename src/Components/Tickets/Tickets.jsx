import React, { use } from 'react';
import Ticket from './Ticket/Ticket';

const Tickets = ({ fetchTickets, handleTicketClick, taskStatus }) => {
  const ticketsData = use(fetchTickets);
  const tickets = ticketsData;

  return (
    <div className="mt-8 mb-8 w-11/12 mx-auto flex gap-6 bg-[#F5F5F5]">
      <div className="w-3/4">
        <h3 className="text-2xl font-semibold mb-4">Customer Tickets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tickets.map(ticket => (
            <Ticket key={ticket.id}
              ticket={ticket}
              onClick={() => handleTicketClick(ticket)} />
          ))}
        </div>
      </div>

      <aside className="w-1/4 bg-[#F5F5F5] p-4 ">
   <div className='mb-5'>
          <p className="text-2xl font-medium mb-2">Task Status</p>
          
          {taskStatus.length === 0 ? (
            <p>Select a ticket to add to Task Status</p>
          ) : (
            <ul className="space-y-3">
              {taskStatus.map((t, i) => (
                <li key={i} className="flex justify-between items-center bg-white shadow p-2 rounded">
                  <span className="font-medium">{t.title}</span>
                  <button className="btn btn-sm btn-success">
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>


        <div>
          <p className="text-2xl font-medium mb-2">Resolved Task</p>
          <p> No resolved task yet</p>
        </div>
      </aside>
    </div>
  );
};

export default Tickets;
