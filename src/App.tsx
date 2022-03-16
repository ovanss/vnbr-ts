import React, { useState, useEffect } from 'react';
import './App.scss';
import TableC from './components/Table';
import { Button } from 'carbon-components-react';
import Modal from './components/Modal';

const url =
  'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fb9a01961a354bde95a89f74f155179a';

// interface ISource {
//   id: number | null,
//   name: string,
// }

// interface IArticle {
//   source: ISource,
//   author: string,
// }

// interface IEverythingResponse {
//   status: string,
//   totalResults: number,
//   articles: Array<IArticle>
// }

// ======================================

interface ISource {
  id: number | null;
  name: string;
}

interface IArticle {
  source: ISource;
  author: string;
}

interface IEverythingResponse {
  // status: string,
  // totalResults: number,
  articles: Array<IArticle>;
}

// interface Article {
//   source: ISource;
//   author: string;
// title: string ;
// description: string;
// url: ;
// urlToImage;
// publishedAt;
// content;
// }

// interface ISignUpData {
//   firstName: string;
//   emailAddress: string;
// }

export interface ISubmitResult {
  success: boolean;
  message: string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<IEverythingResponse | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const { articles } = await response.json();
      console.log(articles);
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

  return (
    <div className="App">
      {/* <TableC articles={articles} /> */}
      <TableC />
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      <Button kind="secondary" onClick={() => setIsModalOpen(true)}>
        open modal
      </Button>
    </div>
  );
}

export default App;
