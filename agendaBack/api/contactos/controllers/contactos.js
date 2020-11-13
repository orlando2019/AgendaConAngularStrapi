'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const findByNombre = async (pObjeto) => {
	const { nombre } = pObjeto.params;
	/* console.log(nombre) */

	/* const resultado = await strapi.query('contactos').find({ 'nombre': nombre });
	return resultado; */

	const result = await strapi.query('contactos').model.query(condiciones => {
		condiciones.where('nombre', nombre)
	}).fetch();

	return result.toJSON();
}

module.exports = {
	findByNombre
};
