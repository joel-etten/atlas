import Model from '../helpers/model';

const mapper = {
  _id: '_id',
  email: 'email',
  username: 'username',
  picture: 'picture',
}

export default new Model(mapper)
