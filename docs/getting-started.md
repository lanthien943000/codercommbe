### Auth APIs

```javascript
/**
 * @route POST /auth/login
 * @description log in with email and password
 * @body {email, password}
 * @access Public
 */
```

### User APIs

```javascript
/**
 * @route POST /users
 * @description register new user
 * @body {name, email, password}
 * @access Public
 */
```

```javascript
/**
 * @route GET /users?page=1&limit=10
 * @description get users with pagination
 * @access Login required
 */
```

```javascript
/**
 * @route GET /users/me
 * @description get current user info
 * @access Login required
 */
```

```javascript
/**
 * @route GET /users/:id
 * @description get a user profile
 * @access Login required
 */
```

```javascript
/**
 * @route PUT /users/:id
 * @description update user profile
 * @body {name, avatarUrl, coverUrl, aboutMe, city, country, company, jobTitle, facebookLink, instagramLink, linkedLink, twitterLink}
 * @access Login required
 */
```

### Post APIs

```javascript
/**
 * @route GET /posts/user/:userId?page=1&limit=10
 * @description Get all posts an users can see with pagination
 * @access Login required
 */
```

```javascript
/**
 * @route POST /posts
 * @description Create a new post
 * @body {content, image}
 * @access Login required
 */
```

```javascript
/**
 * @route PUT /posts/:id
 * @description Update a post
 * @body {content, image}
 * @access Login required
 */
```

```javascript
/**
 * @route DELETE /posts/:id
 * @description Delete a post
 * @access Login required
 */
```

```javascript
/**
 * @route GET /posts/:id
 * @description Get a single post
 * @access Login required
 */
```

```javascript
/**
 * @route GET /posts/:id/comments
 * @description Get comments of a post
 * @access Login required
 */
```

### Comment APIs

```javascript
/**
 * @route POST /comments
 * @description Create a new comment
 * @body {content, postId}
 * @access Login required
 */
```

```javascript
/**
 * @route PUT /comments/:id
 * @description Update a comment
 * @access Login required
 */
```

```javascript
/**
 * @route DELETE /comments/:id
 * @description Delete a comment
 * @access Login required
 */
```

```javascript
/**
 * @route GET /comments/:id
 * @description Get details of a comment
 * @access Login required
 */
```

### Reaction APIs

```javascript
/**
 * @route POST /reactions
 * @description Save a reaction to post or comment
 * @body {targetTzype: 'Post' or 'Comment', targetId, emoji: 'like' or 'dislike'}
 * @access Login required
 */
```

### Friend APIs

```javascript
/**
 * @route POST /friends/requests
 * @description Send a friend request
 * @body {to: user ID}
 * @access Login required
 */
```

```javascript
/**
 * @route GET /friends/requests/incoming
 * @description Get the list of received pending requests
 * @access Login required
 */
```

```javascript
/**
 * @route GET /friends/requests/outgoing
 * @description Get the list of sent pending requests
 * @access Login required
 */
```

```javascript
/**
 * @route GET /friends
 * @description Get the list of friends
 * @access Login required
 */
```

```javascript
/**
 * @route PUT /friends/requests/:userId
 * @description Accept/Rejecta received pending requests
 * @body {status: 'Accepted' or 'Declined'}
 * @access Login required
 */
```

```javascript
/**
 * @route DELETE /friends/requests/:userId
 * @description Cancel a friend request
 * @access Login required
 */
```

```javascript
/**
 * @route DELETE /friends/:userId
 * @description Remove a friend
 * @access Login required
 */
```
