let express = require('express')
    , passport = require('passport');

let router = express.Router();
router.get('/google',passport.authenticate('google', {
    scope : ['https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/userinfo.email']
}
));

router.get('/google/callback' ,passport.authenticate('google' , { failureRedirect : '/' }) 
 , function(req,res){
    res.redirect('/users');
});

router.get('/user/logout',function(req,res){
        req.session.destroy(); //Destroy current session. this generate new session for next req.
        req.logout();
        req.redirect('/');
});


module.exports = router;