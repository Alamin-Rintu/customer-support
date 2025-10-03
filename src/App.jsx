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

      {/* banner section */}
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

      {/* footer section */}

      <footer className="bg-neutral text-neutral-content p-10 mt-5">
        <div className="flex flex-col sm:flex-row gap-10 justify-center ">
          <nav className="flex-1">
            <h6 className="footer-title text-2xl">CS-Ticket System</h6>
            <p className="mt-2">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem <br />
              Ipsum has been the industry's standard <br />
              dummy text ever since the 1500s, when an <br />
              unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.
            </p>
          </nav>

          <nav className="flex-1">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a> <br />
            <a className="link link-hover">Our Mission</a> <br />
            <a className="link link-hover">Contact Sales</a>
          </nav>

          <nav className="flex-1">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product & Services</a> <br />
            <a className="link link-hover">Customer Stories</a> <br />
            <a className="link link-hover">Download Apps</a>
          </nav>

          <nav className="flex-1">
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a> <br />
            <a className="link link-hover">Terms & Conditions</a> <br />
            <a className="link link-hover">Join Us</a>
          </nav>

          <nav className="flex-1">
            <h6 className="footer-title">Social Links</h6> <br />
            <a className="link link-hover">@CS-Ticket System</a><br />
            <a className="link link-hover">@CS-Ticket System</a><br />
            <a className="link link-hover">@CS-Ticket System</a><br />
            <a className="link link-hover">support@cst.com</a>
          </nav>
        </div>

        <p className="text-center mt-10 border-t border-neutral/50 pt-5">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>



    </>
  )
}

export default App
