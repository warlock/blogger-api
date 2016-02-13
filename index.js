// https://developers.google.com/blogger/docs/3.0/using#RetrievingABlog
var request = require('request');

var get = function (url, callback) {
	request(url, function (error, response, body) {
		var data = JSON.parse(body);
		callback(error, data);
	});
};

exports.blog = function (blog, apikey, callback) {
	get('https://www.googleapis.com/blogger/v3/blogs/byurl?url=' + blog + '&key=' + apikey, function (err, data) {
		callback(err, data);
	});
};

exports.blogId = function (blog, apikey, callback) {
	get("https://www.googleapis.com/blogger/v3/blogs/" + blog + "?key=" + apikey, function (err, data) {
		callback(err, data);
	});
}

exports.userBlogs = function (userId, apikey, callback) {
	get("https://www.googleapis.com/blogger/v3/blogs/" + blog + "?key=" + apikey, function (err, data) {
		callback(err, data);
	}); 
};


exports.posts = function (blog, apikey, callback) {
	var url = "https://www.googleapis.com/blogger/v3/blogs/blogId/posts";
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=YOUR-API-KEY

};

exports.post = function (blog, post, apikey, callback) {
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553?key=YOUR-API-KEY
};


exports.searchPosts = function (search, blog, apikey, callback) {
	//https://www.googleapis.com/blogger/v3/blogs/blogId/posts/search?q=query terms
};

exports.addPost = function (content, blog, apikey, callback) {
	//POST https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/
};


exports.deletePost = function (post, blog, apikey, callback) {
	//DELETE https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
};

exports.updatePost = function (content, post, blog, apikey, callback) {
	//UPDATE https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
};

exports.updatePostSemantics = function () {

};

exports.comments = function (post, blog, apikey, callback) {
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments?key=YOUR-API-KEY
};

exports.comment = function (comment, post, blog, apikey, callback) {
	//GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments/9200761938824362519?key=YOUR-API-KEY
};

exports.pages = function (blog, apikey, callback) {
	//GET https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages?key=YOUR-API-KEY
};

exports.page = function (page, block, apikey, callback) {
	//GET https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages/273541696466681878?key=YOUR-API-KEY
};

exports.users = function (user, apikey, callback) {
	//GET https://www.googleapis.com/blogger/v3/users/userId
};
