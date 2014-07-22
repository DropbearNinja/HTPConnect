#!/usr/bin/python

import cgi
import json
from urllib import urlencode
import os, os.path

print "Content-type: text/html\n\n"

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
    filepath = os.getcwd() + "/../settings.ini"
    if os.path.isfile(filepath):
        with open(filepath, 'r') as inifile:
            print json.load(inifile)
    else:
        print "settings file not found <br>"
        print filepath

main()