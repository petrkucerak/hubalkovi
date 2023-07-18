import ProfileCard from "./profile-card";

export default function Footer() {
  return (
    <div id="#footer" className="w-full bg-[#1a110a] text-[#fff] font-quicksand text-lg flex flex-col items-center mt-24 justify-around min-h-[40vh]">
      <h2 className="text-3xl font-bold uppercase mt-24 mb-8">
        Kontakty
      </h2>
      <div className="flex flex-col md:grid grid-cols-2">
        <ProfileCard
          name="Anička Tischler"
          title="svědkyně"
          phone="728786679"
          image="/images/profile-01.jpg"
        />
        <ProfileCard
          name="Honza Klinger"
          title="svědkek"
          phone="736406445"
          image="/images/profile-02.jpg"
        />
        <ProfileCard
          name="Petr Kučera"
          title="koordinátor"
          phone="731769416"
          image="/images/profile-03.jpeg"
        />
        <ProfileCard
          name="Zdíša Kroupová"
          title="koordinátorka"
          phone=""
          image=""
        />
        <ProfileCard name="" title="řidič" phone="" image="" />
        <ProfileCard name="" title="řidič" phone="" image="" />
      </div>
    </div>
  );
}
