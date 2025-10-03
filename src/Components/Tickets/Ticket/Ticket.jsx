import React from 'react';
import vector2 from '../../../assets/vector2.png'
import calenderImg from '../../../assets/ri_calendar-line.png'

const Ticket = ({ ticket, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer">
            <div className="card bg-base-100 w-full shadow-sm hover:shadow-md transition">
                <div className="card-body">
                    <h2 className="card-title flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span>{ticket.title}</span>
                        <div className="badge badge-secondary flex items-center gap-2 px-2 py-1">
                            <img
                                src={vector2}
                                alt="status"
                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                            />
                            <span className="text-xs sm:text-sm md:text-base text-black">
                                {ticket.status}
                            </span>
                        </div>
                    </h2>
                    <p className="text-sm md:text-base">{ticket.description}</p>

                    <div className="card-actions flex flex-col sm:flex-row sm:justify-between gap-2 mt-3">
                        <div className='flex gap-x-4 text-sm'>
                            <p>#{ticket.id}</p>
                            <p>{ticket.priority}</p>
                        </div>
                        <div className='flex flex-wrap gap-2 text-sm'>
                            <p>{ticket.customer}</p>
                            <div className='flex gap-2'>
                                <img src={calenderImg} alt="" className="w-4 h-4" />
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
