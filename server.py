import os, os.path
import cherrypy
import settings

class HTPConnect(object):
    @cherrypy.expose
    def index(self):
	return file('index.html')




cherrypy.quickstart(HTPConnect(), '/', 'server.conf')




