/**
 * The SMS Works API
 * The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSmsWorksApi);
  }
}(this, function(expect, TheSmsWorksApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheSmsWorksApi.BatchMessageResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BatchMessageResponse', function() {
    it('should create an instance of BatchMessageResponse', function() {
      // uncomment below and update the code to test BatchMessageResponse
      //var instane = new TheSmsWorksApi.BatchMessageResponse();
      //expect(instance).to.be.a(TheSmsWorksApi.BatchMessageResponse);
    });

    it('should have the property batchid (base name: "batchid")', function() {
      // uncomment below and update the code to test the property batchid
      //var instane = new TheSmsWorksApi.BatchMessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TheSmsWorksApi.BatchMessageResponse();
      //expect(instance).to.be();
    });

  });

}));
