/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 15:02:32
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 16:35:29
 */
import {compose, flattenProp} from 'recompose'
import {connect} from 'react-redux'

import Profile from './Profile.component'
import {profileSelector} from '../../reducers/user/profile';
import {numberOfFavoritesSelector} from '../../reducers/user/favorites';
import {loadingSelector} from '../../reducers/loading';
import {UPDATE_PROFILE} from '../../constants/Actions';

const mapStateToProps = (state) => ({
  profile: profileSelector(state),
  numberOfFavorites: numberOfFavoritesSelector(state),
  loadingProfilePicture: loadingSelector(state, UPDATE_PROFILE),
})

const mapDispatchToProps = () => ({
  
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  flattenProp('profile'),
)(Profile)
