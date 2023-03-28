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

import ApiClient from '../ApiClient';

/**
 * The ExtendedErrorModelAllOf model module.
 * @module model/ExtendedErrorModelAllOf
 * @version 1.8.0
 */
class ExtendedErrorModelAllOf {
    /**
     * Constructs a new <code>ExtendedErrorModelAllOf</code>.
     * @alias module:model/ExtendedErrorModelAllOf
     * @param errorCode {Number} Numeric code used to identify the error. Integer.
     * @param status {String} 
     */
    constructor(errorCode, status) { 
        
        ExtendedErrorModelAllOf.initialize(this, errorCode, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errorCode, status) { 
        obj['errorCode'] = errorCode;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ExtendedErrorModelAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendedErrorModelAllOf} obj Optional instance to populate.
     * @return {module:model/ExtendedErrorModelAllOf} The populated <code>ExtendedErrorModelAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendedErrorModelAllOf();

            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('permanent')) {
                obj['permanent'] = ApiClient.convertToType(data['permanent'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExtendedErrorModelAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtendedErrorModelAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExtendedErrorModelAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

ExtendedErrorModelAllOf.RequiredProperties = ["errorCode", "status"];

/**
 * Numeric code used to identify the error. Integer.
 * @member {Number} errorCode
 */
ExtendedErrorModelAllOf.prototype['errorCode'] = undefined;

/**
 * @member {String} status
 */
ExtendedErrorModelAllOf.prototype['status'] = undefined;

/**
 * @member {Boolean} permanent
 */
ExtendedErrorModelAllOf.prototype['permanent'] = undefined;






export default ExtendedErrorModelAllOf;
