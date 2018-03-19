# TheSmsWorksApi.BatchMessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelScheduledBatchJob**](BatchMessagesApi.md#cancelScheduledBatchJob) | **DELETE** /batches/schedule/{batchid} | 
[**getBatchById**](BatchMessagesApi.md#getBatchById) | **GET** /batch/{batchid} | 
[**scheduleBatch**](BatchMessagesApi.md#scheduleBatch) | **POST** /batch/schedule | 
[**sendBatch**](BatchMessagesApi.md#sendBatch) | **POST** /batch/send | 


<a name="cancelScheduledBatchJob"></a>
# **cancelScheduledBatchJob**
> CancelledMessageResponse cancelScheduledBatchJob(batchid)



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

var apiInstance = new TheSmsWorksApi.BatchMessagesApi();

var batchid = "batchid_example"; // String | The ID of the batch you would like returned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelScheduledBatchJob(batchid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchid** | **String**| The ID of the batch you would like returned | 

### Return type

[**CancelledMessageResponse**](CancelledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getBatchById"></a>
# **getBatchById**
> MessagesResponse getBatchById(batchid)



Retrieve all messages in a batch with the given batch ID

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.BatchMessagesApi();

var batchid = "batchid_example"; // String | The ID of the batch you would like returned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBatchById(batchid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchid** | **String**| The ID of the batch you would like returned | 

### Return type

[**MessagesResponse**](MessagesResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="scheduleBatch"></a>
# **scheduleBatch**
> ScheduledBatchResponse scheduleBatch(smsMessage)



Schedules a batch of SMS messages to be sent at the date-time you specify

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.BatchMessagesApi();

var smsMessage = new TheSmsWorksApi.BatchMessage(); // BatchMessage | Message properties


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scheduleBatch(smsMessage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsMessage** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**ScheduledBatchResponse**](ScheduledBatchResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="sendBatch"></a>
# **sendBatch**
> BatchMessageResponse sendBatch(smsMessage)



Send a single SMS message to multiple recipients

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');
var defaultClient = TheSmsWorksApi.ApiClient.instance;

// Configure API key authorization: JWT
var JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

var apiInstance = new TheSmsWorksApi.BatchMessagesApi();

var smsMessage = new TheSmsWorksApi.BatchMessage(); // BatchMessage | Message properties


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendBatch(smsMessage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsMessage** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**BatchMessageResponse**](BatchMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

