import os, os.path
import cherrypy
import json


class Settings:
    dictionary = {"settings": "deadffault"}
    
    def __init__(self):
        self.readsettings()
    
    
    def set(self, *args, **kwargs):
        key = cherrypy.request.params.get("key")
        value = cherrypy.request.params.get("value")
        
        Settings.dictionary[key] = value
        self.writesettings()
    
    
    def get(self, *args, **kwargs):
        key = cherrypy.request.params.get("key")
        
        if key in Settings.dictionary:
            return Settings.dictionary[key]
        
        else:
            return "Could not find key"
    
    
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
            self.writedefaultsettings()
            self.readsettings()


    def writesettings(self):
        with open('settings.ini', 'w') as outfile:
            json.dump(Settings.dictionary, outfile)


    def writedefaultsettings(self):
        data = { 'Settings': 'Default', 'MenuBGColour': '#009300' }
        with open('settings.ini', 'w') as outfile:
            json.dump(data, outfile)
        return 'Default Set'

def __init__
    

