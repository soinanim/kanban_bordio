import React from 'react';

import UserAvatar from '../components/UserAvatar';
import ListElement from '../components/ListElement';

import arrows_white from '../icons/arrows-white.svg';

export default function List() {
  return (
    <ul>
      <ListElement
        className={'active workspace'}
        img={<UserAvatar small />}
        spanText='My workspace'
      />
      <ListElement
        img={<img src={arrows_white} alt='' />}
        spanText='Favorites'
        subLiArray={['Marketing', 'Mobile App']}
      />
      <ListElement
        img={<img src={arrows_white} alt='' />}
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
