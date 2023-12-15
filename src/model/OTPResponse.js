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
 * The OTPResponse model module.
 * @module model/OTPResponse
 * @version 1.9.0
 */
class OTPResponse {
    /**
     * Constructs a new <code>OTPResponse</code>.
     * Response schema for the /otp/send method
     * @alias module:model/OTPResponse
     */
    constructor() { 
        
        OTPResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OTPResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OTPResponse} obj Optional instance to populate.
     * @return {module:model/OTPResponse} The populated <code>OTPResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OTPResponse();

            if (data.hasOwnProperty('messageid')) {
                obj['messageid'] = ApiClient.convertToType(data['messageid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('credits')) {
                obj['credits'] = ApiClient.convertToType(data['credits'], 'Number');
            }
            if (data.hasOwnProperty('creditsUsed')) {
                obj['creditsUsed'] = ApiClient.convertToType(data['creditsUsed'], 'Number');
            }
            if (data.hasOwnProperty('messageparts')) {
                obj['messageparts'] = ApiClient.convertToType(data['messageparts'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OTPResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTPResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['messageid'] && !(typeof data['messageid'] === 'string' || data['messageid'] instanceof String)) {
            throw new Error("Expected the field `messageid` to be a primitive type in the JSON string but got " + data['messageid']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * The messageid of the SMS used to send the OTP. Save this in your application to use when verifying passcodes.
 * @member {String} messageid
 */
OTPResponse.prototype['messageid'] = undefined;

/**
 * The initial status of the OTP message.
 * @member {String} status
 */
OTPResponse.prototype['status'] = undefined;

/**
 * The credit balance on your account
 * @member {Number} credits
 */
OTPResponse.prototype['credits'] = undefined;

/**
 * The number of credits used to send this message
 * @member {Number} creditsUsed
 */
OTPResponse.prototype['creditsUsed'] = undefined;

/**
 * The number of message parts used to send this message
 * @member {Number} messageparts
 */
OTPResponse.prototype['messageparts'] = undefined;






export default OTPResponse;

