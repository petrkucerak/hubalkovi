export default function Cover() {
  return (
    <div
      className={`bg-[#000] bg-cover bg-center w-full h-[100vh] bg-[url('/images/cover.jpg')] flex justify-around items-center flex-col`}
    >
      <div className={`bg-[#000] opacity-40 absolute w-full h-[100vh]`}></div>
      <h1 className="text-white text-3xl uppercase z-10 font-quicksand font-light tracking-widest">
        Budeme se brát
      </h1>
      <img
        src="/images/title-white.svg"
        className="max-w-[600px] w-[90vw] z-10"
      />
      <h1 className="text-white text-5xl uppercase z-10 font-quicksand font-light">
        30. 9. 2023
      </h1>
    </div>
  );
}
