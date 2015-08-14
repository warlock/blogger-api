var request = require('request');
//https://developers.google.com/blogger/docs/3.0/using#RetrievingABlog

var get = function (url, callback) {
	request(url, function (error, response, body) {
		var data = JSON.parse(body);
		callback(error, data);
	});
};

exports.blog = function (blog, apikey, callback) {
	var url = 'https://www.googleapis.com/blogger/v3/blogs/byurl?url=' + blog + '&key=' + apikey;
	get(url, callback);
};

exports.blogId = function () {
	var url = "https://www.googleapis.com/blogger/v3/blogs/2399953?key=YOUR-API-KEY";
}

exports.userBlogs = function (id, apikey, callback) {
	var url = "	
	request(url, function (error, response, body) {
		console.log(body);
	});
};


exports.posts = function () {
	var url = "https://www.googleapis.com/blogger/v3/blogs/blogId/posts";
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=YOUR-API-KEY

};

exports.post = function () {
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553?key=YOUR-API-KEY
};


exports.searchPosts = function () {
	//https://www.googleapis.com/blogger/v3/blogs/blogId/posts/search?q=query terms
};

exports.addPost = function () {
	//POST https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/
};


exports.deletePost = function () {
	//DELETE https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
};

exports.updatePost = function () {
	//UPDATE https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
};

exports.updatePostSemantics = function () {

};

exports.commentsPost = function () {
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments?key=YOUR-API-KEY
};

exports.comment = function () {
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments/9200761938824362519?key=YOUR-API-KEY
};

exports.pages = function () {
	//GET https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages?key=YOUR-API-KEY
};

exports.page = function () {
	//GET https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages/273541696466681878?key=YOUR-API-KEY
};

exports.users = function () {
	//GET https://www.googleapis.com/blogger/v3/users/userId
};


