import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
   
const [value, setValue] = useState('');
const alert = useContext(AlertContext);
const firebase = useContext(FirebaseContext)

const submitHandler = event => {
    event.preventDefault()

if(value.trim()){
    firebase.addNote(value.trim())
    alert.show('Post have created!', 'success')
    setValue('')
} else {
    alert.show('Input the text!')
   }
}

    return (
        <form  onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                     type="text" 
                     classname="form-control"  
                     placeholder="Enter text"
                     value={value}
                     onChange={e => setValue(e.target.value)}
                     />
            </div>
        </form>
    )
}