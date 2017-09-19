import { fromJS } from 'immutable';
import { NavigationActions } from 'react-navigation';

// Navigation
import mainNav from 'nav/config';

const initialState = fromJS(
  mainNav.router.getStateForAction(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'login' })],
  })));

export default (state = initialState, action) => {
  const nextState = state.merge(mainNav.router.getStateForAction(action, state.toJS()));
  return nextState || state;
};
