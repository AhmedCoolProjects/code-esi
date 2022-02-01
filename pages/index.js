import { useQuery } from "@apollo/client";
import NoProjects from "@comp/cards/NoProjects";
import PersonAvatar from "@comp/cards/PersonAvatar";
import PopupPersonAvatar from "@comp/cards/PopupPersonAvatar";
import PersonAvatarSkeleton from "@comp/skeletons/PersonAvatarSkeleton";
import { GET_PEOPLE_BY_CATEGORY } from "apollo/graphql/queries";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const handleClick = (event, member) => {
    setUser(member);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const {
    data: dataBoard,
    loading: loadingBoard,
    error: errorBoard,
  } = useQuery(GET_PEOPLE_BY_CATEGORY, { variables: { category: "board" } });
  const {
    data: dataMemebres,
    loading: loadingMemebres,
    error: errorMemebres,
  } = useQuery(GET_PEOPLE_BY_CATEGORY, { variables: { category: "member" } });
  console.log("members: ", dataMemebres);
  return (
    <div>
      <Head>
        <title>CODE ESI | Dashboard</title>
      </Head>
      <div className="w-full">
        {/* CODE board */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">CODE</h1>
            <h1 className="text-xl font-semibold opacity-70">Board</h1>
          </div>
          <div className="flex flex-row py-1 w-full overflow-x-auto scrollbar-hide px-2">
            {loadingBoard
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <PersonAvatarSkeleton size={55} key={item} />
                ))
              : dataBoard.getPersonsByCategory?.map((member) => (
                  <PersonAvatar
                    key={member.id}
                    id={id}
                    member={member}
                    handleClick={handleClick}
                  />
                ))}
          </div>
        </div>
        <PopupPersonAvatar
          id={id}
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
          user={user}
        />
        {/* CODE memebrs */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">CODE</h1>
            <h1 className="text-xl font-semibold opacity-70">Members</h1>
          </div>
          <div className="flex flex-row py-1 w-full overflow-x-auto scrollbar-hide px-2">
            {loadingMemebres
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <PersonAvatarSkeleton size={55} key={item} />
                ))
              : dataMemebres.getPersonsByCategory?.map((member) => (
                  <PersonAvatar
                    key={member.id}
                    id={id}
                    member={member}
                    handleClick={handleClick}
                  />
                ))}
          </div>
        </div>
        {/* CODE Projects */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">CODE</h1>
            <h1 className="text-xl font-semibold opacity-70">Projects</h1>
          </div>
          <NoProjects msg="No projects yet" />
        </div>
        {/* CODE Sharing Nights */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">CODE</h1>
            <h1 className="text-xl font-semibold opacity-70">Sharing Nights</h1>
          </div>
          <NoProjects msg="No Sharing Nights yet" />
        </div>
        {/* Competitions News */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">Competitions</h1>
            <h1 className="text-xl font-semibold opacity-70">News</h1>
          </div>
          <NoProjects msg="No Competitions News yet" />
        </div>
        {/* CODE Collaborations */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">CODE</h1>
            <h1 className="text-xl font-semibold opacity-70">Collaborations</h1>
          </div>
          <NoProjects msg="No Collaborations yet" />
        </div>
      </div>
    </div>
  );
}
