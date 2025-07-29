const express = require('express')
const isAuthenticated = require('../Middleware')
const handleLoginUser = require('../Controllers/userHandler/login')
const handleGetUserProfile = require('../Controllers/userHandler/getUserProfile')
const handleUpdateProfile = require('../Controllers/userHandler/updateUserProfile')
const handleDeleteUserProfile = require('../Controllers/userHandler/deleteUserProfile')
const handleLogOut = require('../Controllers/userHandler/logout')
const checkSession = require('../Controllers/userHandler/checkSession')
const handleRegisterUser = require('../Controllers/userHandler/signup')

// Create a new router instance
const router = express.Router()


// User routes
router.post('/signup', handleRegisterUser)

router.post("/login", handleLoginUser)

router.get('/users/:id', isAuthenticated, handleGetUserProfile)

router.get('/users', isAuthenticated, handleGetUserProfile)

router.patch('/users', isAuthenticated, handleUpdateProfile )

router.delete("/users", isAuthenticated, handleDeleteUserProfile)

router.get('/check-session', checkSession)

router.post('/logout', isAuthenticated, handleLogOut )


module.exports = router
