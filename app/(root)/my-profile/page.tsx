import React from "react";
import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/contants";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      <BookList title="Borrowed books" books={sampleBooks} />
    </>
  );
};
export default Page;
