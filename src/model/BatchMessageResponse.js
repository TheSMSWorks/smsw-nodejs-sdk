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
 * The BatchMessageResponse model module.
 * @module model/BatchMessageResponse
 * @version 1.9.0
 */
class BatchMessageResponse {
    /**
     * Constructs a new <code>BatchMessageResponse</code>.
     * @alias module:model/BatchMessageResponse
     * @param batchid {String} 
     * @param status {String} 
     */
    constructor(batchid, status) { 
        
        BatchMessageResponse.initialize(this, batchid, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, batchid, status) { 
        obj['batchid'] = batchid;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>BatchMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchMessageResponse} obj Optional instance to populate.
     * @return {module:model/BatchMessageResponse} The populated <code>BatchMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchMessageResponse();

            if (data.hasOwnProperty('batchid')) {
                obj['batchid'] = ApiClient.convertToType(data['batchid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchMessageResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchMessageResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchMessageResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['batchid'] && !(typeof data['batchid'] === 'string' || data['batchid'] instanceof String)) {
            throw new Error("Expected the field `batchid` to be a primitive type in the JSON string but got " + data['batchid']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

BatchMessageResponse.RequiredProperties = ["batchid", "status"];

/**
 * @member {String} batchid
 */
BatchMessageResponse.prototype['batchid'] = undefined;

/**
 * @member {String} status
 */
BatchMessageResponse.prototype['status'] = undefined;






export default BatchMessageResponse;

