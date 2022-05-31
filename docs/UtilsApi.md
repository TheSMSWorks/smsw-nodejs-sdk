# TheSmsWorksApi.UtilsApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getError**](UtilsApi.md#getError) | **GET** /utils/errors/{errorcode} | 
[**test**](UtilsApi.md#test) | **GET** /utils/test | 

<a name="getError"></a>
# **getError**
> ExtendedErrorModel getError(errorcode)



Returns a sample error object for the given error code. Useful for designing code to react to errors when they occur for real.

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';

let apiInstance = new TheSmsWorksApi.UtilsApi();
let errorcode = "errorcode_example"; // String | The code of the error you would like returned

apiInstance.getError(errorcode, (error, data, response) => {
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
 **errorcode** | **String**| The code of the error you would like returned | 

### Return type

[**ExtendedErrorModel**](ExtendedErrorModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="test"></a>
# **test**
> TestResponse test()



Returns the customer ID to the caller

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';

let apiInstance = new TheSmsWorksApi.UtilsApi();
apiInstance.test((error, data, response) => {
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

[**TestResponse**](TestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

