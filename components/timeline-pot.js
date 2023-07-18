export default function TimelinePot({ time, text, dir }) {
  if (dir === "right")
    return (
      <div class="flex flex-row-reverse md:contents">
        <div class="col-start-1 col-end-5 my-4 mr-auto md:mr-0 md:ml-auto">
          <h3 class="font-semibold text-xl md:text-right">{time}</h3>
          <p class="leading-tight font-bold text-lg">{text}</p>
        </div>
        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div class="h-full w-6 flex items-center justify-center">
            <div class="h-full w-1 bg-[#583922] pointer-events-none"></div>
          </div>
          <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#1a110a] shadow"></div>
        </div>
      </div>
    );
  else
    return (
      <div class="flex md:contents">
        <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div class="h-full w-6 flex items-center justify-center">
            <div class="h-full w-1 bg-[#583922] pointer-events-none"></div>
          </div>
          <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#1a110a] shadow"></div>
        </div>
        <div class="col-start-6 col-end-10 my-4 mr-auto">
          <h3 class="font-semibold text-xl">{time}</h3>
          <p class="leading-tight font-bold text-xl">{text}</p>
        </div>
      </div>
    );
}
