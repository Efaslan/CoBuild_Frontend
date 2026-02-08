import { HomePage } from './pages/HomePage'; // Dosya yoluna dikkat et

function App() {
  const handleNavigate = (page: string) => {
    console.log("Gidilecek sayfa:", page);
  };

  return (
    <>
      <HomePage onNavigate={handleNavigate} />
    </>
  );
}

export default App;