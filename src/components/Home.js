import React, {Fragment, useContext, useEffect} from 'react'
import { Form } from './Form'
import { Notes } from './Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext';
import { Loader } from './Loader';
export const Home = () => {

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    useEffect( () => {
        fetchNotes()
        // eslint-disable-next-line 
    }, [])
    return (
       <Fragment>

            <Form />
            {loading 
            ? <Loader />
            : <Notes notes={notes} onRemove={removeNote} />
        }
             <hr/>
            

       </Fragment>
    )
}