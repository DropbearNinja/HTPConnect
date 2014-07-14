import os, os.path
import cherrypy
import settings
import proxy
import sys
import wsgiref.handlers

class HTPConnect(object):
	@cherrypy.expose
	def index(self):
		return file('index.html')
	
	@cherrypy.expose
	def restart(self):
		cherrypy.engine.restart()

	@cherrypy.expose
	def exit(self):
		cherrypy.engine.exit()

	@cherrypy.expose
	def sickbeard(self):	
		raise cherrypy.HTTPRedirect('http://127.0.0.1:8081')
		
cherrypy.quickstart(HTPConnect(), '/', 'server.conf')