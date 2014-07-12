import os, os.path
import cherrypy
import settings
import sys

class HTPConnect(object):
    @cherrypy.expose
    def index(self):
	return file('index.html')
	
	def exit(self):  
		cherrypy.engine.exit()


cherrypy.quickstart(HTPConnect(), '/', 'server.conf')




