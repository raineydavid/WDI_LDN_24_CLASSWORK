# HOW TO: BUILD A RAILS APP
## Making a music library

First we need to work out what we want our models to look like

### Artist
has_and_belongs_to_many: :tracks
has_many: :albums, through: tracks
has_many: :albums_as_owner, class_name: "Artist", foreign_key: :owner_id

### Album
belongs_to: :owner, class_name: "User", foreign_key: :owner_id
has_many: :tracks
has_many: :artists, :through :tracks

### Track
belongs_to: :album
has_and_belongs_to_many: :artists

##Creating the app using scaffolds

We can make this app with a few commands using the Rails generagors

```bash
$ rails new music_library -d postgresql
$ rails g scaffold Artist name
$ rails g scaffold Album title description:text release_date: date artist_id:integer
$ rails g scaffold Track title number:integer duration:float{5,2} album:references
$ rails g migration CreateJoinTableArtistsTracks artist track
```
