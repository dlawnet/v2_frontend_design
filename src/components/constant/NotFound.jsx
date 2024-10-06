import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }
  return (
    <div className="flex-col justify-center items-center text-[var(--secondary-color)] flex space-y-3 bg-[var(--primary-color)] h-dvh">
      <h1>404: Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <button
        onClick={handleHome}
        className="buttonWhite uppercase hover:text-black bg-[var(--secondary-color)] hover:border hover:border-stone-500 outline-none text-[var(--primary-color)] font-semibold flex lg:px-5 py-2 px-4 rounded-full"
      >
        Home
      </button>
    </div>
  );
}

export default NotFound;
