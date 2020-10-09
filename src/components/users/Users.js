import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'
import './UserItem.css'

const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className='container UsersDiv'>
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>          
        )
    }   
}


export default Users
