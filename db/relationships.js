const Profile = require('../api/models/profile.model');
const Subscription = require('../api/models/subscription.model');
const User = require('../api/models/user.model');
const Category = require('../api/models/category.model');
const Serie = require('../api/models/serie.model');
const Rating = require('../api/models/rating.model');

const relationShips = () => {
  /**
   * * Subscriptions - Users
   *  1:N
   */
  User.belongsTo(Subscription); // Un usuario solo puede tener 1 suscripción.
  Subscription.hasMany(User); // Una suscripción puede tener muchos usuarios.

  /**
   * * Users - Profiles
   *  1:1
   */
  User.belongsTo(Profile, { onDelete: 'cascade', onUpdate: 'cascade' }); // Un usuario tiene un solo perfil.
  Profile.hasOne(User, { onDelete: 'cascade', onUpdate: 'cascade' }); // Un perfil solo pertenece a un usuario.

  /**
   * * Users - Series -> Favorites
   *  N:M
   */
  User.belongsToMany(Serie, {
    through: 'Favorites',
    as: 'Favorite',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }); // Un usuario puede ver muchas series.
  Serie.belongsToMany(User, {
    through: 'Favorites',
    as: 'Favorite',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }); // Una serie puede ser vista por muchos usuarios.

  /**
   * * Series - Categories
   *  N:1
   */
  Serie.belongsTo(Category, { onDelete: 'cascade', onUpdate: 'cascade' }); // Una serie puede tener solo una categoría.
  Category.hasMany(Serie, { onDelete: 'cascade', onUpdate: 'cascade' }); // Una categoría puede estar en muchas series.

  /**
   * * Users - Ratings
   *  1:N
   */
  User.hasMany(Rating, { onDelete: 'cascade', onUpdate: 'cascade' }); // Un usuario puede hacer muchos ratings.
  Rating.belongsTo(User, { onDelete: 'cascade', onUpdate: 'cascade' }); // Un rating solo puede pertener a un usuario.

  /**
   * * Ratings - Series
   *  N:1
   */
  Rating.belongsTo(Serie, { onDelete: 'cascade', onUpdate: 'cascade' }); // Un rating solo puede pertener a una serie.
  Serie.hasMany(Rating, { onDelete: 'cascade', onUpdate: 'cascade' }); // Una serie puede tener muchos ratings.
};

module.exports = relationShips;
