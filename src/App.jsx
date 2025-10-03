import vectorImg from './assets/vector1.png'

function App() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="flex-none">
          <span className="btn bg-[#7E45Ea] text-white">+ New Ticket</span>
        </div>
      </div>

      {/* Banner section */}
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
          <p className="text-3xl font-bold ">0</p>
        </div>

        {/* Resolved Card */}
        <div className="w-1/2 bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg flex flex-col justify-center items-center text-white relative overflow-hidden">
          {/* Vector LEFT */}
          <img
            src={vectorImg}
            alt="vector left"
            className="absolute bottom-0 left-0 h-full opacity-50"
          />
          {/* Vector RIGHT */}
          <img
            src={vectorImg}
            alt="vector right"
            className="absolute bottom-0 right-0 h-full opacity-50 rotate-180"
          />
          <h2 className="text-xl font-semibold">Resolved</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </section>
    </>
  )
}

export default App
