/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link, useParams, useNavigate } from "react-router-dom"
import useCreateDate from "../hook/useCreateDate";

const EditNote = ({notes , setNotes}) => {
    const {id} = useParams();

    const note = notes.find(item => item.id === id);

    const [title, setTitle] = useState(note.title);
    const [details, setDetails] = useState(note.details); 

    const navigate = useNavigate()

    const date = useCreateDate();

    const handleForm = (e) => {
        e.preventDefault();

        if(title && details) {
            //create a new note 
            const newNote = {...note, title, details, date}

            //create a new array that have this new note 
            const newNotes = notes.filter(item => item.id !== id);

            setNotes([newNote, ...newNotes]);
        }
        
        //redirect to home page 
        navigate('/');
    }

    const handleDelete = (e) => {
        if(window.confirm('Are you sure you want to delete this item?')){
            e.preventDefault();
        
            const newArray = notes.filter(item => item.id !== id);
        
            setNotes(newArray);
        
            //redirect to home page 
            navigate('/');
        }
    }

  return (
    <section>
        <header className="create-note__header">
            <Link to={'/'} className="btn"><IoIosArrowBack /></Link>
            <button className="btn lg primary" onClick={handleForm}>Save</button>
            <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line/></button>
        </header>
        <form className="create-note__form" onSubmit={handleForm}>
            <input type="text" placeholder="Title" autoFocus value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea rows="10" placeholder="Note details..." value={details} onChange={e => setDetails(e.target.value)}></textarea>
        </form>
    </section>
  )
}

export default EditNote