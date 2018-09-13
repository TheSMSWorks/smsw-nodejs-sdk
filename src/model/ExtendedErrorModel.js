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
    define(['ApiClient', 'model/ErrorModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorModel'));
  } else {
    // Browser globals (root is window)
    if (!root.TheSmsWorksApi) {
      root.TheSmsWorksApi = {};
    }
    root.TheSmsWorksApi.ExtendedErrorModel = factory(root.TheSmsWorksApi.ApiClient, root.TheSmsWorksApi.ErrorModel);
  }
}(this, function(ApiClient, ErrorModel) {
  'use strict';




  /**
   * The ExtendedErrorModel model module.
   * @module model/ExtendedErrorModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ExtendedErrorModel</code>.
   * @alias module:model/ExtendedErrorModel
   * @class
   * @implements module:model/ErrorModel
   * @param message {String} 
   * @param errorCode {Number} 
   * @param status {String} 
   */
  var exports = function(message, errorCode, status) {
    var _this = this;

    ErrorModel.call(_this, message);
    _this['errorCode'] = errorCode;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>ExtendedErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedErrorModel} obj Optional instance to populate.
   * @return {module:model/ExtendedErrorModel} The populated <code>ExtendedErrorModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ErrorModel.constructFromObject(data, obj);
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  // Implement ErrorModel interface:
  /**
   * @member {String} message
   */
exports.prototype['message'] = undefined;



  return exports;
}));


