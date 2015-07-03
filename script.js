$(document).ready(function() {
	console.log("working js");

	var $form = $("#add-post-modal");
	var $feed = $("#feed");

	var $userName = $("#user");
	var $thoughts = $("#thoughts");

	//To compile the template
	var _postTemplate = _.template($("#post-template").html());

	//Post constructor
	function Post(user, thoughts) {
		this.user = user;
		this.thoughts = thoughts;
	}

})