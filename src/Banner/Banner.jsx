import React from 'react';
import vectorImg from '../assets/vector1.png'

const Banner = ({inProgress}) => {
    return (
        <section className="w-11/12 mx-auto flex  gap-4 h-[300px] mt-5">
            <div className="w-1/2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg flex flex-col justify-center items-center text-white relative overflow-hidden">
                <img
                    src={vectorImg}
                    alt=""
                    className="absolute bottom-0 left-0 h-full opacity-50"
                />
                <img
                    src={vectorImg}
                    alt=""
                    className="absolute bottom-0 right-0 h-full opacity-50 rotate-180"
                />
                <h2 className="text-xl font-semibold ">In-Progress</h2>
                <p className="text-3xl font-bold ">{inProgress}</p>
            </div>

            <div className="w-1/2 bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg flex flex-col justify-center items-center text-white relative overflow-hidden">
                <img
                    src={vectorImg}
                    alt="vector left"
                    className="absolute bottom-0 left-0 h-full opacity-50"
                />
                <img
                    src={vectorImg}
                    alt="vector right"
                    className="absolute bottom-0 right-0 h-full opacity-50 rotate-180"
                />
                <h2 className="text-xl font-semibold">Resolved</h2>
                <p className="text-3xl font-bold">0</p>
            </div>
        </section>
    );
};

export default Banner;