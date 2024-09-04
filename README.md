# README

## Installation

Make sure Ruby and Node are installed. Install the dependencies with:

```
bundle
npm install
```

Copy `.env.sample` to `.env` and fill in the values.

## Run the app

```
foreman start
```

The app will be available at http://localhost:5173.

## Notes

* `clerk_session` raises a deprecation error.
* Anytime you make a change in the rails app, the rails logs show 

```
11:30:45 api.1  | NoMethodError (undefined method `helper_method' for ApplicationController:Class
11:30:45 api.1  | 
11:30:45 api.1  |       helper_method :clerk_session, :clerk_reverify_session!,
11:30:45 api.1  |       ^^^^^^^^^^^^^):
```

