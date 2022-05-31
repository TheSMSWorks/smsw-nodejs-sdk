/**
 * The SMS Works API
 * The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.
 *
 * OpenAPI spec version: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The ScheduledMessagesResponse model module.
* @module model/ScheduledMessagesResponse
* @version 1.6.0
*/
export default class ScheduledMessagesResponse {
    /**
    * Constructs a new <code>ScheduledMessagesResponse</code>.
    * details of a message scheduled to be sent at a specified date and time
    * @alias module:model/ScheduledMessagesResponse
    * @class
    */

    constructor() {
        
        
        
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
                obj['message'] = ApiClient.convertToType(data['message'], Object);
            }
        }
        return obj;
    }

    /**
    * The status of the scheduled message (either 'SCHEDULED', 'PROCESSED' or 'CANCELLED')
    * @member {String} status
    */
    status = undefined;
    /**
    * The scheduled message ID
    * @member {String} id
    */
    id = undefined;
    /**
    * Describes whether the a batch of messages has been scheduled, or just a single message
    * @member {Boolean} batch
    */
    batch = undefined;
    /**
    * @member {Object} message
    */
    message = undefined;




}