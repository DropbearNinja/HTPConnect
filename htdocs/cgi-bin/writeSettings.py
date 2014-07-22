#!/HTPC/Python27/python

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
    arguments = cgi.FieldStorage()
    dict = cgiFieldStorageToDict(arguments)
    writeFile(dict)
    print "<script type='text/javascript'>window.top.location.href = '/';</script>"


def writeFile(dict):
    filepath = os.getcwd() + "/../../conf/settings.ini"
        #if os.path.isfile(filepath):
    with open(filepath, 'w') as inifile:
        json.dump(dict, inifile, ensure_ascii=True)
    #else:
    #    print "settings file not found <br>"
#    print filepath

main()