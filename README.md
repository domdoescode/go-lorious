# GO-lorious!

Developing Golang projects has never been so wonderfully lovely and nice!

## Features

* Uses Gulp to automatically re-make and re-run your project - great for web services.
* No need for a global GOPATH - that stuff is for losers, code wherever you want!
* Localised extensions - ensure they're kept with your project.

## Getting Started

```sh
// Clone the project into your own project folder
git clone http://github.com/domudall/go-lorious your-project-name

cd your-project-name

// Remove the .git folder - You don't want to commit all over my jazz
rm -rf .git

// Set up your own git stuff
git init

// NPM install that bad-boy and set up gulp globally
npm install
sudo npm install -g gulp
```

Before running the gulp service, you'll want to change line 71 of the
`gulpfile.js` file to whatever your go build output file will be. You'll also
want to add that to your `.gitignore` if you're building on each machine
separately (recommended).

Then, just GO!

```sh
gulp
```

Changes within `*.go` files, including deleting and creating them within the
project and subdirectories (woahMG), will cause a rebuild, and chuck out errors
if you have any.

## Extensions

If you are using extensions, just add them to the `ext/` directory, and the
`make` task will pick them up as part of your Go path. Simple.

## Have Fun.

Word.