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


import ApiClient from "../ApiClient";
import CancelledMessageResponse from '../model/CancelledMessageResponse';
import DeletedMessageResponse from '../model/DeletedMessageResponse';
import ErrorModel from '../model/ErrorModel';
import ExtendedErrorModel from '../model/ExtendedErrorModel';
import Message from '../model/Message';
import MessageResponse from '../model/MessageResponse';
import Query from '../model/Query';
import ScheduledMessageResponse from '../model/ScheduledMessageResponse';
import ScheduledMessagesResponse from '../model/ScheduledMessagesResponse';
import SendMessageResponse from '../model/SendMessageResponse';

/**
* Messages service.
* @module api/MessagesApi
* @version 1.8.0
*/
export default class MessagesApi {

    /**
    * Constructs a new MessagesApi. 
    * @alias module:api/MessagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the messageSchedulePost operation.
     * @callback module:api/MessagesApi~messageSchedulePostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScheduledMessageResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Schedules an SMS message to be sent at the date-time you specify
     * @param {module:model/Message} smsMessage Message properties
     * @param {module:api/MessagesApi~messageSchedulePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScheduledMessageResponse>}
     */
    messageSchedulePost(smsMessage, callback) {
      let postBody = smsMessage;
      // verify the required parameter 'smsMessage' is set
      if (smsMessage === undefined || smsMessage === null) {
        throw new Error("Missing the required parameter 'smsMessage' when calling messageSchedulePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = [ScheduledMessageResponse];
      return this.apiClient.callApi(
        '/message/schedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messageSendPost operation.
     * @callback module:api/MessagesApi~messageSendPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send an SMS Message
     * @param {module:model/Message} smsMessage Message properties
     * @param {module:api/MessagesApi~messageSendPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendMessageResponse}
     */
    messageSendPost(smsMessage, callback) {
      let postBody = smsMessage;
      // verify the required parameter 'smsMessage' is set
      if (smsMessage === undefined || smsMessage === null) {
        throw new Error("Missing the required parameter 'smsMessage' when calling messageSendPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = SendMessageResponse;
      return this.apiClient.callApi(
        '/message/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messagesFailedPost operation.
     * @callback module:api/MessagesApi~messagesFailedPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MessageResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get failed messages matching your search criteria
     * @param {module:model/Query} query 
     * @param {module:api/MessagesApi~messagesFailedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MessageResponse>}
     */
    messagesFailedPost(query, callback) {
      let postBody = query;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling messagesFailedPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = [MessageResponse];
      return this.apiClient.callApi(
        '/messages/failed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messagesInboxPost operation.
     * @callback module:api/MessagesApi~messagesInboxPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MessageResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get unread uncoming messages matching your search criteria
     * @param {module:model/Query} query 
     * @param {module:api/MessagesApi~messagesInboxPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MessageResponse>}
     */
    messagesInboxPost(query, callback) {
      let postBody = query;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling messagesInboxPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = [MessageResponse];
      return this.apiClient.callApi(
        '/messages/inbox', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messagesMessageidDelete operation.
     * @callback module:api/MessagesApi~messagesMessageidDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletedMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the message with the mathcing messageid
     * @param {String} messageid The ID of the message you would like returned
     * @param {module:api/MessagesApi~messagesMessageidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeletedMessageResponse}
     */
    messagesMessageidDelete(messageid, callback) {
      let postBody = null;
      // verify the required parameter 'messageid' is set
      if (messageid === undefined || messageid === null) {
        throw new Error("Missing the required parameter 'messageid' when calling messagesMessageidDelete");
      }

      let pathParams = {
        'messageid': messageid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = DeletedMessageResponse;
      return this.apiClient.callApi(
        '/messages/{messageid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messagesMessageidGet operation.
     * @callback module:api/MessagesApi~messagesMessageidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a logged message by the message ID
     * @param {String} messageid The ID of the message you would like returned
     * @param {module:api/MessagesApi~messagesMessageidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageResponse}
     */
    messagesMessageidGet(messageid, callback) {
      let postBody = null;
      // verify the required parameter 'messageid' is set
      if (messageid === undefined || messageid === null) {
        throw new Error("Missing the required parameter 'messageid' when calling messagesMessageidGet");
      }

      let pathParams = {
        'messageid': messageid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = MessageResponse;
      return this.apiClient.callApi(
        '/messages/{messageid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messagesPost operation.
     * @callback module:api/MessagesApi~messagesPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MessageResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve up to 1000 messages matching your search criteria
     * @param {module:model/Query} query 
     * @param {module:api/MessagesApi~messagesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MessageResponse>}
     */
    messagesPost(query, callback) {
      let postBody = query;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling messagesPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = [MessageResponse];
      return this.apiClient.callApi(
        '/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messagesScheduleGet operation.
     * @callback module:api/MessagesApi~messagesScheduleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledMessagesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of messages scheduled from your account, comprising any messages scheduled in the last 3 months and any scheduled to send in the future
     * @param {module:api/MessagesApi~messagesScheduleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduledMessagesResponse}
     */
    messagesScheduleGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ScheduledMessagesResponse;
      return this.apiClient.callApi(
        '/messages/schedule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the messagesScheduleMessageidDelete operation.
     * @callback module:api/MessagesApi~messagesScheduleMessageidDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelledMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels a scheduled SMS message
     * @param {String} messageid The ID of the message you would like returned
     * @param {module:api/MessagesApi~messagesScheduleMessageidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CancelledMessageResponse}
     */
    messagesScheduleMessageidDelete(messageid, callback) {
      let postBody = null;
      // verify the required parameter 'messageid' is set
      if (messageid === undefined || messageid === null) {
        throw new Error("Missing the required parameter 'messageid' when calling messagesScheduleMessageidDelete");
      }

      let pathParams = {
        'messageid': messageid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = CancelledMessageResponse;
      return this.apiClient.callApi(
        '/messages/schedule/{messageid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendFlashMessage operation.
     * @callback module:api/MessagesApi~sendFlashMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends an SMS flash message, which appears on the recipients lock screen
     * @param {module:model/Message} smsMessage Message properties
     * @param {module:api/MessagesApi~sendFlashMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendMessageResponse}
     */
    sendFlashMessage(smsMessage, callback) {
      let postBody = smsMessage;
      // verify the required parameter 'smsMessage' is set
      if (smsMessage === undefined || smsMessage === null) {
        throw new Error("Missing the required parameter 'smsMessage' when calling sendFlashMessage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = SendMessageResponse;
      return this.apiClient.callApi(
        '/message/flash', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
