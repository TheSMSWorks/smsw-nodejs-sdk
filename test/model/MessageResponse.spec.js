/**
 * The SMS Works API
 * The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    instance = new TheSmsWorksApi.MessageResponse();
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

  describe('MessageResponse', function() {
    it('should create an instance of MessageResponse', function() {
      // uncomment below and update the code to test MessageResponse
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be.a(TheSmsWorksApi.MessageResponse);
    });

    it('should have the property batchid (base name: "batchid")', function() {
      // uncomment below and update the code to test the property batchid
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property customerid (base name: "customerid")', function() {
      // uncomment below and update the code to test the property customerid
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property failureReason (base name: "failureReason")', function() {
      // uncomment below and update the code to test the property failureReason
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property keyword (base name: "keyword")', function() {
      // uncomment below and update the code to test the property keyword
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property messageid (base name: "messageid")', function() {
      // uncomment below and update the code to test the property messageid
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new TheSmsWorksApi.MessageResponse();
      //expect(instance).to.be();
    });

  });

}));