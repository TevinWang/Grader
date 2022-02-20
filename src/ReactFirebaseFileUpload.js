import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "./firebase.js";
import "./ReactFirebaseFileUpload.css";

const ReactFirebaseFileUpload = () => {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    setScore("loading...");
    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              
              var xhr = new XMLHttpRequest()
              // get a callback when the server responds
              xhr.addEventListener('load', () => {
                // update the state of the component with the result here
                setScore(xhr.responseText);
              })
              // open the request with the verb and the url
              xhr.open('GET', 'https://grader.jujipotle.repl.co/?img_url=' + urls[0] + '&key_url=' + urls[1]);
              // send the request
              xhr.send()
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };

  console.log("images: ", images);
  console.log("urls", urls);

  return (
    <div classname="mt-200 mx-20 bg-primary py-20 rounded-lg">
      <br/>
      <progress className="bg-primary" style={{width:"85%"}} value={progress} max="100"/>
      <br/>
      <br/>
      <input type="file" multiple onChange={handleChange} />
      <button class="mt-200 mx-40 bg-primary py-3 px-3 rounded-lg" onClick={handleUpload}>Upload</button>
      <br />
      <br />
      <h2>Student's Grade</h2>
      <h1 className="text-5xl text-bold text-primary">{score}</h1>
      {urls.map((url, i) => (
        <div key={i}>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
      ))}
      <br />
      {/* {urls.map((url, i) => (
        <img
          key={i}
          style={{ width: "500px" }}
          src={url || "http://via.placeholder.com/300"}
          alt="firebase-image"
        />
      ))} */}

    </div>
  );
};

export default ReactFirebaseFileUpload;