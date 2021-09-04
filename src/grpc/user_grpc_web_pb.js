/**
 * @fileoverview gRPC-Web generated client stub for userservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.userservice = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.userservice.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.userservice.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.CreateUserRequest,
 *   !proto.userservice.CreateUserResponse>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor(
  '/userservice.UserService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.userservice.CreateUserRequest,
  proto.userservice.CreateUserResponse,
  /**
   * @param {!proto.userservice.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.CreateUserRequest,
 *   !proto.userservice.CreateUserResponse>}
 */
const methodInfo_UserService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.CreateUserResponse,
  /**
   * @param {!proto.userservice.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.userservice.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.ReadUserRequest,
 *   !proto.userservice.ReadUserResponse>}
 */
const methodDescriptor_UserService_ReadUser = new grpc.web.MethodDescriptor(
  '/userservice.UserService/ReadUser',
  grpc.web.MethodType.UNARY,
  proto.userservice.ReadUserRequest,
  proto.userservice.ReadUserResponse,
  /**
   * @param {!proto.userservice.ReadUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.ReadUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.ReadUserRequest,
 *   !proto.userservice.ReadUserResponse>}
 */
const methodInfo_UserService_ReadUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.ReadUserResponse,
  /**
   * @param {!proto.userservice.ReadUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.ReadUserResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.ReadUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.ReadUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.ReadUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.readUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/ReadUser',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadUser,
      callback);
};


/**
 * @param {!proto.userservice.ReadUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.ReadUserResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.readUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/ReadUser',
      request,
      metadata || {},
      methodDescriptor_UserService_ReadUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.UpdateUserRequest,
 *   !proto.userservice.UpdateUserResponse>}
 */
const methodDescriptor_UserService_UpdateUser = new grpc.web.MethodDescriptor(
  '/userservice.UserService/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.userservice.UpdateUserRequest,
  proto.userservice.UpdateUserResponse,
  /**
   * @param {!proto.userservice.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.UpdateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.UpdateUserRequest,
 *   !proto.userservice.UpdateUserResponse>}
 */
const methodInfo_UserService_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.UpdateUserResponse,
  /**
   * @param {!proto.userservice.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.UpdateUserResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser,
      callback);
};


/**
 * @param {!proto.userservice.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.UpdateUserResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.DeleteUserRequest,
 *   !proto.userservice.DeleteUserResponse>}
 */
const methodDescriptor_UserService_DeleteUser = new grpc.web.MethodDescriptor(
  '/userservice.UserService/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.userservice.DeleteUserRequest,
  proto.userservice.DeleteUserResponse,
  /**
   * @param {!proto.userservice.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.DeleteUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.DeleteUserRequest,
 *   !proto.userservice.DeleteUserResponse>}
 */
const methodInfo_UserService_DeleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.DeleteUserResponse,
  /**
   * @param {!proto.userservice.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.DeleteUserResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUser,
      callback);
};


/**
 * @param {!proto.userservice.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.DeleteUserResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.ListUserRequest,
 *   !proto.userservice.ListUserResponse>}
 */
const methodDescriptor_UserService_ListUser = new grpc.web.MethodDescriptor(
  '/userservice.UserService/ListUser',
  grpc.web.MethodType.UNARY,
  proto.userservice.ListUserRequest,
  proto.userservice.ListUserResponse,
  /**
   * @param {!proto.userservice.ListUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.ListUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.ListUserRequest,
 *   !proto.userservice.ListUserResponse>}
 */
const methodInfo_UserService_ListUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.ListUserResponse,
  /**
   * @param {!proto.userservice.ListUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.ListUserResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.ListUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.ListUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.ListUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.listUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/ListUser',
      request,
      metadata || {},
      methodDescriptor_UserService_ListUser,
      callback);
};


/**
 * @param {!proto.userservice.ListUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.ListUserResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.listUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/ListUser',
      request,
      metadata || {},
      methodDescriptor_UserService_ListUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.LoginRequest,
 *   !proto.userservice.LoginResponse>}
 */
const methodDescriptor_UserService_Login = new grpc.web.MethodDescriptor(
  '/userservice.UserService/Login',
  grpc.web.MethodType.UNARY,
  proto.userservice.LoginRequest,
  proto.userservice.LoginResponse,
  /**
   * @param {!proto.userservice.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.LoginRequest,
 *   !proto.userservice.LoginResponse>}
 */
const methodInfo_UserService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.LoginResponse,
  /**
   * @param {!proto.userservice.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login,
      callback);
};


/**
 * @param {!proto.userservice.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.GuestLoginRequest,
 *   !proto.userservice.LoginResponse>}
 */
const methodDescriptor_UserService_GuestLogin = new grpc.web.MethodDescriptor(
  '/userservice.UserService/GuestLogin',
  grpc.web.MethodType.UNARY,
  proto.userservice.GuestLoginRequest,
  proto.userservice.LoginResponse,
  /**
   * @param {!proto.userservice.GuestLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.GuestLoginRequest,
 *   !proto.userservice.LoginResponse>}
 */
const methodInfo_UserService_GuestLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.LoginResponse,
  /**
   * @param {!proto.userservice.GuestLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.GuestLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.guestLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/GuestLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_GuestLogin,
      callback);
};


/**
 * @param {!proto.userservice.GuestLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.guestLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/GuestLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_GuestLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.SuperUserLoginRequest,
 *   !proto.userservice.LoginResponse>}
 */
const methodDescriptor_UserService_SuperUserLogin = new grpc.web.MethodDescriptor(
  '/userservice.UserService/SuperUserLogin',
  grpc.web.MethodType.UNARY,
  proto.userservice.SuperUserLoginRequest,
  proto.userservice.LoginResponse,
  /**
   * @param {!proto.userservice.SuperUserLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.SuperUserLoginRequest,
 *   !proto.userservice.LoginResponse>}
 */
const methodInfo_UserService_SuperUserLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.LoginResponse,
  /**
   * @param {!proto.userservice.SuperUserLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.SuperUserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.superUserLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/SuperUserLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SuperUserLogin,
      callback);
};


/**
 * @param {!proto.userservice.SuperUserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.superUserLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/SuperUserLogin',
      request,
      metadata || {},
      methodDescriptor_UserService_SuperUserLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userservice.TokenAuthRequest,
 *   !proto.userservice.TokenAuthResponse>}
 */
const methodDescriptor_UserService_TokenAuth = new grpc.web.MethodDescriptor(
  '/userservice.UserService/TokenAuth',
  grpc.web.MethodType.UNARY,
  proto.userservice.TokenAuthRequest,
  proto.userservice.TokenAuthResponse,
  /**
   * @param {!proto.userservice.TokenAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.TokenAuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userservice.TokenAuthRequest,
 *   !proto.userservice.TokenAuthResponse>}
 */
const methodInfo_UserService_TokenAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userservice.TokenAuthResponse,
  /**
   * @param {!proto.userservice.TokenAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.userservice.TokenAuthResponse.deserializeBinary
);


/**
 * @param {!proto.userservice.TokenAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userservice.TokenAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userservice.TokenAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userservice.UserServiceClient.prototype.tokenAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userservice.UserService/TokenAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TokenAuth,
      callback);
};


/**
 * @param {!proto.userservice.TokenAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userservice.TokenAuthResponse>}
 *     Promise that resolves to the response
 */
proto.userservice.UserServicePromiseClient.prototype.tokenAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userservice.UserService/TokenAuth',
      request,
      metadata || {},
      methodDescriptor_UserService_TokenAuth);
};


module.exports = proto.userservice;

