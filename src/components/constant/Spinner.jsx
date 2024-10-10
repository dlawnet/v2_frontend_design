function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img
        src="/spinner.gif"
        alt="Loading..."
        className="w-[5%] text-[var(--primary-color)]"
      />
    </div>
  );
}

export default Spinner;
