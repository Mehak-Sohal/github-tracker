import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
     e.preventDefault();
     if (text === '') {
        alertContext.setAlert('Please enter something' , 'light');
    } else {
    githubContext.searchUsers(text);
    setText('');
    }
};

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='text' placeholder='Type here to search user..' value={text} onChange={onChange} />
                <input type='submit' value='submit' className='btn btn-block btn-dark' />
                {githubContext.users.length > 0 && <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>}
            </form>
        </div>
    )
}

export default Search
