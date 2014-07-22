#!python


import cgi
import json
from urllib import urlencode
import os, os.path


print 'Content-Type:text/html\n'

def cgiFieldStorageToDict(fieldStorage):
    """ Get a plain dictionary rather than the '.value' system used by the
        cgi module's native fieldStorage class. """
    params = {}
    for key in fieldStorage.keys(  ):
        params[key] = fieldStorage[key].value
    return params

def main():
    readFile()

def readFile():
    filepath = os.getcwd() + "/settings.ini"
    if os.path.isfile(filepath):
        with open(filepath, 'r') as inifile:
            json_data = json.load(inifile)
            print json.dumps(json_data)
            #print str_data

    else:
        print '{"MenuBgColour": "#009300", "MenuTextColour": "#ffffff"}'
#print filepath

main()