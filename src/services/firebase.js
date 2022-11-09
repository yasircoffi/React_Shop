
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, documentId, writeBatch } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWoC-kbgo82xGfMmxWJtAFPeB8jdXURiA",
  authDomain: "shopreactcoder.firebaseapp.com",
  projectId: "shopreactcoder",
  storageBucket: "shopreactcoder.appspot.com",
  messagingSenderId: "75266389353",
  appId: "1:75266389353:web:bfef962d2ed0f9dc93b9f8",
  measurementId: "G-8HPMR2PL9W"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function createBuyOrder(orderData){
    
    const batch = writeBatch(db);
    const collectionRef = collection(db, "ordenes");
    const collectionItemsRef = collection(db, "productos");
    
    const arrayIds = orderData.cart.map((item) => item.id);
    const q = query(collectionItemsRef, where(documentId(), "in", arrayIds));
    
    let itemsToUpdate = await getDocs(q);
    
    itemsToUpdate.docs.forEach( doc => {
      let itemInCart = orderData.cart.find( item=> item.id === doc.id)
        batch.update(doc.ref, {
            stock: doc.data().stock - itemInCart.count
        })
    })
    
batch.commit();
    let respuesta = await addDoc(collectionRef, orderData)

    return respuesta.id;
}

export async function getProducts() {
    const collectionRef = collection(db, "productos");
    let results = await getDocs(collectionRef);
    let dataProducts = results.docs.map(doc =>{
       return {
        id: doc.id, 
        ...doc.data()
        };
    })
return dataProducts;
}

export async function sendDataToFirebase(){
    const data = [];
    let itemsCollectionRef = collection(db, "productos")
    for(let product of data){
        delete(product.id)
let newDoc = await addDoc (itemsCollectionRef, product)
console.log("Documento creado: ", newDoc.id)
    }
}

export async function getSingleProduct(idParams) {
   const docRef = doc(db, "productos", idParams);
   const docResult = await getDoc(docRef);
return {id: docResult.id, ...docResult.data()}; 
}

export async function getProductByCategory (idCategoryParams) {
const collectionRef = collection(db, "productos");
const queryCat = query(
    collectionRef, where("category", "==", idCategoryParams)
    );
let results = await getDocs (queryCat);
let dataProducts = results.docs.map(doc =>{
    return {
     id: doc.id, 
     ...doc.data()
     };
 });
 return dataProducts;
}

export default FirebaseApp;

    