$(document).ready(function() {
	console.log("working js");

	var $modal = $("#add-post-modal");
	var $feed = $("#feed");

	var $userName = $("#user");
	var $thoughts = $("#thoughts");

	//To compile the template
	var _postTemplate = _.template($("#post-template").html());

	var testPosts = [
		{user: "Amanda", toughts: "Working on it"},
		{user: "Amelia", toughts: "Frogs"}
	];

	//Post constructor
	function Post(user, thoughts) {
		this.user = user;
		this.thoughts = thoughts;

		this.items = localStorage.getItem("posts");
		this.key = "posts";
	}

	function SaveRender() {};

	SaveRender.prototype.saveToLs = function(item) {
		if (this.items) {
			items_json = JSON.parse(this.items);
		} else {
			items_json = [];
		}
		items_json.push(item);
		localStorage.setItem(this.key, JSON.stringify(items_json));
	}

	

	// ALL BELOW IS INSPIRED BY THE TODO APP
	// Post.all_posts = [];

	// Post.prototype.save = function() {
	// 	Post.all_posts.push(this);
	// }

	// Post.prototype.render = function() {
	// 	var $post = $(_postTemplate(this));
	// 	$feed.prepend($post);
	// }

	// $modal.on("submit",
	// 	function() {
	// 		// event.preventDefault();
			
	// 		var myPost = new Post($userName.val(), $thoughts.val());
	// 		myPost.save();
	// 		myPost.render();
		
	// 		$form[0].reset();
	// 		$("#item-name").focus();
	// 	}
	// );

})