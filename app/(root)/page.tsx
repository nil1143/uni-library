import { Button } from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/contants";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[1]} />
    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);
export default Home;
