import React from "react";
import Menu from "./menu";
import Header from "./header";
import QueryInput from "./queryinput";
import { homeSearchParamsCache } from "@/app/helpers/lib/searchParams";

function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  // TODO: use this to show a welcome page/modal
  const { firstTime } = homeSearchParamsCache.parse(searchParams);

  return (
    <main className="h-screen flex flex-col p-4 relative">
      <Menu />

      <Header />

      <div className="max-w-3xl flex mx-auto w-full flex-col">
        {/* all content goes here */}
        {/* <div className="">hi {firstTime ? 'first time' : ''}</div> */}

        <div className="w-full h-96">
          <QueryInput />
        </div>
      </div>
    </main>
  );
}

export default Page;