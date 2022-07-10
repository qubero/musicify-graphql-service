1. Register New User

```
mutation {
  register(registerUserInput:{
    firstName: "first name"
    lastName: "last name"
    password: "118649qwe"
    email: "some-mail@gmail.com"
  }) {
    id
    password
    firstName
    lastName
    email
  }
}
```

NB! Save generated id

2. Get user info by id

```
{
  user(id:" use id from previous step ") {
    id
    password
    firstName
    lastName
    email
  }
}
```

3. Login (jwt)

```
{
  jwt(
    email:"some-mail@gmail.com"
    password:" use generated user password "
  ){
    jwt
  }
}
```

NB! Save jwt from response and place it to HTPP HEADERS section

```
{
  "authorization": " jwt from response "
}
```

4. Create Genre

```
mutation {
	createGenre(createGenreInput: {
    name:"NEW GENRE"
    description:"description"
    country:"country"
    year: 1234
  }) {
    id
    name
    description
    country
    year
  }
}
```

5. Update Genre

```
mutation {
	updateGenre(updateGenreInput: {
    id: " use generated id from previous step "
    name:"NEW GENRE"
    description:"new description"
    country:"new country"
    year: 4321
  }) {
    id
    name
    description
    country
    year
  }
}
```

6. Delete Genre

```
mutation {
	deleteGenre(id: " use generated id from previous step ") {
    acknowledged
    deletedCount
  }
}
```

7. Get Genre by id

```
{
	genre(id:" use existing genre id "){
    id
    name
    country
    description
    year
  }
}
```

8. Get All Genres

```
{
  genres(
    limit:5
    offset:0
  ) {
    id
    name
    country
    description
  }
}
```

9. Greate Band

```
mutation {
	createBand(createBandInput:{
    name: "Band name"
    origin: "Origin"
    website: "website"
    genresIds:[" use existing genre id "]
    members:[{
      id: " use existing artist id "
      instrument: "guitar"
      years: "1234-4321"
    }]
  }) {
    id
    name
    origin
    website
    genres {
      id
      name
      year
      description
      country
    }
    members {
      id
      firstName
      years
      instrument
    }
  }
}
```

10. Update Band

```
mutation {
	updateBand(updateBandInput:{
    id: "62ca948e5af790c375ddf1e5"
    website: "new website"
  }) {
    website
  }
}
```

11. Delete Band

```
mutation {
	deleteBand(id: " use existing band id ") {
    acknowledged
    deletedCount
  }
}
```

12. Get Band by id

```
{
	band(id:" use existing band id "){
    id
    name
  }
}
```

13. Get All Bands

```
{
  bands(
    limit:5
    offset:0
  ){
    id
    name
    website
    genres{
      id
	    name
      year
      description
      country
    }
    members{
      id
      firstName
      secondName
      middleName
      instrument
      years
    }
  }
}
```

14. Create Artitst

```
mutation{
  createArtist(createArtistInput: {
    firstName: "firstName"
    secondName: "secondName"
    country: "country"
  	bandsIds: ["62c587351defab84dd96dc63"]
    instruments: ["asdasd", "asdsad"]
    birthPlace: "birthPlace"
    birthDate: "11/22/0603"
  }){
  	id
  	firstName
    secondName
    country
    birthDate
    birthPlace
    bands {
    	id
    	name
    }
    instruments
  }
}
```

15. Update Artist

```
mutation{
  updateArtist(updateArtistInput: {
    id: " use existing artist id "
    middleName: "middleName"
    instruments: ["piano"]
  }){
  	id
  	middleName
    instruments
  }
}
```

16. Delete Artist

```
mutation {
	deleteBand(id: " use existing artist id ") {
    acknowledged
    deletedCount
  }
}
```

17. Get Artist by id

```
{
  artist(id:" use existing artist id ") {
    firstName
  }
}
```

18. Get All Artists

```
{
  artists(
    limit:5
    offset:0
  ) {
    id
    firstName
  }
}
```

19. Greate Track

```
mutation {
  createTrack(createTrackInput:{
    title: "Track"
    released: 1234
    duration: 1234
    albumId: " use existing album id "
    artistsIds: [" use existing artist id "]
    genresIds: [" use existing genre id "]
	bandsIds: [" use existing band id "]
  }) {
    released
    duration
    title
    album {
      name
      released
    }
    genres {
      name
    }
    artists {
      firstName
    }
    bands {
      name
    }
  }
}
```

20. Update Track

```
mutation {
  updateTrack(updateTrackInput:{
    id: "62ca9f8aa23ddcd532bec16c"
    title: "Traaaaack"
  }) {
    id
    title
	}
}
```

21. Delete Track

```
mutation {
	deleteBand(id: " use existing track id ") {
    acknowledged
    deletedCount
  }
}
```

22. Get Track by id

```
{
	track(id:" use existing track id "){
    id
    title
  }
}
```

23. Get All Tracks

```
{
	tracks(
    limit:5
    offset:0
  ) {
    id
    title
  }
}
```

24. Create Album

```
mutation {
  createAlbum(createAlbumInput:{
    name: "Album A"
    released: 1234
    trackIds: [" use existing track id "]
    genresIds: [" use existing genre id "]
    bandsIds: [" use existing band id "]
    artistsIds: [" use existing artist id "]
  	image: "string is for example"
  }) {
  	id
    name
    released
    image
    genres {
      name
      year
    }
    bands {
      id
      name
      genres {
				name
      }
      members {
        firstName
        instrument
      }
    }
    artists {
      id
      firstName
      instruments
      country
      bands {
        id
        name
        members {
          firstName
          instrument
        }
      }
    }
  }
}
```

25. Update Album

```
mutation {
	updateAlbum(updateAlbumInput: {
    id: " use existing album id "
    bandsIds:[" use existing band id "]
  }) {
    id
    name
    bands {
      name
    }
  }
}
```

26. Delete Album

```
mutation {
  deleteAlbum(id:" use existing album id ") {
    acknowledged
    deletedCount
  }
}
```

27. Get Album by id

```
{
  album(id:" use existing album id "){
    id
    name
  }
}
```

28. Get All Albums

```
{
	albums(
    limit:5
    offset:0
  ) {
    id
    name
  }
}
```

29. Get Favourites

```
{
  favourites {
    userId
    bands {
      name
    }
    genres {
      name
    }
    artists {
      secondName
      middleName
      firstName
    }
    tracks {
      title
    }
  }
}
```

30. Add Track to Favourites

```
mutation {
  addTrackToFavourites(input: {
    id:" use existing track id "
  }) {
    tracks {
      title
    }
  }
}
```

31. Add Band to Favourites

```
mutation {
  addBandToFavourites(input: {
    id:" use existing band id "
  }) {
  	bands {
    	name
    }
  }
}
```

32. Add Genre to Favourites

```
mutation {
  addGenreToFavourites(input: {
    id:" use existing genre id "
  }) {
  	genres {
    	name
    }
  }
}
```

33. Add Artist to Favourites

```
mutation {
  addArtistToFavourites(input: {
    id:" use existing artist id "
  }) {
  	artists {
    	firstName
    }
  }
}
```
