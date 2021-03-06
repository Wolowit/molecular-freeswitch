const esl = require("modesl");

module.exports = {
	name: "helper",
	// load services/helper.service.js
	// call "helper.random"
	actions: {
		random() {
			return Math.round(Math.random() * 10);
		},
	},

	events: {
		"hello.called"(payload) {
			this.logger.info("Helper Service Caught an Event");
			this.logger.info(payload);
		},
	},
};
