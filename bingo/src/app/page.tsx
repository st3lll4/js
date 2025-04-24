import BingoBoard from './components/bingoCard';
import Footer from "./components/footer";
import Header from './components/header';

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <BingoBoard/>
    </main>
    <Footer />
    </>
  );
}