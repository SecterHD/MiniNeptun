'use strict'

const User = use("App/Model/User");
const Hash = use("Hash");
const Validator = use('Validator');

class UserController {

    *
    login(request, response) {
        yield response.sendView('login');
    }

    *
    loginSubmit(request, response) {
        var post = request.post();
        try {
            const user = yield User.findBy('ncode', post.ncode);
            const isSame = yield Hash.verify(post.password, user.password);
            if (isSame) {
                yield request.auth.login(user);
                response.redirect('/lectures');
            }
            throw new Error();
        } catch (e) {
            yield request
                .with({
                    errors: [{
                        message: 'A Neptun kód vagy a jelszó helytelen!'
                    }]
                })
                .flash()
            yield response.redirect('back');
        }
    }

    *
    logout(request, response) {
        yield request.auth.logout();
        response.redirect('/')
    }

    *
    register(request, response) {
        const admin = yield User.query().where('isAdmin', true);
        var isAdminAlive = false;
        if (admin[0] != null) {
            isAdminAlive = true;
        }
        yield response.sendView('register', {
            isAdminAlive: isAdminAlive
        });
    }

    *
    registerSubmit(request, response) {
        var post = request.post();
        if (post.isAdmin == "Ki" || post.isAdmin == null) {
            var user_data = {
                ncode: post.ncode,
                firstname: post.FN,
                lastname: post.LN,
                password: post.password,
                isAdmin: false,
            }
        } else {
            var user_data = {
                ncode: post.ncode,
                firstname: post.FN,
                lastname: post.LN,
                password: post.password,
                isAdmin: true,
            }
        }

        const validation = yield Validator.validateAll(user_data, User.rules)

        if (validation.fails()) {
            yield request
                .with({
                    errors: [{
                        message: 'Ellenőrizze, hogy helyesen írta-e be a Neptun kódot és a jelszót!'
                    }]
                })
                .flash()

            response.redirect('back')
            return
        }

        user_data.password = yield Hash.make(user_data.password);
        var user = yield User.create(user_data);
        yield user.save();
        yield response.redirect('/');
    }
}

module.exports = UserController