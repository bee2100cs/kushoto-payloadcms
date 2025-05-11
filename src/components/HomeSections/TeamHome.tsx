import React from 'react'

export const teamKushoto = {
  title: 'Our Team',
  description:
    'Meet the dedicated team behind Kushoto, a group of passionate professionals driven by a shared commitment to empowering communities and telling the stories that matter most.',
  button: {
    text: 'Meet All Members',
    link: '#',
  },
  members: [
    {
      name: 'Regina Mutiru',
      position: 'Co-Founder',
      social: {
        facebook: 'https://www.facebook.com/regina.pitas.3/',
        LinkedIn: 'https://www.linkedin.com/in/regina-mutiru-mwendwa-21951b27/',
        instagram: 'https://www.instagram.com/reginamutiru/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/regina-mutiru-750-Bq2zWEZjTkTfNsFBby6V0XMaoIgz48.jpg',
    },
    {
      name: 'Ann Agar',
      position: 'Strategic Adviser',
      social: {
        facebook: 'https://www.facebook.com/anne.claire.94',
        LinkedIn: 'https://www.linkedin.com/in/anne-agar-031777152/',
        instagram: 'https://www.instagram.com/agar_anne/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/Ann-750-fmyL52413H7oLFaCvaKyx7SZmXEcNO.jpg',
    },
    {
      name: 'Winnie Gatwiri',
      position: 'Communications Consultant',
      social: {
        facebook: 'https://www.facebook.com/',
        linkedIn: 'https://www.linkedin.com/in/',
        instagram: 'https://www.instagram.com/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/gatwiri-750-zNQKuQ56iRrAVZnK7TqPcIvjj67bBS.jpg',
    },
    {
      name: 'Muchai Gikundi',
      position: 'Programs Director',
      social: {
        facebook: 'https://www.facebook.com/muchai.bee/',
        linkedIn: 'https://www.linkedin.com/in/bee2100/',
        instagram: 'https://www.instagram.com/muchaibee/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/bryan-750-NRe4JKX32f3Ihqz7MheqDpqLUfKunu.jpg',
    },
    {
      name: 'Irene Mwende',
      position: 'Lead Researcher',
      social: {
        facebook: 'https://www.facebook.com/',
        linkedIn: 'https://www.linkedin.com/in/',
        instagram: 'https://www.instagram.com/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/kampombe-750-0mOYBUmMApEJjhpKQYOZ4QqCApVW3l.jpg',
    },
    {
      name: 'Kampombe Singe',
      position: 'Creative Director',
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=100086960373036',
        linkedIn: 'https://ke.linkedin.com/in/stephen-kampombe-9b54b4264',
        instagram: 'https://www.instagram.com/kampombe/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/mwende-750-4r7wFjr1ryyg5EfZHNKIzII4G78jyR.jpg',
    },
    {
      name: 'Dennis Muthee',
      position: 'Logistics Manager',
      social: {
        facebook: 'https://www.facebook.com/denis.muthee',
        instagram: 'https://www.instagram.com/denismuthee/',
      },
      image:
        'https://g9jclz0ebr5f6zvy.public.blob.vercel-storage.com/kushoto-team/dennis-muthee-68NKCSQdkoHaVkQRzMAn013xDwoYuA.jpg',
    },
  ],
}

const TeamHome = () => {
  return (
    <section className="relative block pt-10 px-0 pb-10 z-10">
      <div className="mx-auto max-w-[1320px]  px-[15px]">
        {/* Title */}
        <div className="relative">
          <div className="inline-block pl-[10px] mb-[9px] bg-gradient-to-r from-[#ff5800] to-[rgba(202,243,51,0)]">
            <p className="text-2xl leading-[35px] font-semibold text-[var(--thm-black)] sm:text-[17px]">
              Team Kushoto
            </p>
          </div>
        </div>
        {/* Team description */}
        <div className="relative py-24 pt-0 md:py-20 sm:py-16">
          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-center">
              <div className="w-full md:w-10/12 lg:w-8/12 xl:w-4/12 xl:order-2">
                <h2 className="text-4xl md:text-5xl hidden lg:block font-normal italic text-neutral-600 mb-4">
                  {teamKushoto.title}
                </h2>
                <p>{teamKushoto.description}</p>
                <a
                  className="mt-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded"
                  href={teamKushoto.button.link}
                >
                  {teamKushoto.button.text}
                </a>
              </div>
              {/* Team members */}
              <div className="w-full xl:w-8/12 xl:order-1">
                <div className="flex flex-col lg:flex-row gap-3">
                  {teamKushoto.members.slice(0, 3).map((member, index) => (
                    <div key={index} className="w-full md:w-1/3">
                      <div className="relative overflow-hidden group">
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="w-full transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-all duration-300">
                          {/* Default inner content */}
                          <div className="absolute bottom-0 left-0 w-full p-4 transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:opacity-0 group-hover:translate-y-[-8px]">
                            <h5 className="mb-1 text-white">{member.name}</h5>
                            <span className="text-gray-300">{member.position}</span>
                          </div>

                          {/* Hover content */}
                          <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:opacity-100 group-hover:translate-y-0">
                            <ul className="flex space-x-2">
                              {member.social.facebook && (
                                <li>
                                  <a
                                    href={member.social.facebook}
                                    className="transition-opacity duration-100 text-white hover:opacity-80"
                                  >
                                    <i className="bi bi-facebook"></i>
                                  </a>
                                </li>
                              )}
                              {member.social.linkedIn && (
                                <li>
                                  <a
                                    href={member.social.linkedIn}
                                    className="transition-opacity duration-100 text-white hover:opacity-80"
                                  >
                                    <i className="bi bi- linkedIn"></i>
                                  </a>
                                </li>
                              )}
                              {member.social.instagram && (
                                <li>
                                  <a
                                    href={member.social.instagram}
                                    className="transition-opacity duration-100 text-white hover:opacity-80"
                                  >
                                    <i className="bi bi-instagram"></i>
                                  </a>
                                </li>
                              )}
                            </ul>
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
      </div>
    </section>
  )
}

export default TeamHome
