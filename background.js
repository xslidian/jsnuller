chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		return {cancel: true};
	},
	{
		urls: [
			"*://connect.facebook.net/*.js*",
			"*://hm.baidu.com/*.js*",
			"*://*.google-analytics.com/*"
		]
	},
	["blocking"]
);