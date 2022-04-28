import MobileHeaderComponent from "@/components/layout/mobile-header.component";
import HeaderComponent from "@/components/layout/header.component";
import FooterComponent from "@/components/layout/footer.component";
import React, { useState } from "react";
import { useRouter } from "next/router";

type Props = { children: JSX.Element };

const DefaultLayoutComponent: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      <div className="bg-white">
        {/* Mobile menu */}

        <MobileHeaderComponent open={open} setOpen={setOpen} />
        {pathname == "/" ? <></> : <HeaderComponent setOpen={setOpen} />}
        <main>{children}</main>
        <FooterComponent />
      </div>
    </>
  );
};

export default DefaultLayoutComponent;
