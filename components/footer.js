import ProfileCard from "./profile-card";

export default function Footer() {
  return (
    <div
      id="#footer"
      className="w-full bg-[#1a110a] text-[#fff] font-thaiBlack text-lg flex flex-col items-center mt-24 justify-around min-h-[40vh]"
    >
      <h2 className="font-light text-4xl md:text-5xl mt-24 mb-8 uppercase tracking-widest">
        Kontakty
      </h2>
      <div className="flex flex-col md:grid grid-cols-2 mb-20">
        <ProfileCard
          name="Anička Tischler"
          title="svědkyně"
          phone="728786679"
          image="/images/profile-01.jpg"
        />
        <ProfileCard
          name="Honza Klinger"
          title="svědek"
          phone="736406445"
          image="/images/profile-02.jpg"
        />
        <ProfileCard
          name="Zdíša Kroupová"
          title="koordinátorka"
          phone="736746335"
          image="/images/profile-04.jpg"
        />
        <ProfileCard
          name="Petr Kučera"
          title="koordinátor"
          phone="731769416"
          image="/images/profile-03.jpeg"
        />
        <ProfileCard
          name="Vítek"
          title="řidič"
          phone="606073984"
          image="/images/avatar.png"
        />
        <ProfileCard
          name="Ladislav"
          title="řidič"
          phone="777879292"
          image="/images/avatar.png"
        />
      </div>
    </div>
  );
}
