import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div className="flex justify-between flex-wrap gap-3 pt-20">
      <div>
        <p className="text-[#474c66]">Copyright © 2024 Cloudpro.ai. All Rights Reserved.</p>
      </div>
      <div className="flex gap-3 text-white font-semibold">
        <Link href="/" className="underline text-[16px]">
          Terms & Condition
        </Link>
        <Link href="/" className="underline text-[16px]">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
