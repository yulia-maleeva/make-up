import React from "react";

import Layout from "../../pages/Layout";
import Error from "../../molecules/Error";

const NotFound = () => {
  return (
    <Layout>
      <Error
        title="The page was not found"
        description="Are you sure the website URL is correct?"
      />
    </Layout>
  );
};

export default NotFound;
