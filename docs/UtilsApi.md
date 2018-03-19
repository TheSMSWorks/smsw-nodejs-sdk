# TheSmsWorksApi.UtilsApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test**](UtilsApi.md#test) | **GET** /utils/test | 


<a name="test"></a>
# **test**
> TestResponse test()



Returns the customer ID to the caller

### Example
```javascript
var TheSmsWorksApi = require('the_sms_works_api');

var apiInstance = new TheSmsWorksApi.UtilsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.test(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TestResponse**](TestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

