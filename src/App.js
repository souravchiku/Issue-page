import React,{useState , useEffect} from "react";
import './App.css';
import {ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IssuePage from './IssuePage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
   const [issues,setIssues]=useState([]);
   const [keys,setkeys]=useState("");
useEffect(()=>{
  fetch(
    'https://api.github.com/repos/facebook/create-react-app/issues'
  ).then((res)=>res.json())
  .then((pageIssues)=>{
    // console.log("result is",pageIssues);
  setIssues(pageIssues);
  return 
    })
  },[]);
  const handleClick=(e)=>{
    setkeys(e);
  }
  const createList=(issues)=>{
   return(
     issues.map((issue,index)=>{
      return(
        <div><ListGroup.Item key={index} action onClick={()=>handleClick(index)}>
         <span className="mr-1"><svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="#28a745"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg></span> 
          <Link to='/issuePage' className="links" id={index} >{issue.title}</Link>
         <div className="comment-icon flex-1" style={{float:"right" ,textAlign:"right"}}><svg class="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" ><path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
        
         </svg>  {issue.comments}</div> 
          </ListGroup.Item>
          </div>
      )
     })
     
   )
  }
  return (
    
    
  
      
    <div className="App">
      <Router>
    
        <div className="container">
       <div className="App-header">GitHub Issues Page</div>
      <Switch>
        <Route path="/issuePage" exact>
          {console.log("key"+issues.id)}
          <IssuePage keys={keys} issues={issues}/>
        </Route>
        <Route path="/" exact>
        <ListGroup >
          <ListGroup.Item>

          </ListGroup.Item>
          {createList(issues)}
         </ListGroup>
        </Route>
      </Switch>
 
       
    
      
      </div>
      </Router>
    
  
    </div>
   
  );

}

export default App;
