# Serialize Functions

Just a basic proof of concept that functions can be serialized and sent inside JSON responses. A technique that is already used by some of the UI frameworks to pass props from server components to client components.

When props are passed from server to client components, behind the scenes the framework serialize the props into JSON and send them to the client for later hydration, including `Date` and `Function` objects.

By default, `Function` cannot be parsed into JSON except using an external library.

**By no mean this library is production ready, just use `superjson`.**
