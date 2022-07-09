
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAlbumInput {
    name: string;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export class UpdateAlbumInput {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export class CreateArtistInput {
    firstName: string;
    secondName: string;
    country: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class UpdateArtistInput {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    country?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class InputMember {
    id: string;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export class CreateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<InputMember>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class UpdateBandInput {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<InputMember>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class AddToFavouritesInput {
    id: string;
}

export class CreateGenreInput {
    name: string;
    description: string;
    country: string;
    year: number;
}

export class UpdateGenreInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class CreateTrackInput {
    title: string;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class UpdateTrackInput {
    id: string;
    title?: Nullable<string>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export class RegisterUserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export class Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export abstract class IQuery {
    abstract albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;

    abstract album(id: string): Nullable<Album> | Promise<Nullable<Album>>;

    abstract artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;

    abstract band(id: string): Nullable<Band> | Promise<Nullable<Band>>;

    abstract favourites(): Nullable<Favourites> | Promise<Nullable<Favourites>>;

    abstract genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;

    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAlbum(createAlbumInput?: Nullable<CreateAlbumInput>): Album | Promise<Album>;

    abstract updateAlbum(updateAlbumInput?: Nullable<UpdateAlbumInput>): Album | Promise<Album>;

    abstract deleteAlbum(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract createArtist(createArtistInput?: Nullable<CreateArtistInput>): Artist | Promise<Artist>;

    abstract updateArtist(updateArtistInput?: Nullable<UpdateArtistInput>): Artist | Promise<Artist>;

    abstract deleteArtist(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract createBand(createBandInput?: Nullable<CreateBandInput>): Band | Promise<Band>;

    abstract updateBand(updateBandInput?: Nullable<UpdateBandInput>): Band | Promise<Band>;

    abstract deleteBand(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract addBandToFavourites(input?: Nullable<AddToFavouritesInput>): Favourites | Promise<Favourites>;

    abstract addArtistToFavourites(input?: Nullable<AddToFavouritesInput>): Favourites | Promise<Favourites>;

    abstract addGenreToFavourites(input?: Nullable<AddToFavouritesInput>): Favourites | Promise<Favourites>;

    abstract addTrackToFavourites(input?: Nullable<AddToFavouritesInput>): Favourites | Promise<Favourites>;

    abstract createGenre(createGenreInput?: Nullable<CreateGenreInput>): Genre | Promise<Genre>;

    abstract updateGenre(updateGenreInput?: Nullable<UpdateGenreInput>): Genre | Promise<Genre>;

    abstract deleteGenre(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract createTrack(createTrackInput?: Nullable<CreateTrackInput>): Track | Promise<Track>;

    abstract updateTrack(updateTrackInput?: Nullable<UpdateTrackInput>): Track | Promise<Track>;

    abstract deleteTrack(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract register(registerUserInput?: Nullable<RegisterUserInput>): User | Promise<User>;
}

export class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class Member {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export class Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class Delete {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export class Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class JWT {
    jwt?: Nullable<string>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

type Nullable<T> = T | null;
