import os, os.path
import cherrypy

class HelloWorld(object):
    @cherrypy.expose
    def index(self):
	return file('index.html')


cherrypy.quickstart(HelloWorld(), '/', 'server.conf')