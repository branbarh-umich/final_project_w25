import { type PageMeta, type Page, type Social, type SectionGroup, type Content } from "@/(meta)/types";

// Config import:
import config from "../../../next.config.mjs";

export function getPages(): PageMeta {
  // Get the list of page names and routes:
  // [TODO] Hard-coded for now until MongoDB is setup:
  const pages: Page[] = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Experience",
      path: "/experience"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Skills",
      path: "/skills"
    },
    {
      name: "Connect",
      path: "/connect"
    }
  ];

  // Generate name/route conversion maps:
  let nameToPath: { [key: string]: string } = {};
  let pathToName: { [key: string]: string } = {};
  for (let i = 0; i < pages.length; i++) {
    nameToPath[pages[i].name] = pages[i].path;
    pathToName[pages[i].path] = pages[i].name;
  }

  return {
    pages,
    nameToPath,
    pathToName
  };
}

export function getFooterSocials(): Social[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  return [
    {
      name: "LinkedIn",
      iconSrc: `${config.basePath}/assets/icons/linkedin.svg`,
      href: "https://linkedin.com/in/branbarh"
    },
    {
      name: "Email",
      iconSrc: `${config.basePath}/assets/icons/gmail.svg`,
      href: "mailto:branbarh@umich.edu"
    },
    {
      name: "GitHub",
      iconSrc: `${config.basePath}/assets/icons/github.svg`,
      href: "https://github.com/branbarh"
    }
  ];
}

export function getConnectSocials(): Social[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  return [
    {
      name: "Brandon on LinkedIn",
      iconSrc: `${config.basePath}/assets/icons/linkedin.svg`,
      href: "https://linkedin.com/in/branbarh"
    },
    {
      name: "branbarh@umich.edu",
      iconSrc: `${config.basePath}/assets/icons/gmail.svg`,
      href: "mailto:branbarh@umich.edu"
    },
    {
      name: "+1 (586) 599 - 9501",
      iconSrc: `${config.basePath}/assets/icons/phone.svg`,
      href: "tel:+15865999501"
    }
  ];
}

export function getContent(page: string): Content[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  // [TODO] put all 7 past jobs on the experience page!!
  switch (page) {
    case "about":
      return [
        {
          type: "header",
          data: { value: "All About Brandon", fragmentID: "all-about-brandon", first: true }
        },
        {
          type: "text",
          data: { value: "Hey there!" }
        },
        {
          type: "text",
          data: {
            value:
              "I'm Brandon Barham, a student at the University of Michigan in Ann Arbor. I'm majoring in Computer Science through the College of Engineering, where I've been building a strong foundation in software development, critical thinking, and design. After this semester, in May of 2025, I’ll officially be graduating with my bachelor’s degree."
          }
        },
        {
          type: "photoGroup",
          data: { photos: [{ src: `${config.basePath}/assets/images/next-to-tree.jpg`, alt: "Brandon wearing light sports/hiking clothes, leaning on a large fallen tree." }] }
        },
        {
          type: "text",
          data: {
            value:
              "As much as I love spending time in nature, my desk is my natural habitat. I’ve always been drawn towards computers and creative problem solving, whether it be for a proof in my cryptography class or a bug in my React app. I have a knack for automating every little task in life, even if it only saves me three seconds in the end."
          }
        },
        {
          type: "text",
          data: {
            value: "You might be wondering how I got into programming to begin with—I think this excerpt from my University of Michigan admissions essay speaks for itself:"
          }
        },
        {
          type: "text",
          data: {
            value: "“Was it destiny? Fate? Chance? Honestly, not even I know."
          }
        },
        {
          type: "text",
          data: {
            value:
              "Let me provide a bit of context. Picture a small party, set in a small colonial, filled with the pleasant aura of a Thanksgiving dinner. An older man, probably in his late 50s, walks over to me. He seems familiar, but I can’t quite put my finger on why—he greets me. Distracted by the potatoes, I don't absorb much of what he says, but one key phrase stands out: Khan Academy. That sole phrase might not carry much significance to an outsider, but I attribute the course of the next decade of my life to that singular moment."
          }
        },
        {
          type: "text",
          data: {
            value:
              "With my age still in the single-digits, I wrote my first program on Khan Academy. Now, I use the term “wrote” loosely here; in reality, I just copied someone else’s program and fiddled with it a little. However, from then on, my curiosity and urge to learn shaped my present-day knowledge. I started writing more complex programs, employing real-world algorithms, and eventually branched out to building web pages and working with Node.js.”"
          }
        },
        {
          type: "text",
          data: {
            value:
              "Since writing this essay, I’ve further honed my skills through coursework, internships, and personal projects—but I know I’m just getting started. I’m very excited to see what the future has to offer."
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "My Mindset", fragmentID: "my-mindset" }
        },
        {
          type: "text",
          data: {
            value:
              "My core philosophy is that a minute today is worth two tomorrow. This guiding principle drives me to always put in maximal effort, even for the small things. I give my everything today, knowing I will reap the benefits down the line."
          }
        },
        {
          type: "text",
          data: {
            value:
              "There’s no better example of this mindset paying off than the car I recently bought—my Toyota GR86. I’ve been saving up to buy a car once I graduated college for years, and through devout research, disciplined financial management, and driven focus (no pun intended), I achieved that dream. I was never chasing a car, though—I was chasing the freedom it offered, and the effort it reflected. This car represents my two minutes paying their dividends."
          }
        },
        {
          type: "photoGroup",
          data: { photos: [{ src: `${config.basePath}/assets/images/gr86.jpg`, alt: "A 2025 Trueno Blue GR86 after a fresh rain, sitting in the parking lot of a Toyota dealership." }] }
        },
        {
          type: "text",
          data: {
            value:
              "Now, every time I get behind the wheel, I'm reminded that the time I put into today shapes the life I get to live tomorrow. It’s a reminder that hard work and determination aren’t just about immediate results—they’re about building something that lasts."
          }
        },
        {
          type: "text",
          data: {
            value: "Also, yes, the GR86 is a manual."
          }
        }
      ];
    case "experience":
      return [
        {
          type: "header",
          data: { value: "Work Experience", fragmentID: "work-experience", first: true }
        },
        {
          type: "text",
          data: {
            value:
              "I’ve worked several jobs ranging from fast food and retail to IT and software. I’ve compiled my accomplishments below, including some insight into my work and the difference I’ve made within each company."
          }
        },
        {
          type: "photoGroup",
          data: {
            photos: [
              {
                src: `${config.basePath}/assets/images/computer.jpg`,
                alt: "A top-down view of a laptop sitting on a desk with a notebook and potted plant to the right. A man holds a cup of coffee on the left."
              }
            ],
            small: true
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "GEICO | Technology Development Program", fragmentID: "geico-technology-development-program" }
        },
        {
          type: "text",
          data: {
            value: "Upcoming, May 2025"
          }
        },
        {
          type: "text",
          data: {
            value:
              "I’m thrilled to share that I’ll be joining GEICO’s Technology Development Program starting at the end of May! As part of this program, I’ll be working full-time as a software engineer, contributing to innovative projects that streamline processes, enhance user experience, and make a meaningful impact on the lives of millions. I’m especially excited to grow my skills, collaborate with other talented engineers, and help build the future of technology at one of the nation’s leading insurance providers."
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "GEICO | Software Development Intern", fragmentID: "geico-software-development-intern" }
        },
        {
          type: "text",
          data: {
            value: "Jun 2024 – Aug 2024"
          }
        },
        {
          type: "text",
          data: {
            value:
              "Over the summer of 2024, I interned for GEICO on the AI/ML Ops team. This experience taught me valuable lessons about working with a team of excellent engineers and developing real-world applications ready for production. The AI/ML team specializes in bringing the efficiency of AI and machine learning tools to the rest of the company’s developers and customers. It facilitates AI resources in Azure and develops specialized applications to enhance software development further."
          }
        },
        {
          type: "photoGroup",
          data: { photos: [{ src: `${config.basePath}/assets/images/terraform.png`, alt: "A white Terraform logo on a dark background, with the text Terraform underneath the logo." }], small: true }
        },
        {
          type: "text",
          data: {
            value:
              "For my internship project, I was tasked with automating the provisioning of Azure resources with Terraform, a declarative programming language. I was able to engineer a robust interface to streamline the provisioning of Azure ML workspaces and OpenAI deployments. This code expedited provisioning efficiency by around 98%, freeing up developers to focus on more critical tasks. I also automated the process of configuring Kubernetes cluster health checks, reducing the time between cluster deployment and the capability to receive diagnostic notifications by over 95%."
          }
        },
        {
          type: "text",
          data: {
            value:
              "Overall, I was able to exceed internship expectations, consistently meeting sprint goals in half the allotted time. This experience not only deepened my understanding of infrastructure as code and cloud architecture, but also reinforced the value of writing scalable, maintainable code in a collaborative setting. I’m incredibly excited to be returning in 2025 and continuing to grow with GEICO!"
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "Atwell | Information Technology Intern", fragmentID: "atwell-information-technology-intern" }
        },
        {
          type: "text",
          data: {
            value: "May 2023 – Apr 2024"
          }
        },
        {
          type: "text",
          data: {
            value:
              "During the summer following my sophomore year at the University of Michigan, I worked full-time as an IT intern for Atwell, a full-service engineering and construction consulting firm. At Atwell, I worked with several other IT professionals, learning fundamental hardware and software skills. I used my knowledge of computers to image, update, and manage over 100 laptop, desktop, and mobile devices each month."
          }
        },
        {
          type: "photoGroup",
          data: { photos: [{ src: `${config.basePath}/assets/images/atwell.jpg`, alt: "The logo for Atwell LLC, followed by the text Atwell." }], small: true }
        },
        {
          type: "text",
          data: {
            value:
              "I handled over 3,000 user accounts between Active Directory, PDQ, and ScreenConnect. As part of my internship, I filtered out and removed old, unused accounts, making it easier to find the accounts that mattered. I also provided hardware and software support for Atwell’s 1,500 employees, successfully closing every ticket I handled. Additionally, I developed several Powershell and Node.js programs throughout the internship to expedite specific user management, data analysis, and imaging tasks."
          }
        },
        {
          type: "text",
          data: {
            value:
              "Atwell taught me a great deal about working in a larger firm and managing hundreds, or even thousands, of machines simultaneously. These fundamental experiences carry over to nearly everything I do, even to this day."
          }
        }
      ];
    case "projects":
      return [
        {
          type: "header",
          data: { value: "Personal Projects", fragmentID: "personal-projects", first: true }
        },
        {
          type: "text",
          data: {
            value:
              "One of my favorite hobbies is working on personal projects outside school and work. While many of these projects never see the light of day, I’m quite proud of the ones that do. Many of these projects come about because I am interested in a subject or have a specific problem with an application I regularly use. Another common theme across many of these projects is that, as I mention on the About page, I love to automate everything I can."
          }
        },
        {
          type: "text",
          data: {
            value: "The following sections cover some of my favorite and most notable personal projects."
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "From-Scratch Multilayer Perceptron", fragmentID: "from-scratch-multilayer-perceptron" }
        },
        {
          type: "text",
          data: { value: "May 2024 – Aug 2024" }
        },
        {
          type: "text",
          data: {
            value:
              "Since I would be working on the AI/ML team during my GEICO internship, I decided it would be fun to build my own multilayer perceptron (MLP) to become more familiar with machine learning models. I developed a general machine learning framework from scratch in JavaScript, without using any libraries."
          }
        },
        {
          type: "text",
          data: {
            value:
              "My implementation was very successful; I was able to achieve a 99.84% accuracy on the MNIST dataset (which tests a network’s ability to recognize hand-written digits) with just a single 500-node hidden layer."
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "Trello Colors Extension", fragmentID: "trello-colors-extension" }
        },
        {
          type: "text",
          data: { value: "Aug 2020 – Present" }
        },
        {
          type: "photoGroup",
          data: {
            photos: [
              { src: `${config.basePath}/assets/images/trello-colors-1.png`, alt: "The Trello label editor, showing a label titled Example with the hex color #6F0E27." },
              { src: `${config.basePath}/assets/images/trello-colors-2.png`, alt: "The burgandy Example label displayed on a card titled Sample Card." }
            ],
            small: true
          }
        },
        {
          type: "text",
          data: {
            value:
              "Trello, now owned by Atlassin, is a digital list-making tool that helps to organize and prioritize tasks. I’ve personally used Trello since high school to keep track of upcoming classes, shifts, assignments, and deadlines. Trello is excellent in many ways; however, for a long time, labels were limited to just 10 select colors. Even today, Trello still only lets users select from 30 predefined colors. This is fairly limiting, especially considering other similar tools provide users with a color picker, allowing for practically unlimited color options."
          }
        },
        {
          type: "text",
          data: {
            value:
              "I took this limitation as a challenge, and wrote my own browser extension to solve it. Trello Colors allows users to enter a hex code before any label name to give it a custom color. Since releasing the extension in 2020, I’ve released over 20 updates on GitHub in response to Trello updates and user feedback. The repository currently has 24 stars."
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "Minecraft-to-Discord Link Bot", fragmentID: "minecraft-to-discord-link-bot" }
        },
        {
          type: "text",
          data: {
            value: "Aug 2023 – Dec 2023"
          }
        },
        {
          type: "photoGroup",
          data: {
            photos: [
              { src: `${config.basePath}/assets/images/discord-bot-1.jpg`, alt: "A Discord chat, with chats from Minecraft being displayed in a Minecraft font." },
              { src: `${config.basePath}/assets/images/discord-bot-2.jpg`, alt: "A list of commands supported by the Discord bot, which instruct the bot to perform actions." }
            ]
          }
        },
        {
          type: "text",
          data: {
            value:
              "For some time, I helped a Discord server with bot development. One bot I made enabled the remote control of a Minecraft client via the Discord server itself, through server commands. On the Discord side, JavaScript was used to handle commands. These commands were forwarded over MongoDB to the Minecraft side, which was written as a Minecraft Forge mod using Java."
          }
        },
        {
          type: "text",
          data: {
            value:
              "This bot mostly served to connect the Minecraft game chat with the Discord chat, but it also enabled several other features (such as querying online players, allowing server staff to remotely mute or ban users in-game, etc.)."
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "Collaborative Blog Post Editor", fragmentID: "collaborative-blog-post-editor" }
        },
        {
          type: "text",
          data: { value: "Jan 2022 – Aug 2022" }
        },
        {
          type: "photoGroup",
          data: {
            photos: [
              { src: `${config.basePath}/assets/images/academies-home.png`, alt: "The editor home page, displaying two example posts on the right side." },
              { src: `${config.basePath}/assets/images/academies-editor.png`, alt: "The editor itself, displaing a Google Docs-like editor." },
              { src: `${config.basePath}/assets/images/academies-settings.png`, alt: "The editor settings page, including information about the article and the users with access to it." }
            ]
          }
        },
        {
          type: "text",
          data: {
            value:
              "In my senior year of high school, my principal approached me and asked if I could develop a website for him. I took this opportunity to build a fully-fledged blog post editor, complete with Google Docs-style collaborative editing and a powerful suite of admin tools and customization features."
          }
        },
        {
          type: "text",
          data: {
            value:
              "To keep the website scalable and cost-effective, I used Firebase as a serverless backend for storage and real-time syncing. I also integrated OAuth 2.0 with Google Sign-In for easy user authentication and connected the app to the Google Drive API, allowing users to host images at low cost using the storage on their existing Google accounts."
          }
        }
      ];
    case "skills":
      return [
        {
          type: "header",
          data: { value: "Skills", fragmentID: "skills", first: true }
        },
        {
          type: "text",
          data: {
            value:
              "Throughout my education, work experience, and personal projects, I’ve worked with a multitude of different programming languages, libraries, frameworks, backends, tools, operating systems, applications, and more. I’ve compiled these skills into the lists that follow."
          }
        },
        {
          type: "photoGroup",
          data: { photos: [{ src: `${config.basePath}/assets/images/code.png`, alt: "Rectangles of several different colors, organized such that they imitate blocks of code." }] }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "Programming Languages", fragmentID: "programming-languages" }
        },
        {
          type: "text",
          data: {
            value:
              "I’ve worked with quite a few different programming languages over the years, ranging from purely mathematical languages (e.g., MATLAB), to esoteric languages, to scripting languages, and everything in between. I’ve listed each of these below, in order from most knowledge to least."
          }
        },
        {
          type: "bullet",
          data: {
            bullets: [
              "JavaScript/TypeScript/Node.js",
              "HTML5/CSS3",
              "Python",
              "C++",
              "C",
              "Java",
              "Terraform",
              "Bash/Shell/Powershell Script",
              "Lua",
              "Julia",
              "R",
              "MATLAB",
              "AutoHotkey",
              "BrainF***",
              "ARM64 Assembly"
            ]
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "Frameworks and Libraries", fragmentID: "frameworks-and-libraries" }
        },
        {
          type: "text",
          data: {
            value:
              "Below is a brief list of the major frameworks and libraries I’ve worked with over the years, including some less-major libraries I particularly enjoy. These frameworks and libraries are grouped based on the programming language they’re implemented and used in, although in no specific order."
          }
        },
        {
          type: "bullet",
          data: {
            bullets: [
              "Electron",
              "Next.js",
              "React",
              "Vue",
              "Express.js",
              "JQuery",
              "Bootstrap",
              "Three.js",
              "OpenGL",
              "Discord.js",
              "p5.js",
              "Robot.js",
              "Express",
              "Tesseract",
              "Axios",
              "ChatMC",
              "Firebase (JS)",
              "MongoDB (JS and Java)",
              "MinecraftForge",
              "Processing 3/4",
              "Pillow",
              "PyTorch",
              "Matplotlib",
              "NumPy"
            ]
          }
        },
        {
          type: "spacer",
          data: {}
        },
        {
          type: "header",
          data: { value: "Operating Systems and Applications", fragmentID: "operating-systems-and-applications" }
        },
        {
          type: "text",
          data: { value: "Over the years, I’ve worked with practically every operating system, including (but not limited to):" }
        },
        {
          type: "bullet",
          data: { bullets: ["Windows (from XP to 11)", "MacOS", "iOS/Android", "WSL, Ubuntu, and other Linux distros (e.g., for the Raspberry Pi)", "ChromeOS"] }
        },
        {
          type: "text",
          data: { value: "I’ve also worked with several different development platforms and applications, including (but again, not limited to):" }
        },
        {
          type: "bullet",
          data: {
            bullets: [
              "Git",
              "GitHub/GitLab",
              "Chrome Extensions (Manifest V2/3)",
              "Tampermonkey",
              "Cloudflare",
              "Firebase",
              "MongoDB",
              "Docker",
              "Heroku",
              "AWS",
              "VS Code",
              "Atom (RIP)",
              "Figma",
              "Postman/Insomnia"
            ]
          }
        },
        {
          type: "text",
          data: {
            value:
              "I’m particularly fond of Insomnia (a REST API testing tool), since I’ve actually contributed to the source code! You can view my contributions under the “Insomnia” section of the sidebar to the left."
          }
        }
      ];
  }
  return [];
}

export function getSectionGroups(page: string): SectionGroup[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  switch (page) {
    case "about":
      return [
        {
          name: "Contents",
          sections: [
            {
              name: "All About Brandon",
              fragmentID: "all-about-brandon"
            },
            {
              name: "My Mindset",
              fragmentID: "my-mindset"
            }
          ]
        },
        {
          name: "References",
          sections: [
            {
              name: "GitHub",
              href: "https://github.com/branbarh"
            }
          ]
        }
      ];
    case "experience":
      return [
        {
          name: "Contents",
          sections: [
            {
              name: "Work Experience",
              fragmentID: "work-experience"
            },
            {
              name: "GEICO (TDP)",
              fragmentID: "geico-technology-development-program"
            },
            {
              name: "GEICO (SDI)",
              fragmentID: "geico-software-development-intern"
            },
            {
              name: "Atwell",
              fragmentID: "atwell-information-technology-intern"
            }
          ]
        },
        {
          name: "References",
          sections: [
            {
              name: "Atwell News",
              href: "https://atwell.com/news-and-insights/more-than-60-interns-join-atwell-this-summer/"
            }
          ]
        }
      ];
    case "projects":
      return [
        {
          name: "Contents",
          sections: [
            {
              name: "Personal Projects",
              fragmentID: "personal-projects"
            },
            {
              name: "From-Scratch MLP",
              fragmentID: "from-scratch-multilayer-perceptron"
            },
            {
              name: "Trello Colors",
              fragmentID: "trello-colors-extension"
            },
            {
              name: "MC-Discord Bot",
              fragmentID: "minecraft-to-discord-link-bot"
            },
            {
              name: "Blog Post Editor",
              fragmentID: "collaborative-blog-post-editor"
            }
          ]
        },
        {
          name: "References",
          sections: [
            {
              name: "GitHub",
              href: "https://github.com/branbarh"
            },
            {
              name: "Trello Colors",
              href: "https://github.com/branbarh/Trello-Colors-Extension"
            },
            {
              name: "MC-Discord Bot",
              href: "https://github.com/branbarh/zbot-mc"
            }
          ]
        }
      ];
    case "skills":
      return [
        {
          name: "Contents",
          sections: [
            {
              name: "Skills",
              fragmentID: "skills"
            },
            {
              name: "Languages",
              fragmentID: "programming-languages"
            },
            {
              name: "Libraries",
              fragmentID: "frameworks-and-libraries"
            },
            {
              name: "Platforms",
              fragmentID: "operating-systems-and-applications"
            }
          ]
        },
        {
          name: "References",
          sections: [
            {
              name: "GitHub",
              href: "https://github.com/branbarh"
            }
          ]
        },
        {
          name: "Insomnia Contributions",
          sections: [
            {
              name: "PR #7279",
              href: "https://github.com/Kong/insomnia/pull/7279"
            },
            {
              name: "PR #7280",
              href: "https://github.com/Kong/insomnia/pull/7280"
            },
            {
              name: "Issue #7039",
              href: "https://github.com/Kong/insomnia/issues/7039#issuecomment-2048703994"
            }
          ]
        }
      ];
  }
  return [];
}

// [TODO] reactQuery
// [TODO] Magic UI (https://magicui.design)
