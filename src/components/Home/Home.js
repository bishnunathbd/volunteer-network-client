import React from 'react';
import Event from '../Event/Event';

const Home = () => {
  const allEvents = [
    {
      name: 'Child Support',
      imgUrl: 'https://i.imgur.com/DHBdDjG.png',
      eType: 'childSupport'
    },
    {
      name: 'Refuge shelter',
      imgUrl: 'https://i.imgur.com/qKbbFa0.png',
      eType: 'refugeShelter'
    },
    {
      name: 'Food Charity',
      imgUrl: 'https://i.imgur.com/Ja85Hae.png',
      eType: 'foodCharity'
    },
    {
      name: 'Host a clothing swap.',
      imgUrl: 'https://i.imgur.com/5gq8zaF.png',
      eType: 'clothingSwap'
    },
    {
      name: 'Host a river clean-up.',
      imgUrl: 'https://i.imgur.com/4P5fisC.png',
      eType: 'riverCleanUp'
    },
    {
      name: 'Clean water for children',
      imgUrl: 'https://i.imgur.com/7Q166EC.png',
      eType: 'cleanWater'
    },
    {
      name: 'Good education',
      imgUrl: 'https://i.imgur.com/g1As96s.png',
      eType: 'goodEducation'
    },
    {
      name: 'New books for children',
      imgUrl: 'https://i.imgur.com/UrlHOHg.png',
      eType: 'newBooks'
    },
    {
      name: 'Host a study group.',
      imgUrl: 'https://i.imgur.com/kugDo0b.png',
      eType: 'studyGroup'
    },
    {
      name: 'Build birdhouses for your neighbors.',
      imgUrl: 'https://i.imgur.com/OJ4cZx4.png',
      eType: 'buildBirdhouse'
    },
    {
      name: 'Organize books at the library.',
      imgUrl: 'https://i.imgur.com/7cAu8sY.png',
      eType: 'libraryBooks'
    },
    {
      name: 'Give a seminar on driving safety.',
      imgUrl: 'https://i.imgur.com/28ZH8lu.png',
      eType: 'drivingSafety'
    },
    {
      name: 'Give free music lessons.',
      imgUrl: 'https://i.imgur.com/8nD30fm.png',
      eType: 'musicLessons'
    },
    {
      name: 'Teach people how to register to vote.',
      imgUrl: 'https://i.imgur.com/tQLgvoQ.png',
      eType: 'teachPeopleVote'
    },
    {
      name: 'Clean up your local park.',
      imgUrl: 'https://i.imgur.com/BWUQl8R.png',
      eType: 'cleanPark'
    },
    {
      name: 'Give IT help to local adults',
      imgUrl: 'https://i.imgur.com/pF2rhaO.png',
      eType: 'itHelp'
    },
    {
      name: 'Foster a shelter animal.',
      imgUrl: 'https://i.imgur.com/V46C10y.png',
      eType: 'shelterAnimal'
    },
    {
      name: 'Babysit during PTA meetings.',
      imgUrl: 'https://i.imgur.com/mt3qMG4.png',
      eType: 'babysit'
    },
    {
      name: 'Collect stuffed animals.',
      imgUrl: 'https://i.imgur.com/EzbxVWT.png',
      eType: 'collectAnimals'
    },
    {
      name: 'Collect school supplies.',
      imgUrl: 'https://i.imgur.com/0Vlt5Ep.png',
      eType: 'collectSchoolSupplies'
    }
  ];

  const style = {
    // display: 'inline-block',
    margin: '20px',
    // justifyContent: 'space-between'
  }
  return (
    <div style={style}>
      {
        allEvents.map(event => <Event event={event} key={event.eType}></Event>)
      }
    </div>
  );
};

export default Home;