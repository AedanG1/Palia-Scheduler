# Palia Scheduler

A client side scheduling web app for the game Palia.
**Try it live at <a href="https://paliascheduler.com" target="_blank">paliascheduler.com</a>**

Built with Next.js, tailwindcss, Typescript

Packages used:
- Motion: animations and transitions
- Lucide-react: icon library
- Virtuoso: efficient rendering of list components

## Features
- Clock synced with in-game time
- Lists of in-game activities complete with images, locations, descriptions, rarities, and requirements
- Ability to add activities to the schedule to be notified when they are available in-game

## Local Setup
```bash
git clone https://github.com/AedanG1/Palia-Scheduler.git
cd Palia-Scheduler
npm install
npm run dev
```

## Technical notes

### Schedule Item Collision
One of the technical/design challenges I faced when developing the schedule component was how to render the items on the schedule which had the same start time. At first, I considered that if two items were scheduled with the same start time, the latest item scheduled by the user should replace the item already on the schedule. However, this ended up being too limiting and led to problems where a user could accidentally replace an activity they didn't want to, thus having to find it and reschedule it again.

With Google Calendar as a reference, I decided that items with the same start time should fit on the schedule side by side. To do this I switched from a grid layout to absolute positioning. Using absolute positioning meant that I had to calculate the position of each item instead of letting the Grid layout do the work but also meant that I now had the freedom to position the schedule items side by side. In order to calculate the position of each item, I created a Map to group each item with equal start times. Then for each group, I calculated their position and width based on the number of items in the group. 

### Optimizing list rendering
While checking the performance of the website during development I noticed that the list was taking too long to render, making the type select animation look choppy. I knew this poor render time was because I was rendering a list of over 100 components, each with images and child components. 
To improve the render time of the list, I used Virtuoso. Using Virtuoso allowed me to only render the list items in view, decreasing the list's render time by 98%.

*Before*
![An image showing an INP value of 360ms in chrome dev tools]('./public/readme-before-inp.png')
![An image showing the list component rendering in 282ms in react dev tools]('./public/readme-before-render.png')

*After*
![An image showing an INP value of 72ms in chrome dev tools]('./public/readme-after-inp.png')
![An image showing the list component rendering in 5ms in react dev tools]('./public/readme-after-render.png')