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
 * The DeletedMessageResponse model module.
 * @module model/DeletedMessageResponse
 * @version 1.8.0
 */
class DeletedMessageResponse {
    /**
     * Constructs a new <code>DeletedMessageResponse</code>.
     * @alias module:model/DeletedMessageResponse
     * @param messageid {String} 
     * @param status {String} 
     */
    constructor(messageid, status) { 
        
        DeletedMessageResponse.initialize(this, messageid, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, messageid, status) { 
        obj['messageid'] = messageid;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>DeletedMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletedMessageResponse} obj Optional instance to populate.
     * @return {module:model/DeletedMessageResponse} The populated <code>DeletedMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletedMessageResponse();

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
     * Validates the JSON data with respect to <code>DeletedMessageResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeletedMessageResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeletedMessageResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

DeletedMessageResponse.RequiredProperties = ["messageid", "status"];

/**
 * @member {String} messageid
 */
DeletedMessageResponse.prototype['messageid'] = undefined;

/**
 * @member {String} status
 */
DeletedMessageResponse.prototype['status'] = undefined;






export default DeletedMessageResponse;

