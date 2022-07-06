# Headless Gutenberg - Proof of Concept

The purpose of this project is to establish the minimal requirements to generate Gutenberg blocks without a GUI. The git commit messages contain some description of the process followed to get this working.

### Installing

Clone this repo:

```sh
git clone https://github.com/mkevins/headless-gutenberg-poc.git
```

or:

```sh
git clone git@github.com:mkevins/headless-gutenberg-poc.git
```

Change do this directory:

```sh
cd headless-gutenberg-poc
```

Use the node version (if using nvm):

```sh
nvm use
```

Install the dependencies:

```sh
npm i
```

### Running the script

```sh
npm start -s
```

or

```sh
node index.js
```

### Tinkering

Make changes in `index.js` to experiment with generating block content.
