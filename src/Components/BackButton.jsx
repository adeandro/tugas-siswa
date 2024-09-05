import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 mt-5"
    >
      Kembali
    </button>
  );
}

export default BackButton;
