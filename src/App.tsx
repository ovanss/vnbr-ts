import React, { useState, useEffect } from 'react';
import './App.scss';
import TableC from './components/Table';
import { Button } from 'carbon-components-react';
import ModalC from './components/Modal';
import { IEverythingResponse } from './interfaces';

const url =
  'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fb9a01961a354bde95a89f74f155179a';

export interface ISubmitResult {
  success: boolean;
  message: string;
}

interface ISource {
  id: string | null;
  name: string;
}

interface IArticleTest {
  author: string;
  // source: string;
  content: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

function App() {
  const [loading, setLoading] = useState(false);
  // const [articles, setArticles] = useState<IEverythingResponse | null>(null);
  const [articles, setArticles] = useState<IArticleTest[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const { articles } = await response.json();
      // console.log('arrr:', articles);
      setArticles(articles);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <p>loading....</p>;
  }

  console.log(articles);
  return (
    <div className="App">
      <TableC articles={articles} openModal={openModal} />
      {/* <TableC /> */}
      <ModalC isModalOpen={isModalOpen} closeModal={closeModal} />
      <Button kind="secondary" onClick={() => setIsModalOpen(true)}>
        open modal
      </Button>
    </div>
  );
}

export default App;
