## Routes
- **/auth**
- **/user**
- **/profile**
- **/subscription**
- **/serie**
- **/favorite**
- **/category**
- **/rating**


## Models & CRUD endpoints
Below each model is equivalent to a Database's table with its fields and data parameters.

<details><summary><b>User</b></summary>

- **id** (type: <em>INTEGER</em>, primaryKey: <em>true</em>, autoIncrement: <em>true</em>, allowNull: <em>true</em>)
- **subscriptionId** (type: <em>INTEGER</em>, foreignKey: <em>true</em>, allowNull: <em>false</em>)
- **profileId** (type: <em>INTEGER</em>, foreignKey: <em>true</em>, allowNull: <em>false</em>)
- **email** (type: <em>INTEGER</em>, allowNull: <em>false</em>, unique: <em>true</em>, validate: <em>isEmail</em>)
- **password** (type: <em>STRING</em>, allowNull: <em>false</em>, validate: regex (<em>Minimum four characters, at least one uppercase letter, one lowercase letter and one number</em>))
- **CC** (type: <em>STRING</em>, allowNull: <em>false</em>)

#### Auth
```js
ROUTE /auth

POST: '/signup' => signUp
POST: '/login'  => logIn
```

#### CRUD
```js
ROUTE /user

GET:    '/:userId'  => checkAuth, getUser
POST:   '/'         => checkAuth, createUser
PATCH:  '/:userId'  => checkAuth, updateUser
DELETE: '/:userId'  => checkAuth, deleteUser
```

</details>

<details><summary><b>Profile</b></summary>

- **id** (type: <em>INTEGER</em>, primaryKey: <em>true</em>, autoIncrement: <em>true</em>, allowNull: <em>true</em>)
- **nick** (type: <em>VARCHAR</em>, allowNull: <em>false</em>, unique: <em>true</em>)
- **profileimage** (type: <em>VARCHAR</em>, allowNull: <em>true</em>)

#### CRUD
```js
ROUTE /profile

GET:    '/:profileId'  => checkAuth, getProfile
POST:   '/'            => checkAuth, createProfile
PATCH:  '/:profileId'  => checkAuth, changeProfile
DELETE: '/:profileId'  => checkAuth, deleteProfile
```

</details>

<details><summary><b>Subscription</b></summary>

- **id** (type: <em>INTEGER</em>, primaryKey: <em>true</em>, autoIncrement: <em>true</em>, allowNull: <em>true</em>)
- **type** (type: <em>ENUM('month', 'year')</em>, allowNull: <em>false</em>)
- **name** (type: <em>VARCHAR</em>, allowNull: <em>false</em>)
- **price** (type: <em>INTEGER</em>, allowNull: <em>false</em>)

#### CRUD
```js
ROUTE /subscription

POST:   '/:userId'  => checkAuth, paySubscription
DELETE: '/:userId'  => checkAuth, stopSubscription
```

</details>

<details><summary><b>Series</b></summary>

- **id** (type: <em>INTEGER</em>, primaryKey: <em>true</em>, autoIncrement: <em>true</em>, allowNull: <em>true</em>)
- **categoryId** (type: <em>INTEGER</em>, foreignKey: <em>true</em>, allowNull: <em>false</em>)
- **title** (type: <em>VARCHAR</em>, allowNull: <em>false</em>, unique: <em>true</em>)
- **description** (type: <em>TEXT</em>, allowNull: <em>true</em>)
- **duration** (type: <em>VARCHAR</em>, allowNull: <em>false</em>)
- **rating** (type: <em>INTEGER</em>, allowNull: <em>true</em>)



#### CRUD
```js
ROUTE /serie

GET:    '/:serieId' => checkAuth, getOneSerie
GET:    '/'         => checkAuth, getAllSeries
PATCH:  '/:serieId'  => checkAuth, updateSerie
```

</details>

<details><summary><b>Favorite</b></summary>

- **serieId** (type: <em>INTEGER</em>, foreignKey: <em>true</em>, allowNull: <em>false</em>)
- **userId** (type: <em>INTEGER</em>, foreignKey: <em>true</em>, allowNull: <em>false</em>)


#### CRUD
```js
ROUTE /favorite

GET:    '/:userId'          => checkAuth, getFavorites
POST:   '/:userId'          => checkAuth, addFavorites
DELETE: '/:userId/:serieId' => checkAuth, deleteFavorite
```

</details>

<details><summary><b>Category</b></summary>

- **id** (type: <em>INTEGER</em>, primaryKey: <em>true</em>, autoIncrement: <em>true</em>, allowNull: <em>true</em>)
- **name** (type: <em>VARCHAR</em>, allowNull: <em>false</em>)


#### CRUD
```js
ROUTE /category

GET:    '/:userId'          => checkAuth, getFavorites
POST:   '/:userId'          => checkAuth, addFavorites
DELETE: '/:userId/:serieId' => checkAuth, deleteFavorite
```

</details>

<details><summary><b>Rating</b></summary>

- **id** (type: <em>INTEGER</em>, primaryKey: <em>true</em>, autoIncrement: <em>true</em>, allowNull: <em>true</em>)
- **serieId** (type: <em>INTEGER</em>, foreignKey: <em>true</em>, allowNull: <em>false</em>)
- **userId** (type: <em>INTEGER</em>, foreignKey: <em>true</em>, allowNull: <em>false</em>)
- **rate** (type: <em>INTEGER</em>, allowNull: <em>false</em>)
- **comment** (type: <em>VARCHAR</em>, allowNull: <em>true</em>)


#### CRUD
```js
ROUTE /rating

GET:    '/:serieId'  => checkAuth, getSerieRating
POST:   '/'          => checkAuth, addRating
PATCH:  '/:ratingId' => checkAuth, updateRating
DELETE: '/:ratingId' => checkAuth, deleteFavorite
```

</details>