# Annihilation - A Literary Analysis via Twitter Feed

![Image of book and author Jeff VanderMeer](https://annihilation.ericmcd.com/public/VanderMeer.jpg)

This is the final project for a UW Madison English class which interprets the book [*Annihilation* by Jeff VanderMeer](https://www.jeffvandermeer.com/book/annihilation/). The goal was to retell the book in an alternative way by pretending as if the main character, nicknamed the "biologist", had a Twitter account and tweeted her thoughts, experience, and actions throughout the book.

Reader's familiar with the book would realize that it is ironic because the area the characters are exploring, known as Area X, permits no technology by the government. Their story was documented by pen and paper, and the characters had no communication with the outside world. Fourthermore, the narrator of the story is more of an introverted, nature-loving person, so she doesn't fit the profile of someone who would use Twitter.

VanderMeer's goal was to spread awareness to the inevitable doom to Earth's environment if we don't take immediate action spreading awareness and improving how we care for our planet. Retelling this story in a way where the narrator has a megaphone pointed out to the world, broadcasting her tweets for everyone to see give this book an alternative perspective, reimagining how VanderMeer portrays his characters but achieves his goals.

This app is written is written React.js, and hosted for free on my website with Express.js. Visit it at [https://annihilation.ericmcd.com/](https://annihilation.ericmcd.com/). This is literally my first React app since I wanted to make use of the `fake-tweet` npm module, so excuse the potental hot garbage code base. Cheers.

## To Use

+ Run `node converter.js` to convert the .csv data file into a .json for React to load the tweets. You may add more entries and modify this as a template if you wish, as long as you follow the .json structure.
+ Assuming you have the `express` module installed, run `node server.js`, and the project will be hosted on Port 3000.