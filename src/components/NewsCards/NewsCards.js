import React from 'react'
import {Grid, Grow, Typography} from '@material-ui/core'
import useStyles from './styles.js'
import NewsCard from '../NewsCard/NewsCard'

const infoCards = [
    { color: '#00838f', title: 'Latest News', info: 'Get the latest new irrespective of genre', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories: ', info: 'Technology, Business, Entertainment, General, Health, Science, Sports', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms: ', info: 'PlayStation 5, Smartphones, BJP, Rahul Gandhi...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources: ', info: 'BBC News, Time, IGN, Buzzfeed, Wired, ABC News...', text: 'Give me the news from Google' },
  ];


function NewsCards({articles, activeArticle}) {
    const classes = useStyles();

    if (!articles.length) {
      return (
        <Grow in>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {infoCards.map((infoCard) => (
              <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                  <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                  {infoCard.info ? <Typography variant="h6" component="h6"><br /> {infoCard.info}</Typography> : null}
                  <Typography variant="h6" component="h6"><br />Try saying: <br /> <i>{infoCard.text}</i></Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      );
    }
  
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
              <NewsCard activeArticle={activeArticle} i={i} article={article} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  };


export default NewsCards
