import Header from "./components/header";
import CounterButton from "./components/counterButton";
import BingoBoard from './components/bingoCard';

export default function Home() {
  return (
    <>
    <Header />

    <main>
      <BingoBoard/>
    </main>
    
    </>
  );
}
