// Components

import DropListBox from "../../core/components/DropListBox";
import { DashboardIcon, HomeIcon, ListIcon, PostsIcon } from "../../core/components/Icon";

const Sidebar = () => {

  return (
    <div className="w-[16rem] h-screen fixed bg-white flex flex-col p-5 border-x border-gray-300">
      <div className="flex flex-row w-full gap-4 justify-center items-center">
        <DashboardIcon className={"w-8 h-8 text-blue-700"} />
        <div className="text-2xl font-bold">Dashboard</div>
      </div>
      <div className="flex flex-col py-4">
        <DropListBox 
          id={"home"} 
          to="/home" 
          icon={<HomeIcon />} 
          title={"home"}
        />
        <DropListBox
          id={"posts"}
          icon={<PostsIcon />}
          title={"posts"}
          items={[
            {
              name: "posts_list",
              icon: <ListIcon className={"w-5 h-5"} />,
              link: "/posts",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;