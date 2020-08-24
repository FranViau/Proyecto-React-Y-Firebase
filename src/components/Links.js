import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

export const Links = () => {
  const [links,setLinks] = useState([])
  const [currentId,setCurrentId] = useState("")

  const addOrEditLink = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
  };

  const onDeleteLink = async (id) =>{
      if(window.confirm("Are you sure to delete this link?")){
         await db.collection("links").doc(id).delete();
      }
  } 

  const getLinks = async () => {
    // ESTO ES PARA QUE SE EJECUTE EN CADA SNAPSHOT
    await db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        console.log(docs);
      });
      setLinks(docs);
    });
  };
  /*const getLinks = async () =>{  ESTO ES PARA RECIBIR UNA VEZ LOS DATOS
        
        await db.collection("links").get();
        querySnapshot.forEach(doc => {
            console.log(doc.data());
        })
    }*/
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <div className="col-md-4 p-2">
        <LinkForm addOrEditLink = {addOrEditLink} />
      </div>
      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <i
                  className="material-icons text-danger"
                  onClick={() => onDeleteLink(link.id)}
                >
                  close
                </i>
              </div>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Go to Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
