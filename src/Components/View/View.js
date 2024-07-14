import React, { useContext, useEffect, useState } from 'react';




import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
import app, {storage} from '../../firebase/config';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';

function View() {
  const [userDetails, setUserDetails] = useState();
  const {postDetails} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);

  const db = getFirestore(app);

  

  useEffect(() =>{
    const {userId} = postDetails;
    const usercollection = collection(db, "users");
    const q = query(usercollection, where("id", "==", userId));
    getDocs(q).then((res)=>{
      
      res.forEach(doc=>{
        console.log(doc.data());
        setUserDetails(doc.data())

      })
    },[])

    // const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()} => ${postDetails.userId}`);
    // });

  },[])

  return (
    <div className="viewParentDiv">
      <div className="parimgDiv">
        <img className='viewImage'
          src={postDetails.url}
          alt="image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller Details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
