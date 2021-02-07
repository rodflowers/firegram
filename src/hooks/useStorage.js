import { useState, useEffect } from "react";
import {
  projectStore,
  projectFirestore,
  timestamp,
} from "../firebase/firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References
    const storageRef = projectStore.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state-change",
      (snap) => {
        let percentege = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentege);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
