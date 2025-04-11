
"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import BookList from "@/components/BookList";
import Head from "next/head";

const BooksPage = () => {
  return (
    <>
      <Head>
        <title>Recommended Books | The Gift of Peace Counseling</title>
        <meta name="description" content="Explore our diverse collection of recommended books on mental health, wellness, and healing, including works focused on African American experiences, spirituality, mindfulness, and more." />
      </Head>
      <PageLayout>
        <BookList />
      </PageLayout>
    </>
  );
};

export default BooksPage;
