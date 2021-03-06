import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderContainer, Header, Image } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={'https://media.licdn.com/dms/image/C5603AQGbN62Lg62cnQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=c2tSvHIH4Dzk6nr1vApkH54iVv3HhTOKbJY-Quqp_pk'} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.usernameCaseSensitive}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.usernameCaseSensitive}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
          {/*<p>
            Blog:{' '}
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p>*/}
        </div>
      </Header>
    </HeaderContainer>
  );
};

export default UserHeader;