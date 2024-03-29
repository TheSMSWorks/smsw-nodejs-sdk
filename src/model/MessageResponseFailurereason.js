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
 * The MessageResponseFailurereason model module.
 * @module model/MessageResponseFailurereason
 * @version 1.9.0
 */
class MessageResponseFailurereason {
    /**
     * Constructs a new <code>MessageResponseFailurereason</code>.
     * @alias module:model/MessageResponseFailurereason
     */
    constructor() { 
        
        MessageResponseFailurereason.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageResponseFailurereason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageResponseFailurereason} obj Optional instance to populate.
     * @return {module:model/MessageResponseFailurereason} The populated <code>MessageResponseFailurereason</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageResponseFailurereason();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('permanent')) {
                obj['permanent'] = ApiClient.convertToType(data['permanent'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MessageResponseFailurereason</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageResponseFailurereason</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['details'] && !(typeof data['details'] === 'string' || data['details'] instanceof String)) {
            throw new Error("Expected the field `details` to be a primitive type in the JSON string but got " + data['details']);
        }

        return true;
    }


}



/**
 * Numeric code that defines the error. Integer.
 * @member {Number} code
 */
MessageResponseFailurereason.prototype['code'] = undefined;

/**
 * @member {String} details
 */
MessageResponseFailurereason.prototype['details'] = undefined;

/**
 * @member {Boolean} permanent
 */
MessageResponseFailurereason.prototype['permanent'] = undefined;






export default MessageResponseFailurereason;

