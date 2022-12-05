import React from "react";
import Profile from "./profile/Profile";

export default function ProfileData() {
  const SaymyName = (name) => {
    alert(`its me ${name}`);
  };
  const ProfileData = [
    {
      img: "https://scontent.ftun17-1.fna.fbcdn.net/v/t1.6435-9/164222942_2929100397375085_880923795050942611_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=LitlVa9qaOoAX_q3Ec8&_nc_ht=scontent.ftun17-1.fna&oh=00_AfBfKmosWbVtsdkUe91VKLac0f09RhxoJM5K4lGlmGOgjQ&oe=63B58754",
      fullName: "Wassim Bjaoui",
      bio: " Ready To Get Started with Custom Website Development services? ",
      profession: "Full-stack Web Development",
    },
  ];
  return (
    <div>
      <Profile ProfileFn={SaymyName} {...ProfileData[0]} />
    </div>
  );
}
