import ProgressBar from "@/components/Animation/ProgressBar";

import ScrollToTops from "@/components/ScrollToTop/ScrollToTop";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <ProgressBar />

      {children}

      <ScrollToTops />
    </>
  );
};

export default ProtectedLayout;
