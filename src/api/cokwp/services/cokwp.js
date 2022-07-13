'use strict';

/**
 * cokwp service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cokwp.cokwp');
