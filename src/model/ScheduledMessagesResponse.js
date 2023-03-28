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
import ScheduledMessagesResponseMessage from './ScheduledMessagesResponseMessage';

/**
 * The ScheduledMessagesResponse model module.
 * @module model/ScheduledMessagesResponse
 * @version 1.8.0
 */
class ScheduledMessagesResponse {
    /**
     * Constructs a new <code>ScheduledMessagesResponse</code>.
     * details of a message scheduled to be sent at a specified date and time
     * @alias module:model/ScheduledMessagesResponse
     */
    constructor() { 
        
        ScheduledMessagesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScheduledMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledMessagesResponse} obj Optional instance to populate.
     * @return {module:model/ScheduledMessagesResponse} The populated <code>ScheduledMessagesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduledMessagesResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('batch')) {
                obj['batch'] = ApiClient.convertToType(data['batch'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ScheduledMessagesResponseMessage.constructFromObject(data['message']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScheduledMessagesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduledMessagesResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `message`
        if (data['message']) { // data not null
          ScheduledMessagesResponseMessage.validateJSON(data['message']);
        }

        return true;
    }


}



/**
 * The status of the scheduled message (either 'SCHEDULED', 'PROCESSED' or 'CANCELLED')
 * @member {String} status
 */
ScheduledMessagesResponse.prototype['status'] = undefined;

/**
 * The scheduled message ID
 * @member {String} id
 */
ScheduledMessagesResponse.prototype['id'] = undefined;

/**
 * Describes whether the a batch of messages has been scheduled, or just a single message
 * @member {Boolean} batch
 */
ScheduledMessagesResponse.prototype['batch'] = undefined;

/**
 * @member {module:model/ScheduledMessagesResponseMessage} message
 */
ScheduledMessagesResponse.prototype['message'] = undefined;






export default ScheduledMessagesResponse;

