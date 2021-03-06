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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorModel', 'model/TestResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/TestResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.TheSmsWorksApi) {
      root.TheSmsWorksApi = {};
    }
    root.TheSmsWorksApi.UtilsApi = factory(root.TheSmsWorksApi.ApiClient, root.TheSmsWorksApi.ErrorModel, root.TheSmsWorksApi.TestResponse);
  }
}(this, function(ApiClient, ErrorModel, TestResponse) {
  'use strict';

  /**
   * Utils service.
   * @module api/UtilsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UtilsApi. 
   * @alias module:api/UtilsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the test operation.
     * @callback module:api/UtilsApi~testCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the customer ID to the caller
     * @param {module:api/UtilsApi~testCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestResponse}
     */
    this.test = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = TestResponse;

      return this.apiClient.callApi(
        '/utils/test', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
