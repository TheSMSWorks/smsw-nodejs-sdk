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


import ApiClient from './ApiClient';
import BatchMessage from './model/BatchMessage';
import BatchMessageResponse from './model/BatchMessageResponse';
import CancelledMessageResponse from './model/CancelledMessageResponse';
import CreditsResponse from './model/CreditsResponse';
import DeletedMessageResponse from './model/DeletedMessageResponse';
import ErrorModel from './model/ErrorModel';
import ExtendedErrorModel from './model/ExtendedErrorModel';
import Message from './model/Message';
import MessageMetadata from './model/MessageMetadata';
import MessageResponse from './model/MessageResponse';
import MessageResponseFailurereason from './model/MessageResponseFailurereason';
import MetaData from './model/MetaData';
import OTP from './model/OTP';
import OTPResponse from './model/OTPResponse';
import OTPVerify from './model/OTPVerify';
import OTPVerifyResponse from './model/OTPVerifyResponse';
import Query from './model/Query';
import QueryMetadata from './model/QueryMetadata';
import ScheduledBatchResponse from './model/ScheduledBatchResponse';
import ScheduledMessage from './model/ScheduledMessage';
import ScheduledMessageResponse from './model/ScheduledMessageResponse';
import ScheduledMessagesResponse from './model/ScheduledMessagesResponse';
import ScheduledMessagesResponseMessage from './model/ScheduledMessagesResponseMessage';
import SendMessageResponse from './model/SendMessageResponse';
import TestResponse from './model/TestResponse';
import BatchMessagesApi from './api/BatchMessagesApi';
import CreditsApi from './api/CreditsApi';
import MessagesApi from './api/MessagesApi';
import OneTimePasswordApi from './api/OneTimePasswordApi';
import UtilsApi from './api/UtilsApi';


/**
* The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed UK messages are refunded..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TheSmsWorksApi = require('index'); // See note below*.
* var xxxSvc = new TheSmsWorksApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TheSmsWorksApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TheSmsWorksApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TheSmsWorksApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.9.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BatchMessage model constructor.
     * @property {module:model/BatchMessage}
     */
    BatchMessage,

    /**
     * The BatchMessageResponse model constructor.
     * @property {module:model/BatchMessageResponse}
     */
    BatchMessageResponse,

    /**
     * The CancelledMessageResponse model constructor.
     * @property {module:model/CancelledMessageResponse}
     */
    CancelledMessageResponse,

    /**
     * The CreditsResponse model constructor.
     * @property {module:model/CreditsResponse}
     */
    CreditsResponse,

    /**
     * The DeletedMessageResponse model constructor.
     * @property {module:model/DeletedMessageResponse}
     */
    DeletedMessageResponse,

    /**
     * The ErrorModel model constructor.
     * @property {module:model/ErrorModel}
     */
    ErrorModel,

    /**
     * The ExtendedErrorModel model constructor.
     * @property {module:model/ExtendedErrorModel}
     */
    ExtendedErrorModel,

    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message,

    /**
     * The MessageMetadata model constructor.
     * @property {module:model/MessageMetadata}
     */
    MessageMetadata,

    /**
     * The MessageResponse model constructor.
     * @property {module:model/MessageResponse}
     */
    MessageResponse,

    /**
     * The MessageResponseFailurereason model constructor.
     * @property {module:model/MessageResponseFailurereason}
     */
    MessageResponseFailurereason,

    /**
     * The MetaData model constructor.
     * @property {module:model/MetaData}
     */
    MetaData,

    /**
     * The OTP model constructor.
     * @property {module:model/OTP}
     */
    OTP,

    /**
     * The OTPResponse model constructor.
     * @property {module:model/OTPResponse}
     */
    OTPResponse,

    /**
     * The OTPVerify model constructor.
     * @property {module:model/OTPVerify}
     */
    OTPVerify,

    /**
     * The OTPVerifyResponse model constructor.
     * @property {module:model/OTPVerifyResponse}
     */
    OTPVerifyResponse,

    /**
     * The Query model constructor.
     * @property {module:model/Query}
     */
    Query,

    /**
     * The QueryMetadata model constructor.
     * @property {module:model/QueryMetadata}
     */
    QueryMetadata,

    /**
     * The ScheduledBatchResponse model constructor.
     * @property {module:model/ScheduledBatchResponse}
     */
    ScheduledBatchResponse,

    /**
     * The ScheduledMessage model constructor.
     * @property {module:model/ScheduledMessage}
     */
    ScheduledMessage,

    /**
     * The ScheduledMessageResponse model constructor.
     * @property {module:model/ScheduledMessageResponse}
     */
    ScheduledMessageResponse,

    /**
     * The ScheduledMessagesResponse model constructor.
     * @property {module:model/ScheduledMessagesResponse}
     */
    ScheduledMessagesResponse,

    /**
     * The ScheduledMessagesResponseMessage model constructor.
     * @property {module:model/ScheduledMessagesResponseMessage}
     */
    ScheduledMessagesResponseMessage,

    /**
     * The SendMessageResponse model constructor.
     * @property {module:model/SendMessageResponse}
     */
    SendMessageResponse,

    /**
     * The TestResponse model constructor.
     * @property {module:model/TestResponse}
     */
    TestResponse,

    /**
    * The BatchMessagesApi service constructor.
    * @property {module:api/BatchMessagesApi}
    */
    BatchMessagesApi,

    /**
    * The CreditsApi service constructor.
    * @property {module:api/CreditsApi}
    */
    CreditsApi,

    /**
    * The MessagesApi service constructor.
    * @property {module:api/MessagesApi}
    */
    MessagesApi,

    /**
    * The OneTimePasswordApi service constructor.
    * @property {module:api/OneTimePasswordApi}
    */
    OneTimePasswordApi,

    /**
    * The UtilsApi service constructor.
    * @property {module:api/UtilsApi}
    */
    UtilsApi
};
