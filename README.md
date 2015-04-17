SETUP INSTRUCTIONS

To get source code either:
	1) Git clone
	2) Git pull

To install all dependencies in application (will typically already have):
	Run the cmd   'npm install'  in the root of project directory

Before starting up the server, ensure that you have mongodb installed and running on its default port (..i think its 27017)

To install follow these instructions

	1) Install binary with this command 
		curl -O http://downloads.mongodb.org/osx/mongodb-osx-x86_64-3.0.1.tgz

	2) Extract files
		tar -zxvf mongodb-osx-x86_64-3.0.1.tgz

	3) Copy binary files into easily accessible folder. I'd recommend your root directory
		mkdir -p mongodb
		cp -R -n mongodb-osx-x86_64-3.0.1/ mongodb

	4) Ensure the binary is part of your path
		export PATH=<mongodb-install-directory>/bin:$PATH
			**replace <mongodb-install-directory> with path/to/your/mongodb_folder
					for me its just in ~/mongodb

	5) Make data folder for Mongodb to use in the very top level directory of ur operating system
		once at top level:
			mkdir data
			cd data
			mkdir db

	6) Open up permissions so mongo can access folders
		at top level directory of OS
		sudo chmod 777 data 
		cd data
		sudo chmod 777 db

	7) Alias easy to use mongo command
		cd ~;
		vim .bash_profile
		Add the following line to your .bash_profile:
			alias mongo='./<mongodb-install-directory>/bin/mongod'

				**Note: replace <mongodb-install-directory> with path/to/your/mongodb_folder
					for me its just in ~/mongodb

	WALAH!
	Now quit your terminal and reopen it.
	You should now be able to type in mongo at your ~/ directory whenever you want to start running mongo


*************YOU MUST BE RUNNING MONGO IN A SEPARATE TERMINAL WHILE RUNNING APPLICATION******************


Run the following cmd in root of project directory to start up the server:
	PRODUCTION:
		cmd:	'npm start'

	LOCAL DEVELOPMENT:
		cmd:	'node server.js'


Notes:
Backend Application: Node 
	Node routes & views forwarded to the ~/routes & ~/views folder respectively
	Passport(Authentication) config: ~/config

Front-end Application: AngularJS
	All non-backend paths are routed by NodeJS directly to the public folder

	AngularJS App:
		~/public/scripts
		Angular Routes/Config: app.js
		Angular Views: ~/public/partials
		Angular Components: ~/public/components

		@note: Wanted to use bower for angular component management but currently
		limited on server permissions for downloads
