---
layout: page
title: Conditions clear
image: /img/chapter-2-conditions-clear/cover-illu-chapter-2.png
permalink: /chapter-2/
---
# Conditions clear
## Definitions
**In this chapter of my thesis, I will outline and define some of the basic terms that are necessary to understand when talking about adaptivity. These terms include the definition of adaptive systems and their distinctions from adaptable systems. The definition of adaptation in user interfaces and the term context of use.**

> “The idea of an adaptive interface is straightforward; simply, it means that the interface should adapt to the user rather than the user adapt to the system.” <cite>Norcio & Stanley 1989,  p. 399</cite> 

### Adaptable vs. Adaptive System
**In short:** I define a system as an adaptable system if the adaptation is initiated by the user, and a system as an adaptive system if the adaptation is initiated by the system.

A system is defined as an **adaptable system** if it allows the user to adjust user interface aspects, e.g. the font-size, the color of the interface, or the contrast. This can be done, e.g. in the settings, in a dialog box, or by activating a switch (Oppermann 1994).

A system is defined as an **adaptive system** if it automatically adjusts some aspects to the current context of use (User, Environment, Platform). This may involve asking the user to confirm some of the suggested changes (Zimmermann, et al. 2014).  

Today’s systems are often both; adaptable and adaptive. As Zimmermann states: “This will typically result in mixed dialogs in which a user changes some aspect of adaptation, and the system will react upon this by proposing to change another (complementary) aspect to the user” (Zimmermann, et al. 2014, p. 301).

### Adaptation in User Interface  
Adaptation in user interfaces (change to the interface) can be made within two time spans, during design-time (e.g., when the software is developed and the user interface is designed) and run-time (e.g., when the software is released and used by a user interacting with the interface in a specific environment on a specific platform). Activities during design-time can provide guidelines that specify in which way a interface during run-time can be adapted by a user or system (Zimmermann, et al. 2014).  
  
> “Context is any information that can be used 
to characterise the situation of an entity. 
An entity is a person, place, or object that 
is considered relevant to the interaction 
between a user and an application, including the user and application themselves.” <cite>Dey et al. 2001</cite>

### Context of Use  
Various authors define adaptive UIs as systems that automatically adjust their content, layout, or visual presentation based on the recognition of change in device, context, task, or demand (Yang et al., Billsus et al. & Kubat et al.). Shackel (1990) therefore proposed four components of any situation in Human-Computer Interaction (HCI); user, task, system and environment. In addition to this Benyon (1993) states that it is the job of the system designer to achieve a harmony between those components. According to the international standard (ISO 9241-210:2.2, 1st edition, 2010) for “Ergonomics of human–system interaction — Part 210: Human-centred design for interactive systems”, the components “users, tasks, equipment (hardware, software and materials), and the physical and social environments” are called the context of use. Because “the context of use reflects the specific conditions under which the user interacts with the application through the user interface.“, understanding of it is an important prerequisite for the adaption process (Zimmermann et al. 2014).

According to Zimmermann, the system (platform) is, (1) the device used for interaction (hardware) and (2) the software platform running the user interface in the context of use. This definition describes the system as a platform. Because the term platform includes the capability of a system to run software, I will use platform instead of system in this thesis. Furthermore, Zimmermann uses the term task within the component user. For this thesis I will do the same in order to (1) foster simplicity of the model and (2) since tasks cannot be separated from users, and their motivation to perform certain actions. 

This defines the context of use in this thesis, as a triangle defined by the characteristics of the components, user, platform and environment. In order to understand the context of use we have to build models of the three components; user, environment, platform. Some challenges may occur “due to the heterogeneous nature of the context of use” and that “its information cannot be prepared at full before runtime” (Zimmermann, et al. 2014). Zimmermann further states that the context of use needs to be gained from various data sources, sometimes upon demand only. Because some condition of the context of use are more persistent over time, e.g., the hardware of the device (platform; if not exchanged or switched between devices), than others, e.g., the environment the interaction takes place in. Neither or less, some conditions of the same environment may not change over time, e.g., the noise level or lightning conditions of the same location. These few examples shortly outline the challenges in predictability and consistency of conditions in the context of use.

### The Triangle  
  
As described before, the context of use is defined by three components (platform, environment and user) in this thesis. Understanding those three components is an important prerequisite for the adaption process. 

The **platform model** includes the capabilities and limitations of the hardware and software running on the device. This means the size and resolution of the display, the weight and size of the device, the type of input (e.g. mouse or touch) or the availability of free storage, or a runtime engine (e.g. Flash, JavaScript) and version. 

The **environment model** includes (1) the physical environment, e.g. heating, lighting, noise level, equipment layout and operating circumstances, as well as (2) the psychological environment, e.g., the provision of help and training and (3) the socio-political environment, e.g., the organizational structure in which the interaction takes place. 

The **user model** includes “the needs and preferences of the user while at the time of user interaction” (Zimmermann, et. al 2014). This means his experience and skills, e.g., product experience or related experience, input device skills and task knowledge and personal attributes, e.g., physical and cognitive capabilities and limitations and his attitude and motivation. This model also includes the task, e.g., the task characteristics, steps, interactions required and risks resulting from error. 

(Zimmermann, et. al 2014, Maguire 2001)  
  
{% include figure.html src="/img/chapter-2-conditions-clear/graphic-context-of-use.png" caption="Figure 15: Models and components in the context of use" %}

## Areas of Adaptivity
**This chapter presents a distinguishment in six domains on implementation of UI adaptation. To illustrate the different domains, commercially fully developed examples are used.** 

The categorization is considered to be subjective and never completely correct. From another point of view, the examples may be described and distinguished differently. The categorization presented in this chapter is mostly based on a categorization provided by Jameson (2008) and Olga (2014). I use this categorization with some extensions and later examples to provide an overall understanding of the different application domains of adaptivity in UIs today. 

### Adaptation of Interface Elements
One way of helping a user to interact with a system more effectively is to adapt the user’s interface so that it fits better with the user’s way of working with the system (Jameson 2008). Elements that can adapt in this way may include menus, lists or navigation bars. One of the most frequently used and commercially fully exploited example is the personalized menu in the office software Microsoft Office 2000 or the start menu of Microsoft XP. For example, when the user opens the dropdown menu of Microsoft Office 2000, the user sees the most used actions at a full glance. This adaptation can result in reducing visual search time, cognitive load, and motor movement (Findlater & Gajos 2009). When the adaptation has been successful, this menu can be more efficient and will be preferred over a non-adaptive menu (Gajos et al. 2006, Greenberg & Witten 1985).

One way of helping a user to interact with a system more effectively is to adapt the user’s interface so that it fits better with the user’s way of working with the system (Jameson 2008). Elements that can adapt in this way may include menus, lists or navigation bars. One of the most frequently used and commercially fully exploited example is the personalized menu in the office software Microsoft Office 2000 or the start menu of Microsoft XP.  For example, when the user opens the dropdown menu of Microsoft Office 2000, the user sees the most used actions at a full glance. This adaptation can result in reducing visual search time, cognitive load, and motor movement (Findlater & Gajos 2009). When the adaptation has been successful, this menu can be more efficient and will be preferred over a non-adaptive menu (Gajos et al. 2006, Greenberg & Witten 1985). 

{% include figure.html src="/img/chapter-2-conditions-clear/personalized-dropdown-microsoft.png" caption="Figure 16: Personalized dropdown menu in Microsoft Office 2000" %}

There are a nine different ways to adapt a dropdown menu illustrated by studies conducted by Mitchell & Shneiderman, (1989), Sears & Shneiderman (1994), Tsandilas & Schraefel (2005), Gajos et al. (2006), Cockburn et al. (2007) and Findlater et al. (2009) or commercially fully exploited software, e.g., Microsoft Office, Windows XP and Trello (see Figure 17, next page).

{% include figure.html src="/img/chapter-2-conditions-clear/examples-of-adaptive-interface-strategies.png" caption="Figure 17: Examples of Adatptive Interface Strategies Applied to Pull-Down Menus adapted from Findlater & Gajos 2009" %}

Various studies have been conducted to find out which of these nine strategies of adaptation in dropdown menus lead to more efficiency and predictability. Some authors have proved that instead of mixing the adaptive parts of an interface into the non-adaptive parts, clear distinguishment between the adaptive part and non-adaptive part result in an increase in usability measures, e.g., predictability and findability (Findlater & Gajos 2009). In the original split menu (Figure 17e) proposed by Sears & Shneiderman (1994), the most frequently used elements are moved to the top of the menu. Findlater & McGrenere (2004) showed that if this adaptation happens too frequently, it can hinder users to develop spatial memory of the menu layout. This might deteriorate user performance and lead to lower user satisfaction as compared to the non-adaptive counterpart (Findlater & McGrenere 2004). 

According to Billsus et al. (2002) the support of various modes of information access, by providing multiple ways of interaction to reach the same goal, is a requirement for adaptive personalization and adaptive user interfaces. Billsus et al. points out that: “personalization should not get in the way of finding important [...] information.” (Billsus et al. 2002, p.36). The same result was shown by Gajos et al. (2006) in a study where they tested the interface from Sears & Shneiderman (1994) against, what they call a split interface. The moving interface (Figure 17e) from Sears & Shneiderman (1994) didn’t divide the adaptive part from the non-adaptive. The split interface from Gajos et al. (2006) did clearly divide the adaptive part from the non-adaptive. This gives the user the ability to quickly scan the recommendations and see if the system recommends what the user is looking for. If not, the user can easily continue to the non-adaptive part and select the action the user is looking for. The non-adaptive part is static, according to this the user is able to build a spatial model of the menu. This results in more accuracy and efficiency of the user in finding actions than in the original adaptive menu proposed by Sears & Shneiderman (Gajos et al. 2006). In the same study the highlighting interface (Figure 17d) proposed by Tsandilas & Schraefel (2005) has been outperformed by the non-adaptive interface. Gajos et. al. (2006) proved the highlighting interface to perceive even more costs by the same amount of benefits in comparison to the non-adaptive menu (see Figure 18, next page).

{% include figure.html src="/img/chapter-2-conditions-clear/graphic-different-types-of-interfaces.png" caption="Figure 18: The perceived costs and benefits of different adaptation strategies; adapted from Gajos et al. (2006)" %}

#### Responsive Design
Another way of Interface adaptation is the area of Responsive Design (Smashing Editorial 2011). Responsive Design is a term that got most popular in web design due to the explosion of amount of different mobile devices, that varies in size and capabilities. 

{% include figure.html src="/img/chapter-2-conditions-clear/devices.jpeg" caption="Figure 19: A Multi-device photoshoot at Breaking Development 2013 in Nashville, TN. Over 200 devices in this image. Source: Brad Frost, Atomic Design, URL: http://atomicdesign.bradfrost.com/chapter-1/" %}

> “These are just some of the connected devices we need to worry about.” <cite>Brad Frost, author of Atomic Design</cite>

Responsive websites change their layout with regards to the hardware, e.g., viewport (screen size) or the software, e.g., browser engines, libraries. The adaption to these components have the goal to result in a better usability on a wide range of different devices (Marcotte 2010). Regardless of this term mostly applied to web design, Responsive Design can be applied in all kinds of applications. In fact, Apple use the same principle for automatic adaptation of their mobile apps to the different screen sizes of iOS devices and the orientation of view (Apple 2016).

### Personal Assistant Systems
Personals assistant systems are the best known adaptive systems today. These systems’ purpose is to support the user with just the right amount of the right information at the right time. This is done by running the applications in the background of your smartphone, e.g., Google Now or in the cloud, e.g., Apple Siri or Amazon Echo, constantly analysing user behavior (movement, interaction and environment) and tons of other data, ranging from social data to third party data sources. The system‘s strength lies in their ability to be constantly available, and provide you with information these systems think you may need at the moment or in the future. Most of the information delivered is additional and helpful to reach the goal of a certain task, e.g., traffic updates to arrive at the airport at time. This information is rather difficult to look for, or the effort which goes into finding this information is often not worth the effect, or simply out of the user’s mind to be relevant. The additional information provided by these systems can help the user not to miss a certain goal. By doing so, personal assistants have the ability to delight the user.

As pointed out by Olga (2014), the mobile application Google Now is a good example of such a system. This application constantly runs in the background and analyses the user and the environment, using sensory data from the platform. Based on this data, Google Now provides certain information as cards. These cards give the user additional information to, e.g., a calendar event or his next journey (e.g., way home from the office). Unless there isn’t enough data to reach a high accuracy of prediction, most of the information is provided for predicted journeys, based on less accurate data points. There is a chance that some of the information may not provide any additional value at the moment of user interaction. Because of this, the systems have to be seen as assistive, as their name tells. The main purpose of this applications is to provide an easy way to access a service like Google Search with additional predicted information. This means that most of the time, the user isn’t expecting to find a specific information when launching the app. The information takes up a large amount of the screen space, but doesn’t bother the user when looking for something else. Therefore, there is a high chance to delight the user with the additional information.

In case of a booked flight, the application presents additional information like the route to the airport with traffic updates, flight number, date and time, terminal and gate information. This information isn’t static and changes over time, e.g., traffic updates, flight cancellation or, as the user reaches the airport, the system can present a weather forecast of the fight destination (see Figure 20).

{% include figure.html src="/img/chapter-2-conditions-clear/google_now_update.jpg" caption="Figure 20: Google Now on Android with additional information provided to a flight." %}

### Personalization of Content
Personalization of content is widely used from applications which provide a wide range of content, e.g. music streaming, news sites, social media, search engines etc. The main idea of this Adaptive UIs is to filter the content provided by prediction of the user taste and preference based on user behavior or in respect of social data. The data acquisition enable the application to build a model of the user. User models contain the collection of interaction/browsing/listening/watching history, preferences, location, connection and social data, etc. The analysis and interpretation of this data is used to filter the content with regards to the user’s taste and preference. 

Example applications that use this type of Adaptive UI technique are websites like Amazon, YouTube, music streaming provider like Spotify, Pandora or Last.fm, adaptive news applications like Habito News (Constantinides 2015) or social media sites like Facebook or Twitter. Content filtered in this applications is provided as recommendations, the user has always access to the whole content inside the application or on the platform. Some applications/platforms filter more transparently than others. For example, Spotify Browse provides you with labels that let you inspect the user model and the data the recommendation is based on. Facebook News Feed instead hides a lot of content from you and does not explicitly label most of the filtered content as recommendations. 

When the user has a hard time to get back to the whole content and in order stays within the filtered content, the user model will get more narrow over time. This phenomenon can be seen as the biggest challenge that comes along with the personalization of content. In this case, the applications/platforms have to evaluate the current user model constantly. This can be done by challenging the user with new content outside of the current user model. Putting the user slightly out of his comfort zone from time to time helps to explore change in behavior and preference and keeps the user model vital and expanding. This containment of the user model is generally known as “Filter Bubble”. This term goes back to 2011, when the internet activist Eli Pariser in his book “The Filter Bubble” described what the algorithms behind most websites on the internet are hiding from us.

{% include figure.html src="/img/chapter-2-conditions-clear/spotify-personalized-content.png" caption="Figure 21: Spotify Browse with personalized content." %}

### Multi-User Interface
A Multi-User Interface mostly is about restriction and access. These interfaces are applicable when more than one person interacts with the same system, or different people need different personalized experiences. Most of the consumer applications which require an account are Multiple User Interfaces. The account lets the system identify the person in front of the UI. Therefore, the system can change the interface to the individual user, e.g., preferences or the right to access, at the time of authentication. Account is an abstract term for a track record, mainly used in the banking sector. Concerning software, the term is used to maintain a record of all the data the user permitted to access. The Oxford Dictionary defines the noun account as following: “An arrangement by which a user is given personalized access to a computer, website, or application [...].” For identifying the user, there has to be some authentication. User authentication is done typically by entering a username and password, but there are more techniques to identify a user in most applications today. Operating systems on mobile devices offer to identify a user by a fingerprint scan, e.g., Apple TouchID, a short figure pin or drawing a simple symbol, e.g., Google Android. Game consoles like the Sony Playstation and Xbox One identify a user using face recognition and voice recognition technology. Other systems authenticate a user by near field technologies like NFC or Bluetooth, and the use of another device, e.g., smartphone and wearable, that identifies a user because the user is already logged in into the same account on this device. It is to mention that there are a lot more techniques that can‘t be covered here. These few examples provide a short overview of the landscape of possibilities. Authentication is a large research area, that becomes more relevant as Adaptive UIs are evolving and users expect more and more personalized experiences. Multi-User Interfaces are state-of-the-art for most other domains of adaptivity, e.g., Personalization of Content or Personal Assistant Systems.

{% include figure.html src="/img/chapter-2-conditions-clear/mavericks_login_screen_macbook_air_hero.jpg" caption="Figure 22: Login screen (OSX) on a Macbook Air" %}

### Adaptive Dialog Systems
Adaptive Dialog Systems are adapting their content by machine learning and natural language processing. They offer specific content to an individual user based on his speech or text input and input history. Most of those systems are there to support the user by presenting content according to the user’s questions. Popular examples are Chatbots like the eBay’s Shopping Bot on Facebook’s Messenger platform or speech assistants like Amazon Echo, aka Alexa, or Apple Siri. Instead of using the Interface of eBay, Amazon or iOS, the user can chat with a virtual assistant using his natural language via text or speech. Nowadays, most of these help systems are based on the same principles (see Figure 8). The user asks a question and the system uses natural language processing to find a suitable answer, or asks for more context. In time these system learn about the way you speak and what you may want to know by your validation of their recommendations. Several other proof-of-concept cases of adaptive dialog systems were developed by researches in the past: (Komatani et al. 2005), (Thompson & Goker 2000), (Müller et al. 2003).

{% include figure.html src="/img/chapter-2-conditions-clear/AmazonEcho.png" caption="Figure 23: Amazon Echo" %}

{% include figure.html src="/img/chapter-2-conditions-clear/eBay-chatbot.png" caption="Figure 24: eBay Shopping Bot inside Facebook Messenger" %}

### System Interacts with Environment
The last domain of implementation of UI adaptation are the systems that change their user interface depending on the environment. The data on the environment is mostly collected via device sensors. The data used for adaptation is physical environment data, e.g., location, heating, lightning, noise level, equipment layout and operating circumstances. Most of those systems are location-sensitive. Location-sensitive means that the systems alter the content and the user interface depending on the user‘s current location and other location-related data (e.g., history of user‘s geographical movement). The adaptation may involve location-based recommendations, or navigation support, e.g., buttons size. This kind of UI adaption can mostly be found on mobile devices, e.g., smartphones, smartwatches, as their mobility and high number of location and environment sensitive sensors benefit the adaptation.

{% include figure.html src="/img/chapter-2-conditions-clear/iOS-auto-brightness.png" caption="Figure 26: Display & Brightness settings (iOS 10)" %}

{% include figure.html src="/img/chapter-2-conditions-clear/Windows10-DisableAutoBrightness.png" caption="Figure 27: Display & Brightness settings (Windows 10)" %}

Most examples can be found in today’s mobile operating systems, like iOS and Android, but even desktop operating systems tend to make use of the sensors of increasingly mobile devices. Apple iOS uses the user’s location-related data to provide shortcuts to location relevant apps within the lock screen. The user sees a little app icon (shortcut) to the Apple Store app if he gets close to an Apple Store and a shortcut icon to the Starbucks app when he is inside Starbucks (see Figure 28). This little tweak is delightful, unobtrusive and can save the user time smuggling  to find the app on his home screen when needed.

{% include figure.html src="/img/chapter-2-conditions-clear/locationalerts.jpg" caption="Figure 28: Location alert shortcuts on iOS (left corners)" %}

Another example is the latest add-on to Google’s Android operating system, Google Auto. When driving or in a car, this app provides an optimized UI of Android and is automatically activated when the smartphone connects to the car‘s bluetooth. The interface provides much larger buttons than the normal UI of Android. In the center of interaction is Google Assistant, a speech assistant which enables to control the UI via speech input. This gives the user hands free control over the system. Google Auto also uses movement history and data to provide you with navigation recommendation and automatically replies to your messages and calls while driving. Third party apps like Spotify are implemented and make use of the much larger controls in the UI and the speech input of Google Assistant. When you leave the car and bluetooth disconnects, Google Auto automatically switches back to the UI of Android for normal use.

{% include figure.html src="/img/chapter-2-conditions-clear/android-auto.png" caption="Figure 29: Google Android Auto – settings auto launch when Bluetooth connects (left). Google Android Auto – home screen with navigation recommendations (right)." %}

{% include figure.html src="/img/chapter-2-conditions-clear/androidautoonyourphone_1447-100661632-orig.jpg" caption="Figure 30: Google Android Auto – home screen inside car." %}

### Major areas of adaptivity
As illustrated in this chapter, UI adaptation can be applied in various forms. Many applications combine different domains of UI adaptation in one user interface. In chapter  2.1.3, the three major components which an Adaptive UI can adapt to were introduced: the platform, the user and the environment. With regards to these components, the domains of implementation of UI adaptation can be broken down into three major areas of adaptivity. Because the user is the one in front of the UI, it is no surprise that User Adaptivity is the most important area of UI adaptation, counted on the domains of UI adaptation that primarily adapt to the user (see Table 2). 

{% include figure.html src="/img/chapter-2-conditions-clear/table-adaptivity-priority.png" caption="Table 2: Major areas of adaptivity" %}

## In Summary
**To provide consistent terminology throughout the thesis, I will use general definitions for (1) the stages in which changes regarding a software can be made (Zimmermann, et al. 2014), (2) the values for interface variability (Findlater & McGrenere 2004) and (3) the possibilities for controlling changes of the interface (Findlater & McGrenere 2004).**

There are two possible stages in which changes with regards to a software can be made:

- **Design-time:** The time during which the software is designed and not has not been released yet. 
- **Run-time:** The time when the software has been released and is used in a specific context of use.

Adaptivity of an interface can have two different states, referred to whether or not an interface changes over time:

- **Static:** The interface does not change while run-time (the course of use).
- **Dynamic or Fluid:** The interface changes while run-time (the course of use).

There are three possibilities for controlling changes with regards to a dynamic or fluid interface: 

- **Adaptive:** The system is in control of change.
- **Adaptable:** The user is in control of change. (Another term Findlater provide is customizable.)
- **Mixed-initiative:** The control is shared between the user and the system.

