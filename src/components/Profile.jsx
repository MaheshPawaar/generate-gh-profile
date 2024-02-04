import { useRecoilValueLoadable } from 'recoil';
import { profileInfo } from '../store/atoms/github';
import "../index.css"

function Profile() {
  const cardInfo = useRecoilValueLoadable(profileInfo);

  if (cardInfo.state === 'loading')
    return <div className="container">Loading...</div>;
  else if (cardInfo.state === 'hasError')
    return <div className="container">User Not Found</div>;
  else
    return (
      <div className="container">
        <div>
          <div className="img-container">
            <img src={cardInfo.contents.avatar_url} alt="Profile Picture" />
          </div>
          <div className="name-container">
            <p>{cardInfo.contents.name}</p>
          </div>
        </div>
        <div className="info-container">
          <div>
            <div>Followers</div>
            {cardInfo.contents.followers}
          </div>
          <div>
            <div>Following</div>
            {cardInfo.contents.following}
          </div>
          <div>
            <div>Repos</div>
            {cardInfo.contents.public_repos}
          </div>
        </div>
      </div>
    );
}

export default Profile;
