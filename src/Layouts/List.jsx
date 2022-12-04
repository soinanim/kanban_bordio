import React from 'react';

import UserAvatar from '../components/UserAvatar';
import ListElement from '../components/ListElement';

export default function List() {
  return (
    <ul>
      <ListElement
        className={'active workspace'}
        img={<UserAvatar small />}
        spanText='My workspace'
      />
      <ListElement
        img={<img src='../icons/arrows-white.svg' alt='' />}
        spanText='Favorites'
        subLiArray={['Marketing', 'Mobile App']}
      />
      <ListElement
        img={<img src='../icons/arrows-white.svg' alt='' />}
        spanText='My Projects'
        subLiArray={[
          'Marketing',
          'Landing Pages',
          'Wedding',
          'Mobile App',
          'House Construction',
        ]}
      />
    </ul>
  );
}
