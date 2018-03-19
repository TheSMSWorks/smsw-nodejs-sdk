# TheSmsWorksApi.AuthApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**keySecret**](AuthApi.md#keySecret) | **GET** /auth/getApiKey | 
[**login**](AuthApi.md#login) | **POST** /auth/token | 


<a name="keySecret"></a>
# **keySecret**
> ApiKeyResponse keySecret(customerid)



Generates an API Key/Secret pair

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');

var apiInstance = new TheSmsWorksApi.AuthApi();

var customerid = "customerid_example"; // String | The Customer ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.keySecret(customerid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerid** | **String**| The Customer ID | 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="login"></a>
# **login**
> TokenResponse login(credentials)



Generates a Json Web Token

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');

var apiInstance = new TheSmsWorksApi.AuthApi();

var credentials = new TheSmsWorksApi.Login(); // Login | API Key & Secret


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(credentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Login**](Login.md)| API Key &amp; Secret | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

