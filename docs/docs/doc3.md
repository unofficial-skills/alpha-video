---
id: doc3
title: Install
sidebar_label: Install
---

Once Docker is fully installed and running. Open a terminal on your device. I use powershell on windows. 

There is a few different versions of the docker image use the command bellow that matches your language. 

English: ``` docker run -d --restart unless-stopped --name alpha-video -p 5000:5000 -e subdomain=changeme andrewstech/alpha-video:latest ```

German: ``` docker run -d --restart unless-stopped --name alpha-video -p 5000:5000 -e subdomain=changeme andrewstech/alpha-video:german ```


More lanugages to come.

That command downloads the latest version of the code and runs it in a virtual environment.

The part of the command which says changeme, change this to somthing unique to you. If you choose something generic like youtube then someone else will probably have already claimed the domain. A good example is andrewstech7863 . After you have changed that then run the command. It should start downloading multiple files and give you an output such as ``` 3493783796b56777987287120c5e3d4defa418d58825d22aa7b1a7c96dfa6604 ```. This means the code has been installed. Now we need to see if our unique domain was avalible.

Run ``` docker logs ``` followed by the number you just copyed. For example ``` docker logs 3493783796b56777987287120c5e3d4defa418d58825d22aa7b1a7c96dfa6604 ```.

This should show the logs of the skill and at the bottom you should see the line ``` your url is: ``` Followed by the url. If your unique domain is available it should dissplay your unique-domain followed by .loca.lt. If it was not available it would have generated a random one. If the domain is a random one then it will change on every startup.

Copy this down as you will need this later. 

:::tip 
If you wish to change the domain then run the command. docker stop followed the container id . Example docker stop 3493783796b56777987287120c5e3d4defa418d58825d22aa7b1a7c96dfa6604

Then run the same command but change stop to rm to delete it.

You can now start from the Top
:::



