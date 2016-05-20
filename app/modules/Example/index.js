import React from 'react';
import homepageLoaded from './signals/homepageLoaded';
import redirectHome from './signals/redirectHome';
import notFoundLoaded from './signals/notFoundLoaded';
import httpGetRequested from './signals/httpGetRequested';
import phoneItemSelected from './signals/phoneItemSelected';

import signInLoaded from './signals/signInLoaded';
import signInUserChanged from './signals/signInUserChanged';
import signInPosted from './signals/signInPosted';

import logInLoaded from './signals/logInLoaded';
import logInUserChanged from './signals/logInUserChanged';
import logInPosted from './signals/logInPosted';
import redirectTo from './signals/redirectTo';

import usersListLoaded from './signals/usersListLoaded';

export default (_options = {}) => {
  return (module, _controller) => {
    module.addState({
      openDialog: false,
      pageTitle: '',
      phoneList: {},
      usersList: {},
      selectedPhoneId: null,
      selectedPhoneItem: null,
      leftMenuButtonBack: false,
    });

    module.addSignals({
      homepageLoaded,
      redirectHome,
      notFoundLoaded,
      httpGetRequested,
      phoneItemSelected,

      signInLoaded,
      signInUserChanged,
      signInPosted,

      logInLoaded,
      logInUserChanged,
      logInPosted,

      redirectTo,

      usersListLoaded,
    });
  };
};
