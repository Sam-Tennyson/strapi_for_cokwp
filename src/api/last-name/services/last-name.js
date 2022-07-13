'use strict';

/**
 * last-name service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-name.last-name');
