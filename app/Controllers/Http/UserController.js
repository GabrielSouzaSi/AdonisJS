'use strict'

const User = use("App/Models/User");

class UserController {
  async index() {
    const users = await User
      .query()
      .with('permissions')
      .with('roles')
      .fetch()

    return users
  }

  async show({ response, params }) {
    try {
      const user = await User.findOrFail(params.id);

      await user.loadMany(['permissions', 'roles'])

      return user
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error! User not found" } });
    }
  }

  async store({ request, response }) {
    try {
      const { permissions, roles, ...data } = request.only([
        'username',
        'email',
        'password',
        'permissions',
        'roles'
      ]);

      const userExists = await User.findBy("email", data.email);

      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: "User already registered" } });
      }

      const user = await User.create(data);

      if (permissions) {
        await user.permissions().attach(permissions);
      }

      if (roles) {
        await user.roles().attach(roles);
      }

      await user.loadMany(['permissions', 'roles'])

      return user;
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }

  async update({ request, response, params }) {
    try {
      const { permissions, roles, ...data } = request.only([
        'username',
        'email',
        'password',
        'permissions',
        'roles'
      ]);

      const user = await User.findOrFail(params.id);

      user.merge(data);

      await user.save();

      if (permissions) {
        await user.permissions().sync(permissions);
      }

      if (roles) {
        await user.roles().sync(roles);
      }

      await user.loadMany(['permissions', 'roles'])

      return user;
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error editing user" } });
    }
  }

  async destroy({ response, params }) {
    try {
      const user = await User.findOrFail(params.id);

      await user

    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error! User not found" } });
    }
  }
}

module.exports = UserController
