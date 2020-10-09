import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './UserItem.css'

const UserItem = ({ user: { id, login, avatar_url } }) => {

    return (
        <div className='card text-center UserItem'>
            <div className='row UserItemRow'>
                <div className='col UserItemCol1'>
                  <img src={avatar_url} alt='' style={{ width: '75px', borderRadius: '40%'}} />
                </div>
                <div className='col UserItemCol2'>
                  <h3>{login}</h3>
                  <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>MORE</Link>
                </div>       
        </div>
        </div>
    )
} 

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

// const userStyle = {
//     width: '20vw',
//     height: '40vh',
//     marginBottom: '40px',
//     backgroundColor: '#b1b1b1',
//     boxShadow: '-1px 4px 20px -6px rgba(0,0.7,0)',padding: '20px',
//     placeItems: 'center',
// }


export default UserItem
