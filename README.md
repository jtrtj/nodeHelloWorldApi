## Node Hello World API
#### How to use:
1. Make sure you have at least Node v8.12.0 installed on your machine
1. clone this repo
1. $ `cd` into the directory
1. $ `node index.js`
1. You should get the message `The server is up and listening on 43556 in development mode.`

#### Making requests
> __POST__ request to __localhost:43556/hello__
>
> With header __"name":"YOUR NAME"__
>
> Will return:
```json
{
    "hello": "John"
}
```
> __POST__ request to __localhost:43556/hello__
>
> Without __name__ header
>
> Will return:
```json
{
    "hello": "Please provide your name in the 'name' header so that I may greet you."
}
```
This JSON api was built using only Node's built in features. It is the first homework assignment for the [Pirple Node.js Master Class](https://pirple.thinkific.com/courses/the-nodejs-master-class)
