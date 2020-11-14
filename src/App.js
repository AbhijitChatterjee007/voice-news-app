import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import { NewsCards, Modal, Footer } from './components';
import useStyles from './styles.js';


const key = '43ab947040397d6e8a536e685a0983b62e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: key,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newsHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div style={{ background: "black" }}>
      <div className={classes.headerContainer}>
        <h1 style= {{color: "white", padding: "20px"}}>Hi, Welcome to Voice News App</h1>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br />Open article number 1</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Say "Go back" to go to Home Page</Typography></div>
          </div>
        ) : null}
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default App;