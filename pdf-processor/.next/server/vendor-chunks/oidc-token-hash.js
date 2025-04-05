"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/oidc-token-hash";
exports.ids = ["vendor-chunks/oidc-token-hash"];
exports.modules = {

/***/ "(rsc)/./node_modules/oidc-token-hash/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/oidc-token-hash/lib/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { strict: assert } = __webpack_require__(/*! assert */ \"assert\");\nconst { createHash } = __webpack_require__(/*! crypto */ \"crypto\");\nconst { format } = __webpack_require__(/*! util */ \"util\");\nconst shake256 = __webpack_require__(/*! ./shake256 */ \"(rsc)/./node_modules/oidc-token-hash/lib/shake256.js\");\nlet encode;\nif (Buffer.isEncoding(\"base64url\")) {\n    encode = (input)=>input.toString(\"base64url\");\n} else {\n    const fromBase64 = (base64)=>base64.replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n    encode = (input)=>fromBase64(input.toString(\"base64\"));\n}\n/** SPECIFICATION\n * Its (_hash) value is the base64url encoding of the left-most half of the hash of the octets of\n * the ASCII representation of the token value, where the hash algorithm used is the hash algorithm\n * used in the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is\n * RS256, hash the token value with SHA-256, then take the left-most 128 bits and base64url encode\n * them. The _hash value is a case sensitive string.\n */ /**\n * @name getHash\n * @api private\n *\n * returns the sha length based off the JOSE alg heade value, defaults to sha256\n *\n * @param token {String} token value to generate the hash from\n * @param alg {String} ID Token JOSE header alg value (i.e. RS256, HS384, ES512, PS256)\n * @param [crv] {String} For EdDSA the curve decides what hash algorithm is used. Required for EdDSA\n */ function getHash(alg, crv) {\n    switch(alg){\n        case \"HS256\":\n        case \"RS256\":\n        case \"PS256\":\n        case \"ES256\":\n        case \"ES256K\":\n            return createHash(\"sha256\");\n        case \"HS384\":\n        case \"RS384\":\n        case \"PS384\":\n        case \"ES384\":\n            return createHash(\"sha384\");\n        case \"HS512\":\n        case \"RS512\":\n        case \"PS512\":\n        case \"ES512\":\n        case \"Ed25519\":\n            return createHash(\"sha512\");\n        case \"Ed448\":\n            if (!shake256) {\n                throw new TypeError(\"Ed448 *_hash calculation is not supported in your Node.js runtime version\");\n            }\n            return createHash(\"shake256\", {\n                outputLength: 114\n            });\n        case \"EdDSA\":\n            switch(crv){\n                case \"Ed25519\":\n                    return createHash(\"sha512\");\n                case \"Ed448\":\n                    if (!shake256) {\n                        throw new TypeError(\"Ed448 *_hash calculation is not supported in your Node.js runtime version\");\n                    }\n                    return createHash(\"shake256\", {\n                        outputLength: 114\n                    });\n                default:\n                    throw new TypeError(\"unrecognized or invalid EdDSA curve provided\");\n            }\n        default:\n            throw new TypeError(\"unrecognized or invalid JWS algorithm provided\");\n    }\n}\nfunction generate(token, alg, crv) {\n    const digest = getHash(alg, crv).update(token).digest();\n    return encode(digest.slice(0, digest.length / 2));\n}\nfunction validate(names, actual, source, alg, crv) {\n    if (typeof names.claim !== \"string\" || !names.claim) {\n        throw new TypeError(\"names.claim must be a non-empty string\");\n    }\n    if (typeof names.source !== \"string\" || !names.source) {\n        throw new TypeError(\"names.source must be a non-empty string\");\n    }\n    assert(typeof actual === \"string\" && actual, `${names.claim} must be a non-empty string`);\n    assert(typeof source === \"string\" && source, `${names.source} must be a non-empty string`);\n    let expected;\n    let msg;\n    try {\n        expected = generate(source, alg, crv);\n    } catch (err) {\n        msg = format(\"%s could not be validated (%s)\", names.claim, err.message);\n    }\n    msg = msg || format(\"%s mismatch, expected %s, got: %s\", names.claim, expected, actual);\n    assert.equal(expected, actual, msg);\n}\nmodule.exports = {\n    validate,\n    generate\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvb2lkYy10b2tlbi1oYXNoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxRQUFRQyxNQUFNLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFDbkMsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0QsbUJBQU9BLENBQUM7QUFDL0IsTUFBTSxFQUFFRSxNQUFNLEVBQUUsR0FBR0YsbUJBQU9BLENBQUM7QUFFM0IsTUFBTUcsV0FBV0gsbUJBQU9BLENBQUM7QUFFekIsSUFBSUk7QUFDSixJQUFJQyxPQUFPQyxVQUFVLENBQUMsY0FBYztJQUNsQ0YsU0FBUyxDQUFDRyxRQUFVQSxNQUFNQyxRQUFRLENBQUM7QUFDckMsT0FBTztJQUNMLE1BQU1DLGFBQWEsQ0FBQ0MsU0FBV0EsT0FBT0MsT0FBTyxDQUFDLE1BQU0sSUFBSUEsT0FBTyxDQUFDLE9BQU8sS0FBS0EsT0FBTyxDQUFDLE9BQU87SUFDM0ZQLFNBQVMsQ0FBQ0csUUFBVUUsV0FBV0YsTUFBTUMsUUFBUSxDQUFDO0FBQ2hEO0FBRUE7Ozs7OztDQU1DLEdBRUQ7Ozs7Ozs7OztDQVNDLEdBQ0QsU0FBU0ksUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3ZCLE9BQVFEO1FBQ04sS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7WUFDSCxPQUFPWixXQUFXO1FBRXBCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7WUFDSCxPQUFPQSxXQUFXO1FBRXBCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1lBQ0gsT0FBT0EsV0FBVztRQUVwQixLQUFLO1lBQ0gsSUFBSSxDQUFDRSxVQUFVO2dCQUNiLE1BQU0sSUFBSVksVUFBVTtZQUN0QjtZQUVBLE9BQU9kLFdBQVcsWUFBWTtnQkFBRWUsY0FBYztZQUFJO1FBRXBELEtBQUs7WUFDSCxPQUFRRjtnQkFDTixLQUFLO29CQUNILE9BQU9iLFdBQVc7Z0JBQ3BCLEtBQUs7b0JBQ0gsSUFBSSxDQUFDRSxVQUFVO3dCQUNiLE1BQU0sSUFBSVksVUFBVTtvQkFDdEI7b0JBRUEsT0FBT2QsV0FBVyxZQUFZO3dCQUFFZSxjQUFjO29CQUFJO2dCQUNwRDtvQkFDRSxNQUFNLElBQUlELFVBQVU7WUFDeEI7UUFFRjtZQUNFLE1BQU0sSUFBSUEsVUFBVTtJQUN4QjtBQUNGO0FBRUEsU0FBU0UsU0FBU0MsS0FBSyxFQUFFTCxHQUFHLEVBQUVDLEdBQUc7SUFDL0IsTUFBTUssU0FBU1AsUUFBUUMsS0FBS0MsS0FBS00sTUFBTSxDQUFDRixPQUFPQyxNQUFNO0lBQ3JELE9BQU9mLE9BQU9lLE9BQU9FLEtBQUssQ0FBQyxHQUFHRixPQUFPRyxNQUFNLEdBQUc7QUFDaEQ7QUFFQSxTQUFTQyxTQUFTQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFYixHQUFHLEVBQUVDLEdBQUc7SUFDL0MsSUFBSSxPQUFPVSxNQUFNRyxLQUFLLEtBQUssWUFBWSxDQUFDSCxNQUFNRyxLQUFLLEVBQUU7UUFDbkQsTUFBTSxJQUFJWixVQUFVO0lBQ3RCO0lBRUEsSUFBSSxPQUFPUyxNQUFNRSxNQUFNLEtBQUssWUFBWSxDQUFDRixNQUFNRSxNQUFNLEVBQUU7UUFDckQsTUFBTSxJQUFJWCxVQUFVO0lBQ3RCO0lBRUFoQixPQUFPLE9BQU8wQixXQUFXLFlBQVlBLFFBQVEsQ0FBQyxFQUFFRCxNQUFNRyxLQUFLLENBQUMsMkJBQTJCLENBQUM7SUFDeEY1QixPQUFPLE9BQU8yQixXQUFXLFlBQVlBLFFBQVEsQ0FBQyxFQUFFRixNQUFNRSxNQUFNLENBQUMsMkJBQTJCLENBQUM7SUFFekYsSUFBSUU7SUFDSixJQUFJQztJQUNKLElBQUk7UUFDRkQsV0FBV1gsU0FBU1MsUUFBUWIsS0FBS0M7SUFDbkMsRUFBRSxPQUFPZ0IsS0FBSztRQUNaRCxNQUFNM0IsT0FBTyxrQ0FBa0NzQixNQUFNRyxLQUFLLEVBQUVHLElBQUlDLE9BQU87SUFDekU7SUFFQUYsTUFBTUEsT0FBTzNCLE9BQU8scUNBQXFDc0IsTUFBTUcsS0FBSyxFQUFFQyxVQUFVSDtJQUVoRjFCLE9BQU9pQyxLQUFLLENBQUNKLFVBQVVILFFBQVFJO0FBQ2pDO0FBRUFJLE9BQU9DLE9BQU8sR0FBRztJQUNmWDtJQUNBTjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGRmLXByb2Nlc3Nvci8uL25vZGVfbW9kdWxlcy9vaWRjLXRva2VuLWhhc2gvbGliL2luZGV4LmpzP2M4MjMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBzdHJpY3Q6IGFzc2VydCB9ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5jb25zdCB7IGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgeyBmb3JtYXQgfSA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuY29uc3Qgc2hha2UyNTYgPSByZXF1aXJlKCcuL3NoYWtlMjU2Jyk7XG5cbmxldCBlbmNvZGU7XG5pZiAoQnVmZmVyLmlzRW5jb2RpbmcoJ2Jhc2U2NHVybCcpKSB7XG4gIGVuY29kZSA9IChpbnB1dCkgPT4gaW5wdXQudG9TdHJpbmcoJ2Jhc2U2NHVybCcpO1xufSBlbHNlIHtcbiAgY29uc3QgZnJvbUJhc2U2NCA9IChiYXNlNjQpID0+IGJhc2U2NC5yZXBsYWNlKC89L2csICcnKS5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbiAgZW5jb2RlID0gKGlucHV0KSA9PiBmcm9tQmFzZTY0KGlucHV0LnRvU3RyaW5nKCdiYXNlNjQnKSk7XG59XG5cbi8qKiBTUEVDSUZJQ0FUSU9OXG4gKiBJdHMgKF9oYXNoKSB2YWx1ZSBpcyB0aGUgYmFzZTY0dXJsIGVuY29kaW5nIG9mIHRoZSBsZWZ0LW1vc3QgaGFsZiBvZiB0aGUgaGFzaCBvZiB0aGUgb2N0ZXRzIG9mXG4gKiB0aGUgQVNDSUkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuIHZhbHVlLCB3aGVyZSB0aGUgaGFzaCBhbGdvcml0aG0gdXNlZCBpcyB0aGUgaGFzaCBhbGdvcml0aG1cbiAqIHVzZWQgaW4gdGhlIGFsZyBIZWFkZXIgUGFyYW1ldGVyIG9mIHRoZSBJRCBUb2tlbidzIEpPU0UgSGVhZGVyLiBGb3IgaW5zdGFuY2UsIGlmIHRoZSBhbGcgaXNcbiAqIFJTMjU2LCBoYXNoIHRoZSB0b2tlbiB2YWx1ZSB3aXRoIFNIQS0yNTYsIHRoZW4gdGFrZSB0aGUgbGVmdC1tb3N0IDEyOCBiaXRzIGFuZCBiYXNlNjR1cmwgZW5jb2RlXG4gKiB0aGVtLiBUaGUgX2hhc2ggdmFsdWUgaXMgYSBjYXNlIHNlbnNpdGl2ZSBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRIYXNoXG4gKiBAYXBpIHByaXZhdGVcbiAqXG4gKiByZXR1cm5zIHRoZSBzaGEgbGVuZ3RoIGJhc2VkIG9mZiB0aGUgSk9TRSBhbGcgaGVhZGUgdmFsdWUsIGRlZmF1bHRzIHRvIHNoYTI1NlxuICpcbiAqIEBwYXJhbSB0b2tlbiB7U3RyaW5nfSB0b2tlbiB2YWx1ZSB0byBnZW5lcmF0ZSB0aGUgaGFzaCBmcm9tXG4gKiBAcGFyYW0gYWxnIHtTdHJpbmd9IElEIFRva2VuIEpPU0UgaGVhZGVyIGFsZyB2YWx1ZSAoaS5lLiBSUzI1NiwgSFMzODQsIEVTNTEyLCBQUzI1NilcbiAqIEBwYXJhbSBbY3J2XSB7U3RyaW5nfSBGb3IgRWREU0EgdGhlIGN1cnZlIGRlY2lkZXMgd2hhdCBoYXNoIGFsZ29yaXRobSBpcyB1c2VkLiBSZXF1aXJlZCBmb3IgRWREU0FcbiAqL1xuZnVuY3Rpb24gZ2V0SGFzaChhbGcsIGNydikge1xuICBzd2l0Y2ggKGFsZykge1xuICAgIGNhc2UgJ0hTMjU2JzpcbiAgICBjYXNlICdSUzI1Nic6XG4gICAgY2FzZSAnUFMyNTYnOlxuICAgIGNhc2UgJ0VTMjU2JzpcbiAgICBjYXNlICdFUzI1NksnOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTI1NicpO1xuXG4gICAgY2FzZSAnSFMzODQnOlxuICAgIGNhc2UgJ1JTMzg0JzpcbiAgICBjYXNlICdQUzM4NCc6XG4gICAgY2FzZSAnRVMzODQnOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTM4NCcpO1xuXG4gICAgY2FzZSAnSFM1MTInOlxuICAgIGNhc2UgJ1JTNTEyJzpcbiAgICBjYXNlICdQUzUxMic6XG4gICAgY2FzZSAnRVM1MTInOlxuICAgIGNhc2UgJ0VkMjU1MTknOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTUxMicpO1xuXG4gICAgY2FzZSAnRWQ0NDgnOlxuICAgICAgaWYgKCFzaGFrZTI1Nikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFZDQ0OCAqX2hhc2ggY2FsY3VsYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIE5vZGUuanMgcnVudGltZSB2ZXJzaW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjcmVhdGVIYXNoKCdzaGFrZTI1NicsIHsgb3V0cHV0TGVuZ3RoOiAxMTQgfSk7XG5cbiAgICBjYXNlICdFZERTQSc6XG4gICAgICBzd2l0Y2ggKGNydikge1xuICAgICAgICBjYXNlICdFZDI1NTE5JzpcbiAgICAgICAgICByZXR1cm4gY3JlYXRlSGFzaCgnc2hhNTEyJyk7XG4gICAgICAgIGNhc2UgJ0VkNDQ4JzpcbiAgICAgICAgICBpZiAoIXNoYWtlMjU2KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFZDQ0OCAqX2hhc2ggY2FsY3VsYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIE5vZGUuanMgcnVudGltZSB2ZXJzaW9uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYWtlMjU2JywgeyBvdXRwdXRMZW5ndGg6IDExNCB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnJlY29nbml6ZWQgb3IgaW52YWxpZCBFZERTQSBjdXJ2ZSBwcm92aWRlZCcpO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VucmVjb2duaXplZCBvciBpbnZhbGlkIEpXUyBhbGdvcml0aG0gcHJvdmlkZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZSh0b2tlbiwgYWxnLCBjcnYpIHtcbiAgY29uc3QgZGlnZXN0ID0gZ2V0SGFzaChhbGcsIGNydikudXBkYXRlKHRva2VuKS5kaWdlc3QoKTtcbiAgcmV0dXJuIGVuY29kZShkaWdlc3Quc2xpY2UoMCwgZGlnZXN0Lmxlbmd0aCAvIDIpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGUobmFtZXMsIGFjdHVhbCwgc291cmNlLCBhbGcsIGNydikge1xuICBpZiAodHlwZW9mIG5hbWVzLmNsYWltICE9PSAnc3RyaW5nJyB8fCAhbmFtZXMuY2xhaW0pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduYW1lcy5jbGFpbSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBuYW1lcy5zb3VyY2UgIT09ICdzdHJpbmcnIHx8ICFuYW1lcy5zb3VyY2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduYW1lcy5zb3VyY2UgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgYWN0dWFsID09PSAnc3RyaW5nJyAmJiBhY3R1YWwsIGAke25hbWVzLmNsYWltfSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ2ApO1xuICBhc3NlcnQodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgJiYgc291cmNlLCBgJHtuYW1lcy5zb3VyY2V9IG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nYCk7XG5cbiAgbGV0IGV4cGVjdGVkO1xuICBsZXQgbXNnO1xuICB0cnkge1xuICAgIGV4cGVjdGVkID0gZ2VuZXJhdGUoc291cmNlLCBhbGcsIGNydik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG1zZyA9IGZvcm1hdCgnJXMgY291bGQgbm90IGJlIHZhbGlkYXRlZCAoJXMpJywgbmFtZXMuY2xhaW0sIGVyci5tZXNzYWdlKTtcbiAgfVxuXG4gIG1zZyA9IG1zZyB8fCBmb3JtYXQoJyVzIG1pc21hdGNoLCBleHBlY3RlZCAlcywgZ290OiAlcycsIG5hbWVzLmNsYWltLCBleHBlY3RlZCwgYWN0dWFsKTtcblxuICBhc3NlcnQuZXF1YWwoZXhwZWN0ZWQsIGFjdHVhbCwgbXNnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbGlkYXRlLFxuICBnZW5lcmF0ZSxcbn07XG4iXSwibmFtZXMiOlsic3RyaWN0IiwiYXNzZXJ0IiwicmVxdWlyZSIsImNyZWF0ZUhhc2giLCJmb3JtYXQiLCJzaGFrZTI1NiIsImVuY29kZSIsIkJ1ZmZlciIsImlzRW5jb2RpbmciLCJpbnB1dCIsInRvU3RyaW5nIiwiZnJvbUJhc2U2NCIsImJhc2U2NCIsInJlcGxhY2UiLCJnZXRIYXNoIiwiYWxnIiwiY3J2IiwiVHlwZUVycm9yIiwib3V0cHV0TGVuZ3RoIiwiZ2VuZXJhdGUiLCJ0b2tlbiIsImRpZ2VzdCIsInVwZGF0ZSIsInNsaWNlIiwibGVuZ3RoIiwidmFsaWRhdGUiLCJuYW1lcyIsImFjdHVhbCIsInNvdXJjZSIsImNsYWltIiwiZXhwZWN0ZWQiLCJtc2ciLCJlcnIiLCJtZXNzYWdlIiwiZXF1YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/oidc-token-hash/lib/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/oidc-token-hash/lib/shake256.js":
/*!******************************************************!*\
  !*** ./node_modules/oidc-token-hash/lib/shake256.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\nconst [major, minor] = process.version.substring(1).split(\".\").map((x)=>parseInt(x, 10));\nconst xofOutputLength = major > 12 || major === 12 && minor >= 8;\nconst shake256 = xofOutputLength && crypto.getHashes().includes(\"shake256\");\nmodule.exports = shake256;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvb2lkYy10b2tlbi1oYXNoL2xpYi9zaGFrZTI1Ni5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsU0FBU0MsbUJBQU9BLENBQUM7QUFFdkIsTUFBTSxDQUFDQyxPQUFPQyxNQUFNLEdBQUdDLFFBQVFDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUdDLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsSUFBTUMsU0FBU0QsR0FBRztBQUN0RixNQUFNRSxrQkFBa0JULFFBQVEsTUFBT0EsVUFBVSxNQUFNQyxTQUFTO0FBQ2hFLE1BQU1TLFdBQVdELG1CQUFtQlgsT0FBT2EsU0FBUyxHQUFHQyxRQUFRLENBQUM7QUFFaEVDLE9BQU9DLE9BQU8sR0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGYtcHJvY2Vzc29yLy4vbm9kZV9tb2R1bGVzL29pZGMtdG9rZW4taGFzaC9saWIvc2hha2UyNTYuanM/ODI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuY29uc3QgW21ham9yLCBtaW5vcl0gPSBwcm9jZXNzLnZlcnNpb24uc3Vic3RyaW5nKDEpLnNwbGl0KCcuJykubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkpO1xuY29uc3QgeG9mT3V0cHV0TGVuZ3RoID0gbWFqb3IgPiAxMiB8fCAobWFqb3IgPT09IDEyICYmIG1pbm9yID49IDgpO1xuY29uc3Qgc2hha2UyNTYgPSB4b2ZPdXRwdXRMZW5ndGggJiYgY3J5cHRvLmdldEhhc2hlcygpLmluY2x1ZGVzKCdzaGFrZTI1NicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWtlMjU2O1xuIl0sIm5hbWVzIjpbImNyeXB0byIsInJlcXVpcmUiLCJtYWpvciIsIm1pbm9yIiwicHJvY2VzcyIsInZlcnNpb24iLCJzdWJzdHJpbmciLCJzcGxpdCIsIm1hcCIsIngiLCJwYXJzZUludCIsInhvZk91dHB1dExlbmd0aCIsInNoYWtlMjU2IiwiZ2V0SGFzaGVzIiwiaW5jbHVkZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/oidc-token-hash/lib/shake256.js\n");

/***/ })

};
;