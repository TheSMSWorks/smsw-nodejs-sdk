/**
 * The SMS Works API
 * The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.
 *
 * The version of the OpenAPI document: 1.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorModel from '../model/ErrorModel';
import ExtendedErrorModel from '../model/ExtendedErrorModel';
import TestResponse from '../model/TestResponse';

/**
* Utils service.
* @module api/UtilsApi
* @version 1.8.0
*/
export default class UtilsApi {

    /**
    * Constructs a new UtilsApi. 
    * @alias module:api/UtilsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the utilsErrorsErrorcodeGet operation.
     * @callback module:api/UtilsApi~utilsErrorsErrorcodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExtendedErrorModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a sample error object for the given error code. Useful for designing code to react to errors when they occur for real.
     * @param {String} errorcode The code of the error you would like returned
     * @param {module:api/UtilsApi~utilsErrorsErrorcodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExtendedErrorModel}
     */
    utilsErrorsErrorcodeGet(errorcode, callback) {
      let postBody = null;
      // verify the required parameter 'errorcode' is set
      if (errorcode === undefined || errorcode === null) {
        throw new Error("Missing the required parameter 'errorcode' when calling utilsErrorsErrorcodeGet");
      }

      let pathParams = {
        'errorcode': errorcode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ExtendedErrorModel;
      return this.apiClient.callApi(
        '/utils/errors/{errorcode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the utilsTestGet operation.
     * @callback module:api/UtilsApi~utilsTestGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the customer ID to the caller
     * @param {module:api/UtilsApi~utilsTestGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestResponse}
     */
    utilsTestGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = TestResponse;
      return this.apiClient.callApi(
        '/utils/test', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
