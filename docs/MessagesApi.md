# TheSmsWorksApi.MessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelScheduledJob**](MessagesApi.md#cancelScheduledJob) | **DELETE** /messages/schedule/{messageid} | 
[**deleteMessage**](MessagesApi.md#deleteMessage) | **DELETE** /messages/{messageid} | 
[**getFailedMessages**](MessagesApi.md#getFailedMessages) | **POST** /messages/failed | 
[**getInboxMessages**](MessagesApi.md#getInboxMessages) | **POST** /messages/inbox | 
[**getMessageById**](MessagesApi.md#getMessageById) | **GET** /messages/{messageid} | 
[**getMessages**](MessagesApi.md#getMessages) | **POST** /messages | 
[**getScheduledMessages**](MessagesApi.md#getScheduledMessages) | **GET** /messages/schedule | 
[**messageSendPost**](MessagesApi.md#messageSendPost) | **POST** /message/send | 
[**scheduleMessage**](MessagesApi.md#scheduleMessage) | **POST** /message/schedule | 
[**sendFlashMessage**](MessagesApi.md#sendFlashMessage) | **POST** /message/flash | 

<a name="cancelScheduledJob"></a>
# **cancelScheduledJob**
> CancelledMessageResponse cancelScheduledJob(messageid)



Cancels a scheduled SMS message

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let messageid = "messageid_example"; // String | The ID of the message you would like returned

apiInstance.cancelScheduledJob(messageid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **String**| The ID of the message you would like returned | 

### Return type

[**CancelledMessageResponse**](CancelledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="deleteMessage"></a>
# **deleteMessage**
> DeletedMessageResponse deleteMessage(messageid)



Delete the message with the mathcing messageid

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let messageid = "messageid_example"; // String | The ID of the message you would like returned

apiInstance.deleteMessage(messageid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **String**| The ID of the message you would like returned | 

### Return type

[**DeletedMessageResponse**](DeletedMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getFailedMessages"></a>
# **getFailedMessages**
> [MessageResponse] getFailedMessages(body)



Get failed messages matching your search criteria

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let body = new TheSmsWorksApi.Query(); // Query | 

apiInstance.getFailedMessages(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query**](Query.md)|  | 

### Return type

[**[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getInboxMessages"></a>
# **getInboxMessages**
> [MessageResponse] getInboxMessages(body)



Get unread uncoming messages matching your search criteria

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let body = new TheSmsWorksApi.Query(); // Query | 

apiInstance.getInboxMessages(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query**](Query.md)|  | 

### Return type

[**[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getMessageById"></a>
# **getMessageById**
> MessageResponse getMessageById(messageid)



Retrieve a logged message by the message ID

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let messageid = "messageid_example"; // String | The ID of the message you would like returned

apiInstance.getMessageById(messageid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **String**| The ID of the message you would like returned | 

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getMessages"></a>
# **getMessages**
> [MessageResponse] getMessages(body)



Retrieve up to 1000 messages matching your search criteria

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let body = new TheSmsWorksApi.Query(); // Query | 

apiInstance.getMessages(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Query**](Query.md)|  | 

### Return type

[**[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getScheduledMessages"></a>
# **getScheduledMessages**
> ScheduledMessagesResponse getScheduledMessages()



Returns a list of messages scheduled from your account, comprising any messages scheduled in the last 3 months and any scheduled to send in the future

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
apiInstance.getScheduledMessages((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ScheduledMessagesResponse**](ScheduledMessagesResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="messageSendPost"></a>
# **messageSendPost**
> SendMessageResponse messageSendPost(body)



Send an SMS Message

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let body = new TheSmsWorksApi.Message(); // Message | Message properties

apiInstance.messageSendPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Message**](Message.md)| Message properties | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="scheduleMessage"></a>
# **scheduleMessage**
> [ScheduledMessageResponse] scheduleMessage(body)



Schedules an SMS message to be sent at the date-time you specify

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let body = new TheSmsWorksApi.Message(); // Message | Message properties

apiInstance.scheduleMessage(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Message**](Message.md)| Message properties | 

### Return type

[**[ScheduledMessageResponse]**](ScheduledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="sendFlashMessage"></a>
# **sendFlashMessage**
> SendMessageResponse sendFlashMessage(body)



Sends an SMS flash message, which appears on the recipients lock screen

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let body = new TheSmsWorksApi.Message(); // Message | Message properties

apiInstance.sendFlashMessage(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Message**](Message.md)| Message properties | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

