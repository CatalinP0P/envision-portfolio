import React, { useEffect, useState } from "react";
import { client } from "../lib/contentful";

export default function useContentful() {
  const [loading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState<any>(null);

  const fetchData = async () => {
    const data = await client.getEntries({
      content_type: "envisionPortfolioDetails",
    });

    setPortfolioDetails(data.items[0].fields);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  });

  return { loading, portfolioDetails };
}
