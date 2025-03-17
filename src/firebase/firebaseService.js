import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./config"; // Import Firebase instance

// 🔹 Fetch all documents from a given collection
export const fetchData = async (collectionName) => {
  try {
    const dataCollection = collection(database, collectionName);
    const querySnapshot = await getDocs(dataCollection);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error.message);
    throw error;
  }
};

// 🔹 Add a new document to a given collection
export const addDocument = async (collectionName, data) => {
  try {
    const dataCollection = collection(database, collectionName);
    await addDoc(dataCollection, data);
    console.log(`Document added to ${collectionName} successfully!`);
    await fetchData(collectionName)
  } catch (error) {
    console.error(`Error adding document to ${collectionName}:`, error.message);
    throw error;
  }
};

// 🔹 Update an existing document in a given collection
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(database, collectionName, docId);
    await updateDoc(docRef, data);
    console.log(`Document ${docId} updated in ${collectionName} successfully!`);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error.message);
    throw error;
  }
};
