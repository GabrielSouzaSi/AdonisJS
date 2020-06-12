"use strict";

const Permission = use("Permission");

class PermissionController {
  async index() {
    const permissions = await Permission.all();

    return permissions
  }

  async store({ request, response }) {
    try {
      const data = request.all();

      const permissionExists = await Permission.findBy("slug", data.slug);

      if (permissionExists) {
        return response
          .status(400)
          .send({ message: { error: "Permission already created" } });
      }

      const permission = await Permission.create(data);

      return permission;
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }

  async update({ request, response, params }) {
    try {
      const data = request.all();

      const permission = await Permission.findOrFail(params.id);

      permission.merge(data);

      await permission.save();

      return permission;
    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error editing permission" } });
    }
  }

  async destroy({ response, params }) {
    try {
      const permission = await Permission.findOrFail(params.id);

      await permission.delete()

    } catch (err) {
      return response
        .status(err.status)
        .send({ message: { error: "Error! Permission not found" } });
    }
  }
}

module.exports = PermissionController;
