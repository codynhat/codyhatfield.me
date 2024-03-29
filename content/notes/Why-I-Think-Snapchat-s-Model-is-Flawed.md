---
title: Why I Think Snapchat's Model is Flawed
date: 2014-10-16 14:25:01
slug: /2014/10/why-i-think-snapchat-s-model-is-flawed
canonicalUrl: https://medium.com/@codynhat/why-i-think-snapchats-model-is-flawed-c50998ffd590
---

***This post originally appeared on [Medium](https://medium.com/@codynhat/why-i-think-snapchats-model-is-flawed-c50998ffd590)***

A few days ago, a large amount of Snapchat photos and videos were leaked online in what is being called “The Snappening.” Snapchat immediately sent out a statement saying they were not responsible for the leak and the blame should be set on third-party apps.

A third-party application named *Snapsaved* took responsibility, admitting their servers were breached and 500MB worth of images was accessed.

Ever since Snapchat has become popular, there have been a number of third-party applications built that use Snapchat’s API. Some of these apps allow Snapchat users to send and receive snaps on devices and platforms they normally couldn’t. Some of these apps, such as Snapsaved, allow users to download and save snaps without the sender knowing. This defeats the whole purpose of Snapchat, photos disappearing a few seconds after being viewed. This is also a big threat to the privacy of Snapchat’s users, which is why they are trying to get rid of any third-party apps that use their API.

An API, or Application Programming Interface, is what a mobile app uses to connect to the “cloud,” or a company’s servers. It can be thought of as a web browser for computers. Instead of a human typing in a url like *http://facebook.com* and getting back a nice looking web page, an API uses a url like *http://api.facebook.com* and gets back a bunch of data. It then transforms or uses this data in a way that is useful to a user. The url an API uses is no different than the url a human uses when browsing the web. Because of this, a human could type in an API url if they wanted. All you would see is text that probably doesn’t make much sense.

Third-party apps do just this. They browse the internet using urls that are meant for computers and not humans.

This capability is perfectly fine in most cases, and in a lot of cases is even supported by companies. Sites such as Facebook and Twitter allow and encourage third-party apps to connect to their API. However, Snapchat does not.

The reason for this is obvious. Snapchat’s entire user experience centers around the idea that when you send a photo, it is only shown for a few seconds and then disappears forever. These photos are encrypted and stored on Snapchat’s servers. When someone views a snap, it is downloaded to their phone, shown for a few seconds, and then deleted from their phone and from Snapchat’s servers. Sounds simple, right? Problems arise when third-party apps start browsing Snapchat’s API. These apps can download photos with a user’s username and password, just like the Snapchat app. But once the photo is downloaded, Snapchat cannot guarantee that it gets deleted forever. In the case of Snapsaved, they save user’s photos on their servers.

*Third-party apps that allow users to save the snaps they receive are the reason why thousands of photos have been leaked*.

This is the approach that Snapchat has taken when trying to explain the situation to the press and to their users. They are telling users to not trust any third-party apps that ask for your username and password. They have even started contacting Apple and Google to try and ban any third-party apps from being on their app stores.

But not all third-party apps are to blame.

A few months ago, I started working on a third-party Snapchat application for Mac OS X called Snappy. We realized that there was no way to view or send snaps from your computer. There was no Snapchat website or desktop app, only the mobile app.

We saw an opportunity.

Snappy was released to the Mac App Store in June of 2014. It allowed people to view snaps from their friends and send snaps using the built-in camera on their computers. You could also apply stylish and funny filters to your photos before sending them. Snappy did not allow you to save snaps and did not prevent snaps from disappearing. It worked exactly like Snapchat. The photos disappeared after they were shown.

![Snappy, Snap from your Mac](../assets/Why-I-Think-Snapchat-s-Model-is-Flawed/snappy.png)

We had no intention of interfering with Snapchat’s model or putting people’s privacy at risk; two things that other third-party apps do.

Instead, we wanted to enhance the experience of Snapchat by simply allowing people to use it on their computers. And we did this quite successfully.

Snappy peaked in the U.S. charts as the number three social networking app available to download. We exceeded our initial goal of downloads, set before even starting development. And we did this without spending a penny on marketing or advertising. (Actually, we wasted $10 on Facebook advertisements that only turned into a handful of downloads)

We have spent countless number of hours on Snappy. What started as a fun side project for a few college students turned into a project much larger and much more time demanding than we first anticipated.

With the recent events and press surrounding Snapchat’s leak, we decided to remove Snappy from the App Store.

Even though we had no involvement in the leak, we had one of the most popular Snapchat third-party apps and one of the only ones available for the Mac.

From the beginning, we only wanted to enhance the core experience of Snapchat. We decided that leaving Snappy on the App Store would only go against Snapchat’s wishes. We did not want to be in the middle of anything or contribute to ruining the experience of Snapchat. After all, this only started as a small side project.

So, I say to everyone aware of the recent Snapchat leak, do not put the blame on all third-party apps like Snapchat says.

Do not put the blame on Snapchat or their lack of security, but instead put the blame on their model. They thought they could make photos posted to the internet “disappear.” This seemed like a reality until third-party apps started going against Snapchat’s wishes and invading the privacy of their users.

To the third-party apps allowing people to save snaps, I say great job invading the privacy of millions of people. And thank you for making the countless hours we have put into Snappy come crashing down.

I hope it was worth it.
