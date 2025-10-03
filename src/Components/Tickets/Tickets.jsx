import React, { use } from 'react';
import Ticket from './Ticket/Ticket';

const Tickets = ({ fetchTickets }) => {
  const ticketsData = use(fetchTickets);
  const tickets = ticketsData;

  return (
    <div className="mt-8 mb-8 w-11/12 mx-auto flex gap-6 bg-[#F5F5F5]">
      {/* Main section */}
      <div className="w-3/4">
        <h3 className="text-2xl font-semibold mb-4">Customer Tickets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tickets.map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>

      {/* Aside section */}
      <aside className="w-1/4 bg-[#F5F5F5] p-4 ">
        <p className="font-medium">Hi</p>
      </aside>
    </div>
  );
};

export default Tickets;
