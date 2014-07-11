import os, os.path
import cherrypy
import json
from cherrypy.lib.httputil import parse_query_string


class Settings:
    dictionary = {"settings": "deadffault"}
    
    def __init__(self):
        self.readsettings()
    
    @cherrypy.expose
    def set(self, *args, **kwargs):
        key = cherrypy.request.params.get("key")
        value = cherrypy.request.params.get("value")

        Settings.dictionary[key] = value

    @cherrypy.expose
    def get(self, *args, **kwargs):
        key = cherrypy.request.params.get("key")

        if key in Settings.dictionary:
            return "Found " + key + " Value: " + Settings.dictionary[key]
        
        else:
            return "Could not find key"
    
    @cherrypy.expose
    def readsettings(self):
        #If settings doesnt exists, call write file with defaults
        if os.path.isfile('settings.ini'):
            with open('settings.ini', 'r') as infile:
                #self.dictonary = json.load(infile)
                #globalDict = data
                data = json.load(infile)
                
                Settings.dictionary = data
                return str(Settings.dictionary)
        else:
            self.writeDefaultSettings()
            self.readSettings()

    @cherrypy.expose
    def writesettings(self):
        with open('settings.ini', 'w') as outfile:
            json.dump(Settings.dictionary, outfile)

    @cherrypy.expose
    def writedefaultsettings(self):
        data = { 'Settings': 'Default' }
        with open('settings.ini', 'w') as outfile:
            json.dump(data, outfile)
        return 'Default Set'


cherrypy.tree.mount(Settings(), '/settings', 'server.conf')