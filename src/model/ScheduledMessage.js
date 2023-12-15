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
 * The ScheduledMessage model module.
 * @module model/ScheduledMessage
 * @version 1.9.0
 */
class ScheduledMessage {
    /**
     * Constructs a new <code>ScheduledMessage</code>.
     * the scheduled message content
     * @alias module:model/ScheduledMessage
     */
    constructor() { 
        
        ScheduledMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScheduledMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledMessage} obj Optional instance to populate.
     * @return {module:model/ScheduledMessage} The populated <code>ScheduledMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduledMessage();

            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
            }
            if (data.hasOwnProperty('destinations')) {
                obj['destinations'] = ApiClient.convertToType(data['destinations'], ['String']);
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScheduledMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduledMessage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
            throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['destination'] && !(typeof data['destination'] === 'string' || data['destination'] instanceof String)) {
            throw new Error("Expected the field `destination` to be a primitive type in the JSON string but got " + data['destination']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['destinations'])) {
            throw new Error("Expected the field `destinations` to be an array in the JSON data but got " + data['destinations']);
        }
        // ensure the json data is a string
        if (data['schedule'] && !(typeof data['schedule'] === 'string' || data['schedule'] instanceof String)) {
            throw new Error("Expected the field `schedule` to be a primitive type in the JSON string but got " + data['schedule']);
        }

        return true;
    }


}



/**
 * The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
 * @member {String} sender
 */
ScheduledMessage.prototype['sender'] = undefined;

/**
 * Message to be sent to the recipient
 * @member {String} content
 */
ScheduledMessage.prototype['content'] = undefined;

/**
 * For single scheduled messages, the mobile number of the recipient
 * @member {String} destination
 */
ScheduledMessage.prototype['destination'] = undefined;

/**
 * For batch messages, the mobile numbers of each of the recipients
 * @member {Array.<String>} destinations
 */
ScheduledMessage.prototype['destinations'] = undefined;

/**
 * Date-time at which to send the batch. This is only used by the batch/schedule service.
 * @member {String} schedule
 */
ScheduledMessage.prototype['schedule'] = undefined;






export default ScheduledMessage;

