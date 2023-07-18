export default function Story() {
  return (
    <div className="w-full flex justify-start items-center flex-col min-h-[90vh] font-quicksand">
      <h2 className="font-bold text-4xl mt-24 mb-8 uppercase">Náš příběh</h2>
      <p className="max-w-[1000px] w-[90vw] text-lg font-semibold">
        Jsme pár - dva spojeni láskou, kterou se rozhodli zářit světu. Lidi
        žhnoucího srdce pro věci, co naplní naše životy radostí a smyslem. Pár
        vzešlý z přátelství, kořeny hluboko v upřímnosti a směrem k Bohu
        kráčející i přes marasti života s vědomím, že u něj je vždy pokoj.
        Ostatně jemu vděčíme za ten zázrak, že jsme spolu.
      </p>
      <img
        src="/images/story-title.webp"
        alt="Jiřík držící kytaru a Maruška mu hledí do očí"
        className="max-w-[1000px] w-[90vw] my-12 rounded"
      />
      <button className="bg-[#dbcdc1ff] hover:bg-[#caa789] text-[#583922] font-bold py-2 pr-4 pl-2 rounded mb-8 text-lg inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrow-badge-down-filled"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
        <span>Číst příběh naší lásky</span>
      </button>
    </div>
  );
}
