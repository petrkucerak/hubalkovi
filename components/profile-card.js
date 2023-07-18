import Link from "next/link";

export default function ProfileCard({ name, phone, title, image }) {
  return (
    <div className="flex items-center m-6">
      <img src={image} className="rounded-full w-36 h-36 border-2 border-[#dbcdc1ff] bg-[#dbcdc1ff]" />
      <ul className="flex flex-col ml-6 justify-start">
        <li>
          <h3 className="text-xl font-bold">{name}</h3>
        </li>
        <li>{title}</li>
        <li>
          {" "}
          <Link href={`tel:+420${phone}`} className="underline">
            {phone}
          </Link>
        </li>
      </ul>
    </div>
  );
}
