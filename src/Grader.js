// import logo from './logo.svg';
import React from 'react';
import './Grader.css';
import ReactFirebaseFileUpload from './ReactFirebaseFileUpload';
// import { signInWithGoogle } from "./firebase";
// import { UserContext } from './UserProvider';
// import { Redirect } from 'react-router-dom';

// made by Tevin Wang, Ryane Li, Charlie Duong, Justin Ji
// show student score and questions wrong
// upload key and student questions

export default function Grader() {
    
    return (
      <div className="Grader">
        <nav class="flex items-center justify-between flex-wrap bg-primary p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            {/* <img src="Grader.png" width="20" height="20"/> */}
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span class="font-semibold text-xl tracking-tight">Grader</span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-right px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
              <span class="font-semibold text-xl tracking-tight">Docs</span>
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
              <span class="font-semibold text-xl tracking-tight">Examples</span>
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              <span class="font-semibold text-xl tracking-tight">Blog</span>
              </a>
            </div>
            <div>
              {/* <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Log in</a> */}
            </div>
          </div>
        </nav>
        <header className="App-header">
          <div className="mt-20 mx-20 bg-primary py-20 rounded-lg bg-gradient-to-r from-primary to-blue-300">
            <h1 class="mt-100 align-left text-7xl font-extrabold text-white bg-white text-transparent bg-clip-text ">
              Welcome to Grader.
            </h1>
            <h2 className="text-1xl font-bold text-white">
              Grading your multiple choice tests automatically, practically.
            </h2>
          </div>

          {/* animated bar */}

          {/* <div class="w-full">
            <div class="w-full overflow-hidden">
                <div class="w-1/2 inline-block relative fluentProgressBar-waiting"></div>
            </div>
          </div> */}
          {/* <hr className="text"></hr> */}

          {/* 3 Easy Steps */}
          <div className="mt-20 ml-20 mr-20">
            <div class="flex justify-center">
              <div class="w-1/4 text-center px-6">
                <div
                  class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200"
                >
                  <div
                    class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" /></svg>
                  </div>
                  <div
                    class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step"
                  >
                    <h2 class="font-bold text-sm text-primary">Upload Answer Key</h2>
                  </div>
                </div>
              </div>
              <div class="flex-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="36" height="36" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>
              </div>
              <div class="w-1/4 text-center px-6">
                <div
                  class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200"
                >
                  <div class="w-1/3 bg-transparent h-24 flex items-center justify-center icon-step">
                  <svg width="24" height="24" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z"/></svg>
                  </div>
                  <div
                    class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step"
                  >
                    <h2 class="font-bold text-sm text-primary">Upload Student Key</h2>
                  </div>
                </div>
              </div>
              <div class="flex-1 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="36" height="36" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" /></svg>
              </div>
              <div class="w-1/4 text-center px-6">
                <div
                  class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200"
                >
                  <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewbox=" 0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" /></svg>
                  </div>
                  <div
                    class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step"
                  >
                    <h2 class="font-bold text-sm text-primary">See the Results!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ReactFirebaseFileUpload/>
          
        </header>
      </div>
    );
}