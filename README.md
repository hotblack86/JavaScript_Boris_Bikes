We are living in London, people love to cycle and demand access to bikes to aid
get them through their dangerous journeys to work and wobbly rides home on Friday nights.

The Mayor's Office comes up with a plan, to unleash a fleet of Boris Bikes onto
the streets. Boris commands Transport for London (TFL) to deliver his plan.

To implement the Mayor's ambitious plans, TFL come up with a plan: a network of docking stations and bikes that anyone can use. Lacking in resources to build a program that emulates all the docking stations, bikes, and infrastructure (repair staff, and so on), they requested that our team write software to achieve this, and make Boris' grand ambitions a reality.

PLAN

- To replicate The Boris Bikes challenge we did in Ruby but this in Javascript. TDD from scratch.

INSTRUCTIONS
- Clone this repo
- Open SpecRunner.html to run tests

USER STORIES

* As a member of the public,
So that I can use a bike,
I'd like a docking station to release a bike.

* As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations not to release broken bikes.

* As a member of the public,
So I can return bikes I've hired,
I want to dock my bike at the docking station.

* As a member of the public,
So that I reduce the chance of getting a broken bike in future,
I'd like to report a bike as broken when I return it.

* As a maintainer of the system,
So that I can control the distribution of bikes,
I'd like docking stations not to accept more bikes than their capacity.

* As a system maintainer,
So that I can plan the distribution of bikes,
I want a docking station to have a default capacity of 2 bikes.

* As a system maintainer,
So that busy areas can be served more effectively,
I want to be able to specify a larger capacity when necessary.