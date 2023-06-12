import React from "react";

import NotFoundPageContent from "../sections/404/NotFoundPageContent";
import { ThemeWrapper } from "../theme";

const NotFoundPage = () => {
  return (
    <>
      <title>404 | Galena + Edupass</title>

      <ThemeWrapper>
        <NotFoundPageContent />
      </ThemeWrapper>
    </>
  );
};

export default NotFoundPage;
