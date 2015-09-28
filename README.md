# WebTask proxy with listeners

This is a proof-of-concept repo. The basic idea is to create a WebTask proxy that forwards all calls to some API or
third party service and, on a given status code, notifies interested listeners (those could be other WebTasks).

This could be used to implement events on legacy applications that depend on third-party services, log some API usage
or associate events to any API call without the need to change the application that consumes it.

## Files

The two files only prove the concept: There's a `proxy.js` file that receives the call and forwards it (right now it
just makes an http call and checks status == 200), and there's a WebTask `logger.js`listener hard-coded in that could
be interested in the result of this call (right now it just logs that it was called.)