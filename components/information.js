import Link from "next/link";
import Card from "./card";
export default function Infromation() {
  return (
    <div className="w-full flex justify-start items-center flex-col font-thaiBlack text-[#1a110a]">
      <div className="my-24 text-2xl w-[90vw] max-w-[1000px] text-center font-normal">
        <p>
          Prosíme o&nbsp;informaci, zda se chystáte, nebo nechystáte
          na&nbsp;naši svatbu.
          <br />
          Moc nám to pomůže s&nbsp;přípravami.{" "}
        </p>
        <Link href="https://forms.gle/VjofqnZTiZYGWdUD6" target="_blank">
          <button className="bg-[#dbcdc1ff] uppercase hover:bg-[#caa789] text-[#583922] font-bold py-2 pr-4 pl-2 rounded mt-8 text-lg inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-check"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#1a110a"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>{" "}
            <span>potvrzení účasti</span>
          </button>
        </Link>
      </div>
      <div className="w-[90vw] max-w-[1000px] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 text-lg">
        <Card>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-map-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1a110a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mb-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
            <path d="M9 4v13" />
            <path d="M15 7v5.5" />
            <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
            <path d="M19 18v.01" />
          </svg>
          <h2 className="text-2xl font-bold mb-1">Mapa města</h2>
          <p>
            Pro lepší orientaci jsme připravili mapu, na&nbsp;které jsou
            označena všechna <strong>důležitá místa</strong>.
          </p>
          <Link
            href={"https://mapy.cz/s/jakupedere"}
            target="_blank"
            className="underline font-semibold mt-1"
          >
            mapa
          </Link>
        </Card>
        <Card>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-gift"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1a110a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mb-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
            <path d="M12 8l0 13" />
            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
          </svg>
          <h2 className="text-2xl font-bold mb-1">Dárky</h2>
          <p>
            Největším dárkem pro nás bude, když tento den strávíte naplno
            s&nbsp;námi. Pokud byste nás i&nbsp;přesto chtěli obdarovat, budeme
            rádi za&nbsp;akýkoliv <strong>finanční příspěvek</strong>{" "}
            na&nbsp;vykouzlení společného bydlení.
          </p>
        </Card>
        <Card>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-bus"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1a110a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
            <path d="M16 5l1.5 7l4.5 0" />
            <path d="M2 10l15 0" />
            <path d="M7 5l0 5" />
            <path d="M12 5l0 5" />
          </svg>
          <h2 className="text-2xl font-bold mb-1">Odvoz</h2>
          <p>
            Kdo v&nbsp;blízkém okolí bydlíte, neváhejte využít{" "}
            <strong>možnost rozvozu</strong>. Řidiči pro Vás budou
            k&nbsp;dispozici kdykoliv na&nbsp;telefonu.
          </p>
          <Link className="underline font-semibold" href="/#footer">
            kontakty
          </Link>
        </Card>
        <Card>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mood-tongue-wink"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1a110a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 10h.01" />
            <path d="M10 14v2a2 2 0 0 0 4 0v-2" />
            <path d="M15.5 14h-7" />
            <path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
          </svg>
          <h2 className="text-2xl font-bold mb-1">Zapojení do zábavy</h2>
          <p>
            Oba jsme srandisti to se ví a&nbsp;budeme rádi za&nbsp;jakékoli
            zpestření svatebního dne. Pokud se budete chtít zapojit, prosíme{" "}
            <strong>kontaktujte koordinátory</strong> Péťu nebo Zdíšu.
          </p>
          <Link className="underline font-semibold" href="/#footer">
            kontakty
          </Link>
        </Card>
        <Card>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-tie"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1a110a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" />
            <path d="M10.5 7h3l5 5.5" />
          </svg>
          <h2 className="text-2xl font-bold mb-1">Barevná kolekce</h2>
          <p>
            Šactvo jaké vám je libo, hlavní je cítit se dobře při obřadu
            i&nbsp;na&nbsp;tanečním parketě. Barvy můžete ladit do našich{" "}
            <strong>barev svatby</strong>.
          </p>
          <div className="flex w-full justify-between">
            <div className="rounded-full w-10 h-10 bg-[#4c1002]"></div>
            <div className="rounded-full w-10 h-10 bg-[#850e06]"></div>
            <div className="rounded-full w-10 h-10 bg-[#ae280a]"></div>
            <div className="rounded-full w-10 h-10 bg-[#d75005]"></div>
            <div className="rounded-full w-10 h-10 bg-[#fd7c16]"></div>
          </div>
        </Card>
        <Card>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-tower"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#1a110a"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 3h1a1 1 0 0 1 1 1v2h3v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2h3v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v4.394a2 2 0 0 1 -.336 1.11l-1.328 1.992a2 2 0 0 0 -.336 1.11v7.394a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-7.394a2 2 0 0 0 -.336 -1.11l-1.328 -1.992a2 2 0 0 1 -.336 -1.11v-4.394a1 1 0 0 1 1 -1z" />
            <path d="M10 21v-5a2 2 0 1 1 4 0v5" />
          </svg>
          <h2 className="text-2xl font-bold mb-1">
            Tipy na výlet a&nbsp;jídlo
          </h2>
          <ul className="underline">
            <li>
              <Link
                target="_blank"
                href="https://www.navylet.cz/cs/cil/rozhledna-na-signalu"
              >
                Rozhledna na signálu
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.navylet.cz/cs/cil/zamek-ratiborice-ceska-skalice"
              >
                Zámek Ratibořice
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.navylet.cz/cs/cil/zamek-nachod-nachod"
              >
                Zámek Náchod
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.kudyznudy.cz/aktivity/domek-bozeny-nemcove-v-cervenem-kostelci"
              >
                Domek Boženy Němcové
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.kudyznudy.cz/aktivity/rodny-domek-aloise-jiraska-v-hronove"
              >
                Dům Aloise Jiráska
              </Link>
            </li>
            <li>
              <Link target="_blank" href="http://www.restaurace-divadlo.cz/">
                Restaurace Divadlo
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.trees.cz/cs/cerveny-kostelec/zahradni-kavarna"
              >
                Zahradní kavárna
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
