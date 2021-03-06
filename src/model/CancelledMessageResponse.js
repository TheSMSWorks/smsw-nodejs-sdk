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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TheSmsWorksApi) {
      root.TheSmsWorksApi = {};
    }
    root.TheSmsWorksApi.CancelledMessageResponse = factory(root.TheSmsWorksApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CancelledMessageResponse model module.
   * @module model/CancelledMessageResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CancelledMessageResponse</code>.
   * @alias module:model/CancelledMessageResponse
   * @class
   * @param messageid {String} 
   * @param status {String} 
   */
  var exports = function(messageid, status) {
    var _this = this;

    _this['messageid'] = messageid;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>CancelledMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelledMessageResponse} obj Optional instance to populate.
   * @return {module:model/CancelledMessageResponse} The populated <code>CancelledMessageResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('messageid')) {
        obj['messageid'] = ApiClient.convertToType(data['messageid'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} messageid
   */
  exports.prototype['messageid'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


