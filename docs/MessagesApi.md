# TheSmsWorksApi.MessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelScheduledJob**](MessagesApi.md#cancelScheduledJob) | **DELETE** /messages/schedule/{messageid} | 
[**getInboxMessages**](MessagesApi.md#getInboxMessages) | **POST** /messages/inbox | 
[**getMessageById**](MessagesApi.md#getMessageById) | **GET** /messages/{messageid} | 
[**getMessages**](MessagesApi.md#getMessages) | **POST** /messages | 
[**scheduleMessage**](MessagesApi.md#scheduleMessage) | **POST** /message/schedule | 
[**sendMessage**](MessagesApi.md#sendMessage) | **POST** /message/send | 


<a name="cancelScheduledJob"></a>
# **cancelScheduledJob**
> CancelledMessageResponse cancelScheduledJob(messageid)



Cancels a scheduled SMS message

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.MessagesApi();

var messageid = "messageid_example"; // String | The ID of the message you would like returned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelScheduledJob(messageid, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getInboxMessages"></a>
# **getInboxMessages**
> MessagesResponse getInboxMessages(query)



Get unread uncoming messages matching your search criteria

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.MessagesApi();

var query = new TheSmsWorksApi.Query(); // Query | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInboxMessages(query, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**MessagesResponse**](MessagesResponse.md)

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
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.MessagesApi();

var messageid = "messageid_example"; // String | The ID of the message you would like returned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMessageById(messageid, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getMessages"></a>
# **getMessages**
> MessagesResponse getMessages(query)



Get messages matching your search criteria

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.MessagesApi();

var query = new TheSmsWorksApi.Query(); // Query | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMessages(query, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**MessagesResponse**](MessagesResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="scheduleMessage"></a>
# **scheduleMessage**
> ScheduledMessageResponse scheduleMessage(smsMessage)



Schedules an SMS message to be sent at the date-time you specify

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.MessagesApi();

var smsMessage = new TheSmsWorksApi.Message(); // Message | Message properties


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scheduleMessage(smsMessage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsMessage** | [**Message**](Message.md)| Message properties | 

### Return type

[**ScheduledMessageResponse**](ScheduledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="sendMessage"></a>
# **sendMessage**
> SendMessageResponse sendMessage(smsMessage)



Sends an SMS message

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.MessagesApi();

var smsMessage = new TheSmsWorksApi.Message(); // Message | Message properties


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendMessage(smsMessage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsMessage** | [**Message**](Message.md)| Message properties | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

