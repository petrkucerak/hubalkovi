export default function Cover() {
  return (
    <div className="bg-[#1a110a] bg-cover bg-center w-full h-[90vh] bg-[url('/images/cover.webp')] flex justify-around items-center flex-col">
      <div className={`bg-[#000] opacity-40 absolute w-full h-[90vh]`}></div>
      <h1 className="text-white text-2xl sm:text-3xl uppercase z-10 font-thaiBlack font-light tracking-widest text-center max-w-[600px] w-[80vw]">
        Budeme se brát
      </h1>
      <img
        src="/images/title-white.svg"
        className="max-w-[600px] w-[80vw] z-10 lg:max-w-[800px]"
        alt="Marie Novotná & Jiří Hubálek"
      />
      <div className="text-white z-10 font-thaiBlack">
        <p className="text-2xl sm:text-5xl uppercase font-[200] text-center max-w-[600px] w-[80vw]">
          30. 9. 2023
        </p>
        <p className="sm:text-xl text-center font-[200] sm:font-light sm:mt-4">
          10:30 v&nbsp;kostel sv.&nbsp;Jakuba
          <br />
          Červený Kostelec
        </p>
      </div>
    </div>
  );
}
