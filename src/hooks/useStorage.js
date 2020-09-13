import { projectStorage, projectFirestore, timestamp } from "../firebase/config";
import { useState, useEffect } from "react";

const useStorage = (file) => {
  /* console.log(file); */
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        console.log("snap", snap);
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      }, async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt =  timestamp();
        collectionRef.add({ url: url, createdAt })
        setUrl(url);
      });
  }, [file]);
  /* console.log(url); */
  return { progress, url, error }
};

export default useStorage;
