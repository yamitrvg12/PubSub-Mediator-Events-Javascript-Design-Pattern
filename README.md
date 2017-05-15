# PubSub/Mediator/Events javascript design pattern

## Some ground rules:

+ Self-contained module
    + Everything to do with my module is in my module
    + No global variables
    + If a module manages more than one thing it should be split up
+ Separation of concerns
+ DRY code: Don't Repeat Yourself
+ Efficient DOM usage
    + very few $(selections)
+ No memory leaks
    + All events can be unbound

## Description

We'll cover the pubsub design pattern (publish/subscribe), which allows us to decouple our modules. Once integrated with our pubsub module, they can emit events and not have to worry about which modules depend on them. Modules can subscribe to events and be notified when any module publishes.