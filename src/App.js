import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Footer from './component/Footer';
import ContentMovie from './component/ContentMovie';
import ContentSeries from './component/ContentSeries';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;


const App = (props) => {

  const [title, setTitle] = useState("Titles");
  return (
    <Router>
      <div className="App">
        <Switch>                  
        <Route path="/" exact render={() =>        
          <Fragment>
            <Navbar title={title} />
            <Content  />
          </Fragment>
        } />

        <Route path="/popular" render={() => 
          <Fragment>
            <Navbar title={"Movies"} />
            <ContentMovie  />
          </Fragment>
        } />

        <Route path="/series" render={() => 
          <Fragment>
            <Navbar title={"Series"} />
            <ContentSeries  />
          </Fragment>
        } />

        
        </Switch>  

        
        <Footer />

      </div>
    </Router>
  );
}



export default App;
