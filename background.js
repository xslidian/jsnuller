chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		return {cancel: true};
	},
	{
		urls: [
			"*://connect.facebook.net/*.js*",
			"*://hm.baidu.com/*.js*",
			"*://clientstat.duokan.com/*",
			"*://log.mmstat.com/*",
			"*://pagead2.googlesyndication.com/*",
			"*://*.google-analytics.com/*"
		]
	},
	["blocking"]
);