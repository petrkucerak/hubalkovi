"use client";

import { useState } from "react";

export default function Story() {
  const [visibility, setVisibility] = useState("hidden");
  const showStory = () => {
    if (visibility === "hidden") setVisibility("visible");
    else setVisibility("hidden");
  };

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
      <button
        className="bg-[#dbcdc1ff] hover:bg-[#caa789] text-[#583922] font-bold py-2 pr-4 pl-2 rounded mb-8 text-lg inline-flex items-center"
        type="button"
        onClick={showStory}
      >
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
      <div
        id="more-story"
        className={`${visibility} max-w-[1000px] w-[90vw] font-semibold my-8 text-lg sm:pl-12 sm:border-l-2 sm:border-[#583922]`}
      >
        <h3 className="font-bold text-2xl">Příběh naší lásky</h3>
        <p className="my-2">
          Píše se léto 2021, kdy na Diecézní centrum života mládeže Vesmír se
          vydává Marunka z Horního Kostelce. Pár dní před tím, než odjela na
          Týden identity na Vesmíru, jí její kamarád požádal o svědkovství na
          svatbě. Kamil jí ukázal fotku spolusvědka Jirky se slovy: „… a
          seznámit se můžete na Vesmíru. Teď tam pojedeš.”
        </p>
        <p className="my-2">
          Přijela tedy na Vesmír, přišla do jídelny a viděla ho tam. S kytarou…!
          Seznámení bylo jen o prohození pár zmatečných slov.
        </p>
        <p className="my-2">
          Když uplynulo pár dnů, tehdy snoubenci, teď už novomanželé Regnerovi,
          se rozhodli, že své svědky seznámí více.
        </p>
        <p className="my-2">
          Peprná procházka se vedla v duchu vyměňování si názorů Marunky a Jirky
          o nesmrtelnosti brouka.
        </p>
        <p className="my-2">
          Asi se Jirka rozhodl svědkyni pěkně prověřit. Natolik, že Marunka šla
          o 10 kroků napřed jen, aby unikla nepříjemným otázkám… (Kdyby tak
          věděla, že jednou bude k němu přicházet k oltáři).
        </p>

        <img src="/images/story-1.webp" className="my-8 rounded"/>

        <p className="my-2">
          Začali si psát. Nejprve kvůli svatbě Kamila a Pavlínky. Avšak co se
          neděje. Psaní se nám přetváří v dlouhé noční hovory a řešení, zda-li
          je to klobouk, nebo slon v hroznýši.
        </p>
        <p className="my-2">
          Jak čas plynul, pro Jirku se Marunka stávala skálou a Jirka pro
          Marunku kamarádem do deště. Jakoby ale oboum pořád jen vrtalo hlavou,
          co je to za pocit, když na sebe myslí. „Nenee budeme dobří kamarádi“
          řekli si „a to platí!“
        </p>
        <p className="my-2">
          Byla svatba. Svědci splnili svoji misi, ale netušili, jaká společná
          budoucnost je ještě čeká.
        </p>
        <p className="my-2">
          Kamil s Pavlínkou si řekli, že dají svědkům ještě jednu posvatební
          zkoušku: SJET SPOLU BEROUNKU.
        </p>
        <p className="my-2">
          Píše se léto 2022 a Jirka vyzvedává Marunku na cestě na vodu směr
          Berounka. Postavit stan - to je hračka. Rozdělat oheň - není problém.
          Ale sjet vodu - to je kumšt!
        </p>
        <p className="my-2">
          Tenkrát to byl admirál, kdo říkal, když je viděl plout spolu: „Jsou
          jen dvě možnosti pro dva lidi, co spolu jedou vodu. Buď se rozejdou,
          nebo spolu začnou chodit.“ Jak šly dny, rozbouřené vody nedorozumění,
          kdo jak má pádlovat se uklidňovaly a Jirka s Marunkou spolu prožili
          něco kouzelného.
        </p>
        <p className="my-2">
          Na konci týdne se schází v kostele sv. Matouše na Vesmíru rozhodnuti
          si popovídat.
        </p>
        <p className="my-2">
          Člověk míní a Pán Bůh mění a u nich se rozhodl změnit jejich životy už
          navždy. A tak spolu Jirka s Marunkou 23.7.2022 pod kouzelným stromem U
          kříže zahájili svoji společnou cestu životem.
        </p>
      </div>
    </div>
  );
}