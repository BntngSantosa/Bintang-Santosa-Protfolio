const ButtonUp = () => {
  return (
    <div className="p-3 bg-slate-400 fixed bottom-14 right-0 hidden lg:block">
      <a href="#Home">
        <svg
          className="w-10"
          fill="#e2e8f0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z" />
        </svg>
      </a>
    </div>
  );
};

export default ButtonUp;
