[![Build Status](https://travis-ci.org/xavcz/linkedin-recommendations.svg?branch=master)](https://travis-ci.org/xavcz/linkedin-recommendations)

### Goal
On your Linkedin profile, you cannot move up to the top of the page recommendations you've got from clients or collaborators. I find that pretty annoying, as it's a strong selling argument (testimonials).

This little app is meant to be part of my new personal website, demonstrating what I can do as a front-end engineer.

### What's in there
* It's mainly a React app.
* [Meteor](https://github.com/meteor/meteor) app as a build tool without configuration 
* Graphql server running on Express thanks to [meteor/apollo](https://github.com/apollographql/meteor-integration) (note: I maintain this package)
* Mocked data for the graphql server
* Server-side rendering (note: static head tags)
* [`styled-components`](https://github.com/styled-components/styled-components), css-in-js ftw
* ESLint + [`prettier`](https://github.com/prettier/prettier)
...more to come (storybook, snapshot testing with jest, D3)

### Initial design
Built from this sketch:

![sketch](https://d3uepj124s5rcx.cloudfront.net/items/1V0F2u0u091F1j1k1I1N/original%20draft.png?v=cbf9965d)

### Note about Linkedin API :(
The goal of this app is to retrieve received recommendations. Linkedin API provides a [selection of member profile fields](https://developer.linkedin.com/docs/fields) available to ["Apply with LinkedIn" developers](https://developer.linkedin.com/partner-programs/apply).

-> I'm currently not part of this program (I applied). [Techcrunch article about this restriction](https://techcrunch.com/2015/02/12/linkedin-battens-down-the-hatches-on-api-use-limiting-full-access-to-partners/)

I'm waiting (arf) a response from  the Linkedin Business Dev team:
> Our Business Development team will review all applications and we will endeavor to respond to you within 15 days.
