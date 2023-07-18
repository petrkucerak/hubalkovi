import TimelinePot from "./timeline-pot";

export default function Timeline() {
  return (
    <div className="w-full flex justify-start items-center flex-col font-quicksand bg-[#dbcdc1ff] mb-12 min-h-[40vh] mt-8">
      <h2 className="font-bold text-4xl mt-24 mb-8 uppercase text-[#1a110a]">
        Harmonogram
      </h2>

      <div class="flex flex-col md:grid mb-24 grid-cols-9 mx-auto p-2 text-[#1a110a] max-w-[1000px] w-[90vw]">
        <TimelinePot time="10:30" text="Svatební obřad" dir="left" />
        <TimelinePot time="12:30" text="Oběd" dir="right" />
        <TimelinePot time="13:30" text="Gratulace" dir="left" />
        <TimelinePot time="14:00" text="Krájení svatebního dortu" dir="right" />
        <TimelinePot
          time="14:30"
          text="Focení nevěsty a&nbsp;ženicha"
          dir="left"
        />
        <TimelinePot time="15:00" text="Program pro děti" dir="right" />
        <TimelinePot time="17:00" text="První tanec" dir="left" />
        <TimelinePot time="18:30" text="Svatební zábava" dir="right" />
        <TimelinePot time="22:00" text="Nechte lásku zazářit" dir="left" />
      </div>
    </div>
  );
}
