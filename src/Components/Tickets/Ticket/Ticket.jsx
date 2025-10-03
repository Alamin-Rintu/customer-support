import React from 'react';
import vector2 from '../../../assets/vector2.png'
// import vector2 form '../../../assets/vector2.png'
import calenderImg from '../../../assets/ri_calendar-line.png'

const Ticket = ({ ticket }) => {
    console.log(ticket)
    return (
        <div >
            <div className="card bg-base-100 w-full shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">
                        {ticket.title}
                        <div className="badge badge-secondary flex items-center gap-2 px-2 py-1">
                            <img
                                src={vector2}
                                alt="status"
                                className="w-3 h-3 sm:w-4 sm:h-4  rounded-full"
                            />
                            <span className="text-xs sm:text-sm md:text-base text-black">
                                {ticket.status}
                            </span>
                        </div>


                    </h2>
                    <p>{ticket.description}</p>

                    <div className="card-actions flex gap-x-6 ">
                        <div className='flex gap-x-4'>
                            <p>#{ticket.id}</p>
                            <p>{ticket.priority}</p>
                        </div>
                        <div className='flex gap-x-4'>
                            <p>{ticket.customer}</p>
                            <div className='flex gap-2'>
                                <img src={calenderImg} alt="" />
                                <p>{ticket.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;