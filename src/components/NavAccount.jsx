import React, { useState } from "react";
import { Popover } from "@mantine/core";
import { UserAuth } from "../AuthContext";

const NavAccount = () => {
  const [opened, setOpened] = useState(false);
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <>
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={
          //<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>
          <div
            className="nav__user--blank"
            onClick={() => setOpened((o) => !o)}
          >
            {user?.email[0].toUpperCase()}
          </div>
        }
        width={180}
        position="bottom"
        withArrow
        spacing={0}
      >
        <div className="popover__menu cursor-pointer border-b-2 hover:border-gray-500 border-transparent">
          <p className="" onClick={handleLogOut}>
            Logout
          </p>
        </div>
      </Popover>
    </>
  );
};

export default NavAccount;
