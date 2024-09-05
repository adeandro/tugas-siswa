import BackButton from "../Components/BackButton";

function SebelasB() {
  return (
    <>
      <div className="container  mx-auto bg-white p-5">
        <h1 className="text-center uppercase font-bold text-4xl">
          Tugas Kelas XI 2
        </h1>
      </div>

      <div className="container mx-auto bg-white p-5 mt-5">
        <table className="w-full border-separate border border-slate-300 bg-slate-700">
          <thead>
            <tr>
              <th className="border border-slate-400 text-white">Nama</th>
              <th className="border border-slate-400 text-white">Tugas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-400 text-white p-2"></td>
              <td className="border border-slate-400 text-white p-2"></td>
            </tr>
          </tbody>
        </table>
        <BackButton />
      </div>
    </>
  );
}
export default SebelasB;
