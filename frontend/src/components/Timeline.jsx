import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './home.css';

const Timeline = () => {
  return (
    <div className="flex flex-col">
      <header className=' z-10'>
        <Navbar />
      </header>

      <div className="flex-grow text-white">
        <div className="text-center py-24">
          <p className="text-8xl font-kara">The Events Timeline</p>
        </div>
        <Timelinedate Date="October, 2024" />
        <Righttimelinecomp 
          eventname="Chords' 24" 
          clubname="Ninaada" 
          description="Ninaada invites you to Chords'24, taking place on 30th October." 
        />
        <Lefttimelinecomp 
          eventname="Harmony Fest" 
          clubname="Music Club" 
          description="Join us for a musical journey at Harmony Fest on 10th November." 
        />
        <Timelinedate Date="October, 2024" />

        <div className="max-w-11 max-h-11 mx-auto">
          <div className="bg-white w-10 h-10 rounded-full mx-auto" style={{marginTop: '-1rem'}}></div>
        </div>
      </div>

      <div className="py-16 pt-24 text-center text-white">
        <p>Contact Us for any changes/queries.</p>
      </div>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

function Righttimelinecomp({ eventname, clubname, description }) {
  return (
    <div>
      <div className="flex flex-auto relative justify-center ml-96 space-x-16">
        <div className="max-h-11 max-w-11">
          <div className="bg-white w-10 h-10 rounded-full mx-auto" style={{marginTop: '-1rem'}}></div>
        </div>
        <Timelinecard eventname={eventname} clubname={clubname} description={description} />
      </div>
      <div className="max-w-2 min-h-64 mx-auto">
        <div className="bg-white h-64 w-2 mt-0 mx-auto" style={{marginTop: '-10rem'}}></div>
      </div>
    </div>
  );
}

function Lefttimelinecomp({ eventname, clubname, description }) {
  return (
    <div>
      <div className="flex flex-auto relative space-x-16" style={{marginLeft: '227px'}}>
      <Timelinecard eventname={eventname} clubname={clubname} description={description} />
        <div className="max-h-11 max-w-11">
          <div className="bg-white w-10 h-10 rounded-full" style={{marginTop: '-1rem'}}></div>
        </div>
      </div>
      <div className="max-w-2 min-h-64 mx-auto">
        <div className="bg-white h-64 w-2 mt-0 mx-auto" style={{marginTop: '-10rem'}}></div>
      </div>
    </div>
  );
}


const Timelinecard = ({ eventname, clubname, description }) => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden flex flex-col min-h-44 max-w-80 w-full p-4 shadow-lg">
      <div className="text-black flex justify-between mb-2">
        <div className="text-left">
          <p className="font-semibold">{eventname}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{clubname}</p>
        </div>
      </div>
      <div className="text-left">
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-center mt-auto">
        <button className="btn-clr rounded-xl w-full lg:w-[28vw] py-2 text-white font-sans shadow-2xl transition-all hover:border border-black">
          Learn More
        </button>
      </div>
    </div>
  );
}

const Timelinedate = ({Date}) => {
  return(
    <div>
      <div className="flex flex-auto relative justify-center ml-96 space-x-16">
        <div className="max-h-11 max-w-11 " style={{marginLeft:'-25px'}}>
          <div className="bg-white w-10 h-10 rounded-full mx-auto" style={{marginTop: '-1rem'}}></div>
        </div>
        <div className='text-white font-bold min-h-44 max-w-80 -mt-8'>
          <p className='text-7xl font-kara'>{Date}</p>
        </div>
      </div>
      <div className="max-w-2 min-h-64 mx-auto">
        <div className="bg-white h-72 w-2 mt-0 mx-auto" style={{marginTop: '-10rem'}}></div>
      </div>
    </div>
  )
}

export default Timeline;
