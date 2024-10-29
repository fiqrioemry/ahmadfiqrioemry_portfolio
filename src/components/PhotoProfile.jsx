"use clients";

import Image from "next/image";

const PhotoProfile = () => {
  return (
    <div className="w-[200px] h-[200px] md:h-[400px] md:w-[400px] absolute ">
      <Image
        src="/assets/photo.png"
        priority
        quality={100}
        fill
        alt="profile_picture"
        className="object-cover"
      />
    </div>
  );
};

export default PhotoProfile;
