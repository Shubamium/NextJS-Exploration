import React from "react";

type Props = {};

// Data will be cached
async function getQuotes() {
  const uri = "https://zenquotes.io/api/quotes/";
  const req = await fetch(uri);
  const res = await req.json();

  return res[0] as any;
}

async function getQuotesNoCached() {
  const uri = "https://zenquotes.io/api/quotes/";
  const req = await fetch(uri, { cache: "no-store" });
  const res = await req.json();

  return res[0] as any;
}

async function getQuotesRevalidate() {
  const uri = "https://zenquotes.io/api/quotes/";
  const req = await fetch(uri, {
    next: {
      revalidate: 10, // Refetch after 10 seconds
    },
  });
  const res = await req.json();

  return res[0] as any;
}

export default async function RefreshPage({}: Props) {
  const quote = await getQuotes();
  const quoteNotCached = await getQuotesNoCached();
  const quoteRevalidate = await getQuotesRevalidate();

  return (
    <div>
      <h2>This page is to test refresh/caching</h2>
      <h3>
        If you don&apos;t provide the cache option when fetching next js will
        automatically cache it
      </h3>
      <div dangerouslySetInnerHTML={{ __html: quote.h }}></div>
      <h2>{quote.a}</h2>
      <hr />

      <h2>
        This one has cache = no-store option when fetching, so it&apos;ll always
        fetched on refresh{" "}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: quoteNotCached.h }}></div>
      <hr />

      <h2>this one will revalidate every n seconds</h2>
      <div dangerouslySetInnerHTML={{ __html: quoteRevalidate.h }}></div>
    </div>
  );
}
