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
 * The OTP model module.
 * @module model/OTP
 * @version 1.9.0
 */
class OTP {
    /**
     * Constructs a new <code>OTP</code>.
     * Parameters for the generation and sending of One-Time Passwords
     * @alias module:model/OTP
     */
    constructor() { 
        
        OTP.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OTP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OTP} obj Optional instance to populate.
     * @return {module:model/OTP} The populated <code>OTP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OTP();

            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], Object);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
            if (data.hasOwnProperty('validity')) {
                obj['validity'] = ApiClient.convertToType(data['validity'], 'Number');
            }
            if (data.hasOwnProperty('passcode')) {
                obj['passcode'] = ApiClient.convertToType(data['passcode'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OTP</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OTP</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
            throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
        }
        // ensure the json data is a string
        if (data['destination'] && !(typeof data['destination'] === 'string' || data['destination'] instanceof String)) {
            throw new Error("Expected the field `destination` to be a primitive type in the JSON string but got " + data['destination']);
        }
        // ensure the json data is a string
        if (data['template'] && !(typeof data['template'] === 'string' || data['template'] instanceof String)) {
            throw new Error("Expected the field `template` to be a primitive type in the JSON string but got " + data['template']);
        }
        // ensure the json data is a string
        if (data['passcode'] && !(typeof data['passcode'] === 'string' || data['passcode'] instanceof String)) {
            throw new Error("Expected the field `passcode` to be a primitive type in the JSON string but got " + data['passcode']);
        }

        return true;
    }


}



/**
 * The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
 * @member {String} sender
 */
OTP.prototype['sender'] = undefined;

/**
 * The phone number of the recipient.
 * @member {String} destination
 */
OTP.prototype['destination'] = undefined;

/**
 * The length of the generated passcode. The default length is 6 characters, which will apply if this parameter is omitted. All generated passcodes are numeric. Optional.
 * @member {Object} length
 */
OTP.prototype['length'] = undefined;

/**
 * A template to use as the content for the message. You must include the '{{passcode}}' placeholder, which will be replaced by the generated passcode when the message is sent. Optional.
 * @member {String} template
 */
OTP.prototype['template'] = undefined;

/**
 * The length of time in seconds for which the generated passcode should be valid. Optional.
 * @member {Number} validity
 */
OTP.prototype['validity'] = undefined;

/**
 * A passcode you supply for use in the message template. This will be stored on the OTP record in our system for later verification. Optional.
 * @member {String} passcode
 */
OTP.prototype['passcode'] = undefined;

/**
 * A JSON object of no longer than 1024 bytes, containing as many parameters as you wish, to store data for use in your application. This will be returned when you verify the passcode.
 * @member {Object} metadata
 */
OTP.prototype['metadata'] = undefined;






export default OTP;
