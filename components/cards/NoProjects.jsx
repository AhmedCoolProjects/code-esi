import Image from "next/image";
import images from "constants/images";

function NoProjects({ msg }) {
  return (
    <div className="w-full py-8 flex flex-col items-center justify-center">
      <Image
        src={images.noprojects}
        alt="No projects"
        width={200}
        height={200}
      />
      <h1 className="text-xl mt-4 text-center font-light">{msg}</h1>
    </div>
  );
}

export default NoProjects;
