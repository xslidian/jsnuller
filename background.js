chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		return {cancel: true};
	},
	{
		urls: [
			"*://connect.facebook.net/*.js*",
			"*://hm.baidu.com/*.js*",
			"*://log.mmstat.com/*",
			"*://*.google-analytics.com/*"
		]
	},
	["blocking"]
);