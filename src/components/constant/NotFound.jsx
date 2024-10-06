import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <button
        onClick={handleHome}
        className="buttonWhite uppercase hover:text-black bg-black hover:border hover:border-stone-500 outline-none flex text-white lg:py-3 lg:px-5 py-2 px-4 rounded-full"
      >
        Home
      </button>
    </div>
  );
}

export default NotFound;
