import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";

export const metadata: Metadata = {
  title: "Appoinments",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <div>Page</div>;
}
