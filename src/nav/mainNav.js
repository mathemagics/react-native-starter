import React, { Component } from 'react';
import { View } from 'react-native';
import { func } from 'prop-types';
import { map } from 'react-immutable-proptypes';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import MainNav from './config';

class MainNavigation extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    nav: map.isRequired,
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MainNav navigation={addNavigationHelpers({ dispatch, state: nav.toJS() })} />
      </View>
    );
  }
}

const mapStateToProps = state => ({ nav: state.get('nav') });

export default connect(mapStateToProps)(MainNavigation);
