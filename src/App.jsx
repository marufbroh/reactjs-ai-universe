import React, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tools from './components/Tools/Tools';

const App = () => {
  const [tools, setTools] = useState([]);
  // console.log(tools)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tools`).then(res => res.json()).then(data => setTools(data.data.tools))
  }, [])
  return (
    <>
      <Header />
      <Tools tools={tools} showAll={showAll} />
      <Footer setShowAll={setShowAll} showAll={showAll} />
    </>
  );
};

export default App;