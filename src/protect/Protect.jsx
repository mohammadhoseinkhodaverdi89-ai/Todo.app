import { useNavigate, Outlet } from "react-router-dom";

function Protect() {
    const token = localStorage.getItem('userToken');
     const navigated = useNavigate()
    if (!token) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        You are not logged in
      </h2>

      <p className="text-gray-500 text-center">
        Please log in to your account to access this page.
      </p>

      <button
        onClick={() => navigated(-1)}
        className="bg-purple-500 text-white px-7 py-1.5 rounded-3xl flex justify-center items-center w-full max-w-xs"
      >
        Back
      </button>
    </div>
  );
}

    return <Outlet />; 
}

export default Protect;
