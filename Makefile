# Common variables
NODE_MODULES=./node_modules
PUBLIC_FOLDER=./public
DIST_FOLDER=$(PUBLIC_FOLDER)/dist

# Cleans out dist folder
clean:
	@rm -rf $(DIST_FOLDER)

# Resets node modules
clean_hard: clean
	@rm -rf $(NODE_MODULES)

# Bundles the js
bundle:
	@mkdir $(DIST_FOLDER) && node browserify.js

# Serves the app
serve: clean bundle
	@node server.js
