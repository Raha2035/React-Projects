/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import useCreateDate from "../hook/useCreateDate";

const CreateNote = ({setNotes}) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const note = {
            "id": uuidv4(),
            "title": title,
            "details": details,
            "date": date,
        }

        if(title && details) {
            //add this note to the notes array
            setNotes(prevNotes => [note, ...prevNotes]);

            //redirect to home page
            navigate('/');
        }
    }

  return (
    <section>
        <header className="create-note__header">
            <Link to={'/'} className="btn"><IoIosArrowBack /></Link>
            <button className="btn lg primary" onClick={handleSubmit}>Save</button>
        </header>
        <form className="create-note__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
            <textarea rows="10" placeholder="Note details..." value={details} onChange={e => setDetails(e.target.value)}></textarea>
        </form>
    </section>
  )
}

export default CreateNote