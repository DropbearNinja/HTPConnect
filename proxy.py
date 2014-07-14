import urllib2
import cherrypy

class Proxy:
    @cherrypy.expose
    def getHTML(self, *args, **Kargs):
        url = cherrypy.request.params.get("url")
        
        req = urllib2.Request(url)
        http = urllib2.urlopen(req)
        r = http.read()
        return r

cherrypy.tree.mount(Proxy(), '/proxy', 'server.conf')