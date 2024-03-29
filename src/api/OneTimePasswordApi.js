/**
 * The SMS Works API
 * The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed UK messages are refunded.
 *
 * The version of the OpenAPI document: 1.9.0
 * Contact: support@thesmsworks.co.uk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorModel from '../model/ErrorModel';
import OTP from '../model/OTP';
import OTPResponse from '../model/OTPResponse';
import OTPVerify from '../model/OTPVerify';
import OTPVerifyResponse from '../model/OTPVerifyResponse';

/**
* OneTimePassword service.
* @module api/OneTimePasswordApi
* @version 1.9.0
*/
export default class OneTimePasswordApi {

    /**
    * Constructs a new OneTimePasswordApi. 
    * @alias module:api/OneTimePasswordApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the otpMessageidGet operation.
     * @callback module:api/OneTimePasswordApi~otpMessageidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OTPVerifyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an OTP by it's message ID
     * @param {String} messageid The ID of the OTP you would like returned
     * @param {module:api/OneTimePasswordApi~otpMessageidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OTPVerifyResponse}
     */
    otpMessageidGet(messageid, callback) {
      let postBody = null;
      // verify the required parameter 'messageid' is set
      if (messageid === undefined || messageid === null) {
        throw new Error("Missing the required parameter 'messageid' when calling otpMessageidGet");
      }

      let pathParams = {
        'messageid': messageid
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
      let returnType = OTPVerifyResponse;
      return this.apiClient.callApi(
        '/otp/{messageid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the otpSendPost operation.
     * @callback module:api/OneTimePasswordApi~otpSendPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OTPResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates and sends a One-Time Password
     * @param {module:model/OTP} otp OTP properties
     * @param {module:api/OneTimePasswordApi~otpSendPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OTPResponse}
     */
    otpSendPost(otp, callback) {
      let postBody = otp;
      // verify the required parameter 'otp' is set
      if (otp === undefined || otp === null) {
        throw new Error("Missing the required parameter 'otp' when calling otpSendPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = OTPResponse;
      return this.apiClient.callApi(
        '/otp/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the otpVerifyPost operation.
     * @callback module:api/OneTimePasswordApi~otpVerifyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OTPVerifyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates and sends a One-Time Password
     * @param {module:model/OTPVerify} passcode One-Time Password
     * @param {module:api/OneTimePasswordApi~otpVerifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OTPVerifyResponse}
     */
    otpVerifyPost(passcode, callback) {
      let postBody = passcode;
      // verify the required parameter 'passcode' is set
      if (passcode === undefined || passcode === null) {
        throw new Error("Missing the required parameter 'passcode' when calling otpVerifyPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = OTPVerifyResponse;
      return this.apiClient.callApi(
        '/otp/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
