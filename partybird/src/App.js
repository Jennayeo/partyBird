import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage'
import styled from 'styled-components';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() =>{
    console.log('currentPage', currentPage);
  },[currentPage]);

  return (

    <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */
      afterLoad = {(index, anchorLink)=>anchorLink.index==0? setCurrentPage(0):setCurrentPage(1)}
      render={({ state, fullpageApi }) => {
        // console.log('currentPage',currentPage);
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <FirstPage/>
            </div>
             <Logo currentPage={currentPage}><img src={process.env.PUBLIC_URL + '/resources/logo.png'}/></Logo>
            <div className="section">
              <SecondPage currentPage={currentPage}/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      />
  )
  };

  const Logo = styled.div`
    position: fixed;
    z-index: 999;
    margin-top: 20px;
    transition: opacity 1s ease-out;
    ${(props)=>console.log('here',props.currentPage)}

    // display: ${props=>props.currentPage==0? 'none':''};
    opacity: ${props=>props.currentPage==0? '0':'1'};
    transition: opacity 1s ease-out;
  `;

export default App;