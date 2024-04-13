import { Outlet } from "react-router-dom";
import MaxWidthWrapper from "../max-width-wrapper";
import BottomNav from "./bottom-nav";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <MaxWidthWrapper>
        <Outlet />
        <BottomNav />
      </MaxWidthWrapper>
    </div>
  );
};

export default RootLayout;
