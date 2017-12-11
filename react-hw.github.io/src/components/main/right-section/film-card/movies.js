import v4 from 'uuid/v4';

const movies = [
    {
        id: v4(),
        title: 'Star Wars',
        overview: 'The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), c...',
        vote: '7/10',
        genres: ['sci-fi', 'drama', 'action']
    },
    {
        id: v4(),
        title: 'Jaws',
        overview: 'When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that ...',
        vote: '6/10',
        genres: ['drama', 'action', 'horror']
    },
    {
        id: v4(),
        title: 'Conan',
        overview: 'Orphaned boy Conan (Arnold Schwarzenegger) is enslaved after his village is destroyed by the forces of vicious necromancer Thulsa Doom (James Earl Jones), and is compelled to push "The Wheel of Pain" for many years. Once he reaches adulthood, Conan s...',
        vote: '7/10',
        genres: ['action']
    },
    {
        id: v4(),
        title: 'The House',
        overview: 'Scott and Kate Johansen must figure out a way to earn some money after their daughters scholarship falls through. When all else fails, the desperate couple join forces with their neighbor Frank to start an underground casino in his home. As the cash...',
        vote: '5/10',
        genres: ['comedy']
    },
    {
        id: v4(),
        title: 'Training Day',
        overview: 'Police drama about a veteran officer who escorts a rookie on his first day with the LAPDs tough inner-city narcotics unit. "Training Day" is a blistering action drama that asks the audience to decide what is necessary, what is heroic and what crosse...',
        vote: '9/10',
        genres: ['drama', 'thriller']
    }
];

export default movies;