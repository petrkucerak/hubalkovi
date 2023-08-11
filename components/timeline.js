import TimelinePot from "./timeline-pot";

export default function Timeline() {
  return (
    <div className="w-full flex justify-start items-center flex-col font-thaiBlack bg-structure bg-fixed bg-[#dbcdc1ff] mb-12 min-h-[40vh] mt-8">
      <h2 className="font-light text-4xl md:text-5xl mt-24 mb-8 uppercase tracking-wide text-[#1a110a]">
        Harmonogram
      </h2>

      <div class="flex flex-col md:grid mb-24 grid-cols-9 mx-auto p-2 text-[#1a110a] max-w-[1000px] w-[90vw]">
        <TimelinePot time="9:00" text="Snídaně" dir="left" />
        <TimelinePot time="10:00" text="Požehnání rodičů" dir="right" />
        <TimelinePot
          time="10:30"
          text="Svatební obřad"
          dir="left"
          strong={"strong"}
        />
        <TimelinePot time="11:40" text="Gratulace" dir="right" />
        <TimelinePot time="12:10" text="Focení" dir="left" />
        <TimelinePot time="14:00" text="Oběd" dir="right" strong={"strong"} />
        <TimelinePot
          time="15:30"
          text="Krájení svatebního dortu"
          dir="left"
          strong={"strong"}
        />
        <TimelinePot time="16:00" text="Zábava pro děti" dir="right" />
        <TimelinePot
          time="16:00"
          text="Focení nevěsty a&nbsp;ženicha"
          dir="left"
        />
        <TimelinePot
          time="16:30"
          text="Příchod přátel"
          dir="right"
          strong={"strong"}
        />
        <TimelinePot
          time="17:00"
          text="První tanec"
          dir="left"
          strong={"strong"}
        />
        <TimelinePot
          time="21:00"
          text="Nechte lásku zazářit"
          dir="right"
          strong={"strong"}
        />
      </div>
      {/* <div className="w-full">
        <div className="absolute w-full">
          <img src="/images/flower-brown.svg" className="relative h-64 -top-64 left-0" />
        </div>
      </div> */}
    </div>
  );
}
