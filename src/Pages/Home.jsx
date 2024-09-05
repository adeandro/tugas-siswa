import bg2 from "../assets/img/2.png";
import Header from "../Components/Header.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-around">
        {/* Card X */}
        <div className="max-w-sm w-full bg-white rounded-sm overflow-hidden shadow-lg m-4">
          <div
            className="h-48 bg-cover bg-center flex items-center justify-center text-white bg-black"
            style={{
              backgroundImage: `url(${bg2})`,
              opacity: 0.7,
            }}
          >
            <h2 className="text-9xl font-bold">X</h2>
          </div>
          <div className="flex flex-wrap gap-4 p-4 justify-center">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
              X.1
            </button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
              X.2
            </button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
              X.3
            </button>
          </div>
        </div>

        {/* Card XI */}
        <div className="max-w-sm w-full bg-white rounded-sm overflow-hidden shadow-lg m-4">
          <div
            className="h-48 bg-cover bg-center flex items-center justify-center text-white bg-black"
            style={{
              backgroundImage: `url(${bg2})`,
              opacity: 0.7,
            }}
          >
            <h2 className="text-9xl font-bold">XI</h2>
          </div>
          <div className="flex flex-wrap gap-4 p-4 justify-center">
            <button
              onClick={() => navigate("/tugas-siswa/SebelasA")}
              className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              XI.1
            </button>
            <button
              onClick={() => navigate("/tugas-siswa/SebelasB")}
              className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              XI.2
            </button>
          </div>
        </div>

        {/* Card XII */}
        <div className="max-w-sm w-full bg-white rounded-sm overflow-hidden shadow-lg m-4">
          <div
            className="h-48 bg-cover bg-center flex items-center justify-center text-white bg-black"
            style={{
              backgroundImage: `url(${bg2})`,
              opacity: 0.7,
            }}
          >
            <h2 className="text-9xl font-bold">XII</h2>
          </div>
          <div className="flex flex-wrap gap-4 p-4 justify-center">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
              XII.1
            </button>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
              XII.2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
