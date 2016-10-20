chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		return {cancel: true};
	},
	{
		urls: [
			"*://connect.facebook.net/*.js*",
			"*://hm.baidu.com/*.js*",
			'*://baifendian.com/*',
			"*://clientstat.duokan.com/*",
			"*://*.mlinks.cc/*",
			"*://log.mmstat.com/*",
			'*://tajs.qq.com/*',
			//"*://59.108.34.106/*",
			//"*://*/PASV/*",
			"*://114.215.114.158/*",
			"*://pagead2.googlesyndication.com/*",
			"*://*.google-analytics.com/*"
		]
	},
	["blocking"]
);

chrome.webRequest.onHeadersReceived.addListener(
	function(e) {
		if (e.statusCode != 302) return;
		console.log(e.statusCode, e.responseHeaders, e.url);
		for (var i = 0; i < e.responseHeaders.length; i++) {
			if (e.responseHeaders[i].name.toLowerCase() != 'location') continue;
			if (e.responseHeaders[i].value.indexOf('PASV') > -1 || e.responseHeaders[i].value.match(/\/pjk\/\w+\/ys\.php\?/) !== null) {
				console.warn(e.responseHeaders[i].value, e.url);
				return { redirectUrl: e.url };
				//e.responseHeaders[i].value = e.url;
				break;
			}
		}
		//return { responseHeaders: e.responseHeaders };
	}, {
		urls: ['*://*/*.js*']
	}, ['blocking', 'responseHeaders']);