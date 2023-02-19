---
id: doc4
title: Alexa console
sidebar_label: Alexa console
---

Now we have the domain we can head over to the Alexa developer console. We can access it by clicking [here](https://developer.amazon.com/alexa/console/ask).
Make sure to sign in with the amazon account you use with alexa. Once signed in click the blue create skill button. Enter a skill name this can be anything. Make sure custom model and Provision your own are selected.

On the next page choose start from scratch.  On the left side click on endpoints. Now scroll down and click on https. Now in the Default Region box paste your domain. Make sure it starts with https. Add /api to the end of the domain. 

The domain should now look like this ``` https://pretty-mayfly-37.loca.lt/api ``` . In the dropdown box below make sure to select  ``` My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority ```.
Once done click the save endpoints button. Now on the left click on interfaces. On the interfaces page turn on audio player and video app then the save interfaces button at the top.

Now on the left click Interaction Model this will open a small menu on the side. Click jason JSON Editor this will take you to the Editor page. 

We now need to upload our interaction.json file, currently only English is avalible. Click in the box and delete all the text.

:::tip 
If you are using windows you can press CTRL + A to select all the text the delete key to remove it.
:::

Now lets copy the new interaction.json file. Click [here](https://download.andrewstech.me/projects/alpha-video/) to view and copy the new code. Once copyed go back to the JSON Editor and paste it in. Once you have pasted it in scroll to the top and click save model.
