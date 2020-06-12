'use strict'

const Role = use("Role");

class RoleController {
  async index() {
    const roles = await Role
      .query()
      .with('permissions')
      .fetch()

    return roles
  }

  async show({ response, params }) {
    try {
      const role = await Role.findOrFail(params.id);

      await role.load('permissions')

      return role
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error! Role not found" } });
    }
  }

  async store({ request, response }) {
    try {
      const { permissions, ...data } = request.only([
        'name',
        'slug',
        'description',
        'permissions'
      ]);

      const roleExists = await Role.findBy("slug", data.slug);

      if (roleExists) {
        return response
          .status(400)
          .send({ message: { error: "Role already created" } });
      }

      const role = await Role.create(data);

      if (permissions) {
        await role.permissions().attach(permissions);
      }

      await role.load('permissions')

      return role;

    } catch (err) {
      return response.status(err.status).send(err);
    }
  }

  async update({ request, response, params }) {
    try {
      const { permissions, ...data } = request.only([
        'name',
        'slug',
        'description',
        'permissions'
      ]);

      const role = await Role.findOrFail(params.id);

      role.merge(data);

      await role.save();

      if (permissions) {
        await role.permissions().sync(permissions);
      }

      await role.load('permissions')

      return role;
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error editing role" } });
    }
  }

  async destroy({ response, params }) {
    try {
      const role = await Role.findOrFail(params.id);

      await role.delete()

    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error! Role not found" } });
    }
  }
}

module.exports = RoleController
