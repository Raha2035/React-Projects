/* eslint-disable react/prop-types */
import {CiSearch} from 'react-icons/ci'
import {MdClose} from 'react-icons/md'
import {BsPlusLg} from "react-icons/bs"
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import { useEffect, useState } from 'react'

const Notes = ({notes}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = () => {
        setFilteredNotes(notes.filter(item => item.title.toLowerCase().match(searchText.toLowerCase()) ? item : null))
        console.log(filteredNotes);
    }

    useEffect(handleSearch, [searchText]); 

  return (
    <section>
        <header className="notes__header">
            {!showSearch && <h2>My Notes</h2>}
            {showSearch && <input type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
                handleSearch();}} autoFocus placeholder="Keyword..."/>}
            <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>
                {!showSearch ? <CiSearch/> : <MdClose/>}
            </button>
        </header>
        <div className="notes__container">
            {   filteredNotes.length === 0 && <p className='empty__notes'>Not notes found.</p>}
            {   filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)}
        </div>
        <Link to='/create-note' className='btn add__btn'>
            <BsPlusLg/>
        </Link>
    </section>
  )
}

export default Notes