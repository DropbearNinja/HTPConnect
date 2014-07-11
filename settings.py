import os, os.path
import cherrypy
import json


class Settings(object):
    """ Main Class """

    def set(self, key, val):
    #do stuff
        return true

    def get(self,key, defval=''):
    #do stuff
        return true
    
    @cherrypy.expose
    def readSettings(self):
        #If settings doesnt exists, call write file with defaults
        if os.path.isfile('settings.ini'):
            with open('settings.ini', 'r') as infile:
                data = json.load(infile)
                return json.dumps(data)
        else:
            self.writeDefaultSettings()
            return 'fail'

    @cherrypy.expose
    def writeSettings(self, data):
        with open('settings.ini', 'w') as outfile:
            json.dump(data, outfile)

    @cherrypy.expose
    def writeDefaultSettings(self):
        data = { 'Settings': 'Default' }
        with open('settings.ini', 'w') as outfile:
            json.dump(data, outfile)
        return 'Default Set'


cherrypy.tree.mount(Settings(), '/settings', 'server.conf')