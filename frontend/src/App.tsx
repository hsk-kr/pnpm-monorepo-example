import { useEffect, useState } from 'react'
import { defaultLanguages } from 'shared/const/languages';
import type { Language } from 'shared/types/languages';

function App() {
  const [languages, setLanguages] = useState(defaultLanguages);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('http://localhost:3000/languages');
      const data: Language[] = await res.json();
      setLanguages(data);
    }, 3000);
  }, []);

  return (
    <>
      {languages}
    </>
  )
}

export default App
