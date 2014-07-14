import os, os.path
import cherrypy
import settings
import proxy
import sys

class HTPConnect(object):
    @cherrypy.expose
    def index(self):
	return file('index.html')

    @cherrypy.expose
    def exit(self):
        cherrypy.engine.exit()
		
	@cherrypy.expose
	def restart(self):
		cherrypy.engine.restart()
		
cherrypy.quickstart(HTPConnect(), '/', 'server.conf')