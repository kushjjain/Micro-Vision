import React from "react";
import { Linkedin, GraduationCap } from "lucide-react";

function AboutUs() {
  const teamMembers = [
    {
      name: "Shashank Naik",
      role: "Team Leader",
      expertise: "",
      education: "Student of Electronics and Telecommunication Engineering",
      linkedin: "https://www.linkedin.com/in/shashank-naik0906/",
      avatar: "🧑‍💻",
    },
    {
      name: "Rahul Singhal",
      role: "Member",
      expertise: "",
      education: "Student of Electronics and Telecommunication Engineering",
      linkedin: "https://www.linkedin.com/in/rahulsinghal1709/",
      avatar: "🧑‍💻",
    },
    {
      name: "Yash Doke",
      role: "Member",
      expertise: "",
      education: "Student of Electronics and Telecommunication Engineering",
      linkedin: "https://www.linkedin.com/in/yashdoke2004/",
      avatar: "🧑‍💻",
    },
    {
      name: "Kush Jain",
      role: "Member",
      expertise: "",
      education: "Student of Computer Engineering",
      linkedin: "https://www.linkedin.com/in/kush-jain-0a8910299/",
      avatar: "🧑‍💻",
    },
    {
      name: "Anushka Gavankar",
      role: "Member",
      expertise: "",
      education: "Student of Electronics and Telecommunication Engineering",
      linkedin: "https://www.linkedin.com/in/anushka-gavankar/",
      avatar: "👩‍💻",
    },
    {
      name: "Arshia Shah",
      role: "Member",
      expertise: "",
      education: "Student of Electronics and Telecommunication Engineering",
      linkedin: "https://www.linkedin.com/in/arshia-shah-813512301/",
      avatar: "👩‍💻",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">

      <div className="w-full h-full relative">
        <div
          className="absolute inset-0 bg-[url('/team4.jpg')] bg-cover bg-center opacity-20 z-0"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />

        <div className="relative z-20">
          {/* Main Content */}
          <div className="flex-grow px-6 py-20">

            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About Eureka_200
              </h1>
              <br />
              <br />
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                We are a passionate team of aspiring engineers dedicated to solving the microplastics crisis through innovative technology.
              </p>
            </div>

            {/* Mission & Vision Section */}
            <div className="px-0 py-16">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Mission */}
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-colors hover:shadow-[0_0_24px_8px_rgba(59,130,246,0.4)] hover:shadow-blue-400">
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-gray-300">
                    Our mission is to deliver a field-deployable microplastics detection product that combines digital holography and AI to provide fast, accurate, and actionable water-quality insights—anywhere, anytime.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-colors hover:shadow-[0_0_24px_8px_rgba(59,130,246,0.4)] hover:shadow-blue-400">
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-gray-300">
                    A world where microplastics pollution is detected, monitored, and prevented through advanced technology, ensuring clean water for future generations.
                  </p>
                </div>

              </div>
            </div>
          </div>


          {/* Team Section */}
          <div id="team-section" className="px-0 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  We are an Electronics & Telecommunication engineering team with strengths across embedded systems, IoT, AI/ML, cloud, and web—building a field‑deployable microplastics detection product powered by digital holography and AI.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors hover:shadow-[0_0_24px_8px_rgba(59,130,246,0.4)] hover:shadow-blue-400"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{member.avatar}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {member.linkedin ? (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="hover:underline hover:text-blue-400 transition-colors"
                            >
                              {member.name}
                            </a>
                          ) : (
                            member.name
                          )}
                        </h3>
                        <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                        {member.expertise && (
                          <p className="text-gray-300 text-sm mb-3">{member.expertise}</p>
                        )}
                        <div className="space-y-2 text-xs text-gray-400">
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="h-3 w-3" />
                            <span>{member.education}</span>
                          </div>
                          {member.linkedin && (
                            <div className="flex items-center space-x-2">
                              <Linkedin className="h-3 w-3" />
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-blue-400 hover:text-blue-300"
                              >
                                LinkedIn Profile
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">&mu;Vision</h3>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">Microplastics Detection System</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
