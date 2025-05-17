import React from "react";
import News_card from "../Components/News_card";
export default function News() {
  return (
    <div className="grid sm:grid-cols-1 max-w-7xl mx-auto my-12 p-6 md:grid-cols-3 sm:mt-5">
      <News_card
        HeadLine="Moinul just got the first prize!"
        newsDetails="Moinul Islam has won first prize in a competitive React workshop for building “CrowdFund Connect” — a creative platform that allows users to donate coins to various funding campaigns."
      />
      <News_card
        HeadLine="UIU Students Create AI That Only Replies with Bro chill!"
        newsDetails="A group of sleep-deprived students at UIU built an AI that responds to every prompt with Bro, chill. Surprisingly, it helped reduce stress levels across the campus by 43% overnight."
      />
      <News_card
        HeadLine="UIU Developers HUB Launches to Empower Future Innovators"
        newsDetails="United International University has officially launched the UIU Developers HUB, a dynamic community platform aimed at nurturing student developers through hands-on workshops, mentorship programs, and real-world projects. "
      />

      <News_card
        HeadLine="AI Bot at UIU Accidentally Joins Exam, Scores Higher Than Everyone"
        newsDetails="An experimental AI developed by UIU students mistakenly submitted a final exam. Shockingly, it scored 98%, sparking debates about replacing students with bots—or just letting AI take our finals."
      />

      <News_card
        HeadLine=" Student Tries to Deploy React App, Accidentally Launches Satellite"
        newsDetails="While trying to deploy his React project using Bun and Vite, a UIU student misconfigured a command and reportedly launched a weather satellite. The app is now live… in space."
      />

      <News_card
        HeadLine="UIU Cafeteria Robot Refuses to Serve Without Proper API Request"
        newsDetails="The newly installed AI-powered cafeteria robot went full backend mode—refusing to serve food unless students send a valid POST request with a JSON body. It now demands Swagger documentation."
      />
    </div>
  );
}
