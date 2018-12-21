import React from 'react';
import { Link } from 'react-router-dom';


class UserShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this);

    }

componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
}

handleLogout(e) {
    e.preventDefault();
    this.props.action().then(() => this.props.history.push('/login'));
}


// componentDidUpdate() {  for different user show pages
//     this.props.fetchUser(this.props.match.params.id);
// }

    render() {
        if(this.props.user === undefined){
            return (
                <div></div>
            )
        }
         
        return (
            <div className='profile-div'>
            
                <div className='info-container'>
                    <div className='image-section'><img className='prof-pic' src={this.props.user.photo} /></div>
                    <div className='info-section'>
                            <div className='div-1'> 
                                <h1>{this.props.user.username}</h1>
                                <div><button className='user-button'>Edit Profile</button></div>
                                <div><button className='user-button' onClick={this.handleLogout}>Log Out</button></div>
                                <div><button className='user-button' onClick={this.handleUpload}>Log Out</button></div>
                            </div>

                            <ul className='stats-list'> 
                                <li className='stat-li'><span className='number'>{this.props.posts.length}</span> posts</li>
                                <li className='stat-li'>followers</li>
                                <li className='stat-li'>following</li>
                            </ul>
                        <div className='div-3'> 
                        <h1 className='full-name'>{this.props.user.full_name}</h1>
                            {/* <div><div>{this.props.user.bio}</div></div> */}
                        </div>
                        </div>
                </div>

                <div className='posts-block'></div>

                <div className='posts-container'>
                    <div className='all-posts'>
                    {this.props.posts.reverse().map( post => {
                        return (
                            <div className='post' tabIndex="0">
                            <img className='post-image' src={post.photo} />
                            <div className='post-info'></div>
                            </div>
                        )
                    })}
                    </div>
                </div>
                {/* <UserPostsIndexContainer userId={userProf.id} /> */}
            </div>
        );
    }
};

export default UserShow;