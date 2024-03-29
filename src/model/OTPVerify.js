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

import ApiClient from '../ApiClient';

/**
 * The OTPVerify model module.
 * @module model/OTPVerify
 * @version 1.9.0
 */
class OTPVerify {
    /**
     * Constructs a new <code>OTPVerify</code>.
     * Schema for the /oyp/verify method
     * @alias module:model/OTPVerify
     */
    constructor() { 
        
        OTPVerify.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OTPVerify</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OTPVerify} obj Optional instance to populate.
     * @return {module:model/OTPVerify} The populated <code>OTPVerify</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OTPVerify();

            if (data.hasOwnProperty('passcode')) {
                obj['passcode'] = ApiClient.convertToType(data['passcode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OTPVerify</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPVerify</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['passcode'] && !(typeof data['passcode'] === 'string' || data['passcode'] instanceof String)) {
            throw new Error("Expected the field `passcode` to be a primitive type in the JSON string but got " + data['passcode']);
        }

        return true;
    }


}



/**
 * One-Time Passcode submitted to your application
 * @member {String} passcode
 */
OTPVerify.prototype['passcode'] = undefined;






export default OTPVerify;

